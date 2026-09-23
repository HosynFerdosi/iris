"use client"

import { Tick02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { AnimatePresence, motion } from "framer-motion"
import { LoginForm } from "@/features/auth/components/login-form"
import { VerifyForm } from "@/features/auth/components/verify-form"
import { useTab } from "@/features/auth/hooks/use-tab"

export default function Page() {
	const { tab } = useTab()

	return (
		<div>
			<AnimatePresence mode="wait">
				{tab === "login" && (
					<motion.div
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -12 }}
						initial={{ opacity: 0, x: 12 }}
						key="phone"
						transition={{ duration: 0.3 }}
					>
						<LoginForm />
					</motion.div>
				)}

				{tab === "verify" && (
					<motion.div
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -12 }}
						initial={{ opacity: 0, x: 12 }}
						key="otp"
						transition={{ duration: 0.3 }}
					>
						<VerifyForm />
					</motion.div>
				)}

				{tab === "success" && (
					<motion.div
						animate={{ opacity: 1, scale: 1 }}
						className="flex flex-col items-center py-6 text-center"
						initial={{ opacity: 0, scale: 0.9 }}
						key="success"
						transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
					>
						<motion.div
							animate={{ scale: 1 }}
							className="flex size-16 items-center justify-center rounded-full bg-success/15 text-emerald-500"
							initial={{ scale: 0 }}
							transition={{
								delay: 0.1,
								type: "spring",
								stiffness: 260,
								damping: 18,
							}}
						>
							<HugeiconsIcon icon={Tick02Icon} size={30} />
						</motion.div>
						<h1 className="mt-5 text-xl font-bold text-foreground">
							You're all set
						</h1>
						<p className="mt-1.5 text-sm text-muted-foreground">
							Taking you to your profile...
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
