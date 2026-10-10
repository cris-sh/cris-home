import Android from '../icons/android.svg';
import Bun from '../icons/bun.svg';
import Cloudflare from '../icons/cloudflare.svg';
import Discord from '../icons/discord.svg';
import Docker from '../icons/docker.svg';
import Flyway from '../icons/flyway.svg';
import GitHubActions from '../icons/githubactions.svg';
import Java from '../icons/openjdk.svg';
import Jwt from '../icons/jsonwebtokens.svg';
import SpringBoot from '../icons/springboot.svg';
import Expo from '../icons/expo.svg';
import GitHub from '../icons/github.svg';
import Go from '../icons/go.svg';
import GooglePlay from '../icons/googleplay.svg';
import LinkedIn from '../icons/linkedin.svg';
import MongoDB from '../icons/mongodb.svg';
import NextJs from '../icons/nextdotjs.svg';
import Nginx from '../icons/nginx.svg';
import PostgreSQL from '../icons/postgresql.svg';
import ReactLogo from '../icons/react.svg';
import Redis from '../icons/redis.svg';
import Remix from '../icons/remix.svg';
import Sentry from '../icons/sentry.svg';
import Stripe from '../icons/stripe.svg';
import TailwindCSS from '../icons/tailwindcss.svg';
import TypeScript from '../icons/typescript.svg';
import Vite from '../icons/vite.svg';

// Each brand maps to a `.brand-<slug>` class in global.css that holds its colour.
// Colours are the official brand hex, nudged only where needed to keep ≥ 3:1
// against the page background in each theme. Monochrome marks use the text colour.
export const brands = {
	Android: { icon: Android, slug: 'android' },
	Bun: { icon: Bun, slug: 'mono' },
	Cloudflare: { icon: Cloudflare, slug: 'cloudflare' },
	Discord: { icon: Discord, slug: 'discord' },
	Docker: { icon: Docker, slug: 'docker' },
	Expo: { icon: Expo, slug: 'mono' },
	Flyway: { icon: Flyway, slug: 'flyway' },
	GitHub: { icon: GitHub, slug: 'mono' },
	'GitHub Actions': { icon: GitHubActions, slug: 'githubactions' },
	Go: { icon: Go, slug: 'go' },
	'Google Play': { icon: GooglePlay, slug: 'mono' },
	Java: { icon: Java, slug: 'mono' },
	JWT: { icon: Jwt, slug: 'mono' },
	LinkedIn: { icon: LinkedIn, slug: 'linkedin' },
	MongoDB: { icon: MongoDB, slug: 'mongodb' },
	'Next.js': { icon: NextJs, slug: 'mono' },
	Nginx: { icon: Nginx, slug: 'nginx' },
	PostgreSQL: { icon: PostgreSQL, slug: 'postgresql' },
	React: { icon: ReactLogo, slug: 'react' },
	'React Native': { icon: ReactLogo, slug: 'react' },
	Redis: { icon: Redis, slug: 'redis' },
	Remix: { icon: Remix, slug: 'mono' },
	Sentry: { icon: Sentry, slug: 'sentry' },
	'Spring Boot': { icon: SpringBoot, slug: 'springboot' },
	Stripe: { icon: Stripe, slug: 'stripe' },
	TailwindCSS: { icon: TailwindCSS, slug: 'tailwindcss' },
	TypeScript: { icon: TypeScript, slug: 'typescript' },
	Vite: { icon: Vite, slug: 'vite' },
} as const;

export type BrandName = keyof typeof brands;

export function isBrand(name: string): name is BrandName {
	return name in brands;
}
