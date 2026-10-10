import PDFDocument from 'pdfkit';
import type { Resume } from '../data/resume';

// Renders the résumé as a PDF built for applicant tracking systems (ATS).
//
// What that means in practice, and why each choice is here:
// - Real, selectable text in a standard font (Helvetica). Nothing is an image.
// - One column, top to bottom. No tables, text boxes, sidebars or icons, so the
//   reading order a parser extracts is the order a person reads.
// - Conventional section names ("Experience", "Education", "Skills").
// - Contact details in the body, not in a page header or footer, where many
//   parsers don't look.
// - Links written out as their URL.
// - Tagged structure (headings, paragraphs, lists) and document metadata, which
//   also makes the file accessible to screen readers.

const PAGE = { size: 'LETTER', margins: { top: 42, bottom: 40, left: 56, right: 56 } } as const;
const REGULAR = 'Helvetica';
const BOLD = 'Helvetica-Bold';
const INK = '#000000';
const SOFT = '#333333';
const BODY = 10;
const LEADING = 2;

export function renderResumePdf(resume: Resume): Promise<Uint8Array> {
	return new Promise((resolve, reject) => {
		const doc = new PDFDocument({
			...PAGE,
			tagged: true,
			lang: resume.locale,
			displayTitle: true,
			pdfVersion: '1.7',
			info: {
				Title: `${resume.name} - ${resume.title}`,
				Author: resume.name,
				Subject: resume.headings.summary,
				Keywords: resume.skills.flatMap((group) => group.items).join(', '),
			},
		});

		const chunks: Buffer[] = [];
		doc.on('data', (chunk: Buffer) => chunks.push(chunk));
		doc.on('end', () => resolve(new Uint8Array(Buffer.concat(chunks))));
		doc.on('error', reject);

		const left = doc.page.margins.left;
		const width = doc.page.width - doc.page.margins.left - doc.page.margins.right;
		const root = doc.struct('Document');
		doc.addStructure(root);

		/** Draw something as a tagged element of the document. */
		const tag = (type: string, draw: () => void, parent = root) => {
			parent.add(doc.struct(type, draw));
		};
		/** Start a new page unless this much room is left, so a heading never sits alone at the bottom. */
		const reserve = (points: number) => {
			if (doc.y + points > doc.page.height - doc.page.margins.bottom) doc.addPage();
		};
		const gap = (points: number) => {
			doc.y += points;
		};
		const text = (value: string, font: string, size: number, color = INK) => {
			doc.font(font).fontSize(size).fillColor(color).text(value, left, doc.y, { width, lineGap: LEADING });
		};

		const sectionHeading = (title: string) => {
			gap(8);
			reserve(70);
			tag('H2', () => {
				doc
					.font(BOLD)
					.fontSize(BODY)
					.fillColor(INK)
					.text(title.toUpperCase(), left, doc.y, { width, characterSpacing: 0.6 });
			});
			// The rule is decoration: marked as an artifact so no parser or screen reader sees it.
			doc.markContent('Artifact', { type: 'Layout' });
			doc
				.moveTo(left, doc.y + 1)
				.lineTo(left + width, doc.y + 1)
				.lineWidth(0.5)
				.strokeColor(INK)
				.stroke();
			doc.endMarkedContent();
			gap(6);
		};

		const bulletList = (items: string[]) => {
			const list = doc.struct('L');
			root.add(list);
			for (const item of items) {
				const row = doc.struct('LI');
				list.add(row);
				const y = doc.y;
				row.add(
					doc.struct('Lbl', () => {
						doc.font(REGULAR).fontSize(BODY).fillColor(INK).text('•', left + 2, y, { lineBreak: false });
					}),
				);
				row.add(
					doc.struct('LBody', () => {
						doc
							.font(REGULAR)
							.fontSize(BODY)
							.fillColor(INK)
							.text(item, left + 13, y, { width: width - 13, lineGap: LEADING });
					}),
				);
				row.end();
				gap(2);
			}
			list.end();
		};

		// ── Name, title, contact
		tag('H1', () => text(resume.name, BOLD, 21));
		gap(1);
		tag('P', () => text(resume.title, REGULAR, 12, SOFT));
		gap(4);
		tag('P', () => {
			doc.font(REGULAR).fontSize(BODY).fillColor(INK);
			doc.text(`${resume.location}  |  `, left, doc.y, { width, continued: true });
			doc.text(resume.email, { link: `mailto:${resume.email}`, continued: false });
		});
		tag('P', () => {
			doc.font(REGULAR).fontSize(BODY).fillColor(INK);
			resume.links.forEach((link, index) => {
				const last = index === resume.links.length - 1;
				if (index === 0) doc.text(link.label, left, doc.y, { width, link: link.href, continued: true });
				else doc.text(link.label, { link: link.href, continued: !last });
				if (!last) doc.text('  |  ', { link: null, continued: true });
			});
		});

		// ── Summary
		sectionHeading(resume.headings.summary);
		tag('P', () => text(resume.summary, REGULAR, BODY));

		// ── Experience
		sectionHeading(resume.headings.experience);
		resume.experience.forEach((job, index) => {
			if (index > 0) gap(8);
			reserve(60);
			tag('H3', () => text(job.role, BOLD, BODY + 0.5));
			tag('P', () => text(`${job.company}  |  ${job.location}  |  ${job.dates}`, REGULAR, BODY, SOFT));
			gap(3);
			bulletList(job.bullets);
		});

		// ── Projects
		if (resume.projects.length > 0) {
			sectionHeading(resume.headings.projects);
			resume.projects.forEach((project, index) => {
				if (index > 0) gap(7);
				reserve(60);
				// Name and link share a line: one fewer row per project keeps this to a page.
				const title = project.note ? `${project.name} (${project.note})` : project.name;
				const url = project.url;
				tag('H3', () => {
					doc.font(BOLD).fontSize(BODY + 0.5).fillColor(INK);
					doc.text(title, left, doc.y, { width, lineGap: LEADING, continued: !!url });
					if (url) {
						doc
							.font(REGULAR)
							.fontSize(BODY)
							.text(`  |  ${url.replace(/^https?:\/\//, '')}`, { link: url, lineGap: LEADING, continued: false });
					}
				});
				tag('P', () => text(project.description, REGULAR, BODY));
				tag('P', () => text(`${resume.headings.technologies}: ${project.technologies.join(', ')}`, REGULAR, BODY));
			});
		}

		// ── Skills
		sectionHeading(resume.headings.skills);
		for (const group of resume.skills) {
			tag('P', () => {
				doc.font(BOLD).fontSize(BODY).fillColor(INK);
				doc.text(`${group.label}: `, left, doc.y, { width, continued: true, lineGap: LEADING });
				doc.font(REGULAR).text(group.items.join(', '), { continued: false, lineGap: LEADING });
			});
		}

		// ── Education
		sectionHeading(resume.headings.education);
		resume.education.forEach((item, index) => {
			if (index > 0) gap(8);
			reserve(30);
			tag('H3', () => text(item.degree, BOLD, BODY + 0.5));
			tag('P', () => text(`${item.school}  |  ${item.dates}`, REGULAR, BODY, SOFT));
		});

		root.end();
		doc.end();
	});
}
