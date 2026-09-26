"use client"

import { motion } from "framer-motion"
import { AppImage } from "@/components/shared/image"

export default function Layout({ children }: LayoutProps<"/login">) {
	return (
		<div className="relative flex min-h-[calc(100vh-64px)] w-full overflow-hidden">
			<div className="absolute inset-0 lg:relative lg:w-1/2 z-0">
				<AppImage
					alt="authentication-backdrop"
					aspect="auto"
					preload
					src="/images/auth/backdrop.jpg"
					unoptimized
				/>
				<div className="absolute inset-0 bg-linear-to-t from-background lg:via-background/30 via-background to-transparent" />
				<div className="absolute inset-0 lg:bg-linear-to-r from-transparent via-transparent to-background" />
				<motion.div
					animate={{ opacity: 1, y: 0 }}
					className="absolute bottom-12 lg:left-10 left-8 right-10"
					initial={{ opacity: 0, y: 16 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
				>
					<p className="text-2xl font-semibold leading-snug text-balance">
						Every story starts with a single frame.
					</p>
					<p className="mt-2 text-sm text-muted-foreground">
						Sign in to pick up exactly where you left off.
					</p>
				</motion.div>
			</div>

			<div className="flex w-full items-center justify-center px-6 py-16 lg:w-1/2 relative z-1">
				<motion.div
					animate={{ opacity: 1, scale: 1 }}
					className="w-full max-w-sm"
					initial={{ opacity: 0, scale: 0.98 }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
				>
					{children}
				</motion.div>
			</div>
		</div>
	)
}
