import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	reactCompiler: true,
	reactStrictMode: false,
	typedRoutes: true,
	experimental: {
		typedEnv: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "**",
			},
		],
	},
}

export default nextConfig
