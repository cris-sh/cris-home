import { a as getImage$1 } from './deterministic-string_Jhc5dO1n.mjs';
import './entrypoint_Dx6hQ0Ol.mjs';

const imageConfig = {"endpoint":{"route":"/_image"},"service":{"entrypoint":"@astrojs/vercel/build-image-service","config":{"sizes":[640,750,828,1080,1200,1920,2048,3840],"domains":[],"remotePatterns":[{"protocol":"https","hostname":"i.imgur.com"}]}},"dangerouslyProcessSVG":false,"domains":[],"remotePatterns":[{"protocol":"https","hostname":"i.imgur.com"}],"responsiveStyles":false,"breakpoints":[640,750,828,1080,1200,1920,2048,3840]};
								Object.defineProperty(imageConfig, 'assetQueryParams', {
									value: undefined,
									enumerable: false,
									configurable: true,
								});
								const getImage = async (options) => await getImage$1(options, imageConfig);

export { getImage, imageConfig };
