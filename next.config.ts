import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	remotePatterns: [{}],
	images: {
		remotePatterns: [
			{
				hostname: "placehold.co/**",
			},
		],
		dangerouslyAllowSVG: true,
	},
};

export default nextConfig;
