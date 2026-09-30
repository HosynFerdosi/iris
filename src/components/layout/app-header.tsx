"use client"

import {
	BookmarkAdd01Icon,
	Search01Icon,
	UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "framer-motion"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GenresMegaMenu } from "@/components/layout/genres-mega-menu"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Logo } from "@/components/shared/logo"
import { Button } from "@/components/ui/button"
import { GlassButton } from "@/components/ui/glasscn/glass-button"
import { glassSurfaceVariants } from "@/components/ui/glasscn/glass-variants"
import { cn } from "@/lib/utils"

const navLinks = [
	{ href: "/movies", label: "Movies" },
	{ href: "/tv", label: "TV Shows" },
	{ href: "/discover", label: "Discover" },
	{ href: "/coming-soon", label: "Coming Soon" },
]

export function SiteHeader() {
	const pathname = usePathname()

	return (
		<motion.header
			className={cn(
				glassSurfaceVariants({ glassVariant: "frosted" }),
				"sticky top-0 z-40 w-full transition-colors duration-300 not-dark:bg-white/85 dark:bg-black/50!"
			)}
			initial={false}
		>
			<div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
				<div className="flex items-center gap-8">
					<Link
						className="flex items-center focus-visible:bg-muted outline-none rounded-md"
						href="/"
					>
						<Logo />
					</Link>

					<nav className="hidden items-center gap-3 lg:flex">
						{navLinks.map((link) => (
							<Link
								className={cn(
									"flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted hover:text-primary no-underline",
									pathname === link.href
										? "text-foreground"
										: "text-muted-foreground"
								)}
								href={link.href as Route}
								key={link.href}
							>
								{link.label}
							</Link>
						))}
						<GenresMegaMenu />
					</nav>
				</div>

				<div className="flex items-center gap-3">
					<Button aria-label="Search" size="icon" variant="ghost">
						<HugeiconsIcon className="size-5" icon={Search01Icon} />
					</Button>
					<Button
						aria-label="Watchlist"
						className="max-lg:hidden"
						size="icon"
						variant="ghost"
					>
						<HugeiconsIcon className="size-5" icon={BookmarkAdd01Icon} />
					</Button>
					<Button aria-label="Profile" size="icon" variant="ghost">
						<HugeiconsIcon className="size-5" icon={UserIcon} />
					</Button>

					<GlassButton
						className="text-primary font-semibold rounded-lg text-xs h-9 px-4"
						glassVariant="liquid"
						nativeButton={false}
						render={
							<Link className="max-lg:hidden" href="/">
								Sign in
							</Link>
						}
						size="sm"
					></GlassButton>
					<MobileNav />
				</div>
			</div>
		</motion.header>
	)
}
