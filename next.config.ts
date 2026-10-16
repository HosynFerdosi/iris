import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	experimental: {
		agentFeedback: true,
		typedEnv: true,
	},
	cacheComponents: true,
	partialPrefetching: true,
	reactCompiler: true,
	reactStrictMode: false,
	typedRoutes: true,
	images: {
		unoptimized: true,
	},
	turbopack: {
		rules: {
			"*.css": {
				loaders: ["@tailwindcss/turbopack"],
				as: "*.css",
			},
		},
	},
	allowedDevOrigins: ["192.168.1.100"],
}

export default nextConfig
