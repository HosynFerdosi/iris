"use client"

import {
	BookmarkAdd01Icon,
	Cancel01Icon,
	Menu01Icon,
	UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { AnimatePresence, motion } from "framer-motion"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Logo } from "@/components/shared/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { glassSurfaceVariants } from "../ui/glasscn/glass-variants"

const links = [
	{ href: "/movies", label: "Movies" },
	{ href: "/tv", label: "TV Shows" },
	{ href: "/discover", label: "Discover" },
	{ href: "/genres", label: "Genres" },
	{ href: "/coming-soon", label: "Coming Soon" },
]

export function MobileNav() {
	const [open, setOpen] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		setOpen(false)
	}, [])

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : ""
		return () => {
			document.body.style.overflow = ""
		}
	}, [open])

	return (
		<div className="lg:hidden">
			<Button
				aria-expanded={open}
				aria-label="Open menu"
				onClick={() => setOpen(true)}
				size="icon"
				variant="ghost"
			>
				<HugeiconsIcon icon={Menu01Icon} size={22} />
			</Button>

			<AnimatePresence>
				{open && (
					<>
						<motion.div
							animate={{ opacity: 1 }}
							aria-hidden
							className="fixed inset-0 z-40 bg-overlay-scrim/80 backdrop-blur-sm"
							exit={{ opacity: 0 }}
							initial={{ opacity: 0 }}
							onClick={() => setOpen(false)}
						/>
						<motion.div
							animate={{ x: 0 }}
							aria-label="Mobile navigation"
							aria-modal="true"
							className={cn(
								"fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col",
								glassSurfaceVariants({ glassVariant: "clear" })
							)}
							exit={{ x: "100%" }}
							initial={{ x: "100%" }}
							role="dialog"
							transition={{
								type: "spring",
								stiffness: 320,
								damping: 34,
							}}
						>
							<div className="flex items-center justify-between px-5 py-4">
								<Logo />
								<Button
									aria-label="Close menu"
									onClick={() => setOpen(false)}
									size="icon"
									variant="ghost"
								>
									<HugeiconsIcon icon={Cancel01Icon} size={20} />
								</Button>
							</div>
							<nav className="flex flex-col gap-1 px-3 py-2">
								{links.map((link) => (
									<Link
										className={cn(
											"rounded-lg px-3 py-3 text-base font-medium transition-colors",
											pathname === link.href
												? "bg-secondary text-foreground"
												: "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
										)}
										href={link.href as Route}
										key={link.href}
									>
										{link.label}
									</Link>
								))}
							</nav>
							<div className="mt-auto flex flex-col gap-2 border-t border-border px-3 py-4">
								<Link
									className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
									href="/"
								>
									<HugeiconsIcon icon={BookmarkAdd01Icon} size={18} />
									Watchlist
								</Link>
								<Link
									className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
									href="/"
								>
									<HugeiconsIcon icon={UserIcon} size={18} />
									Profile
								</Link>
								<Link className="mt-1" href="/">
									<Button className="w-full">Sign in</Button>
								</Link>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	)
}
