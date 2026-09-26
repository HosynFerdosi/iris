import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	reactCompiler: true,
	reactStrictMode: false,
	typedRoutes: true,
	experimental: {
		typedEnv: true,
		serverActions: {
			bodySizeLimit: "10mb",
		},
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
	allowedDevOrigins: ["192.168.1.100"],
}

export default nextConfig
