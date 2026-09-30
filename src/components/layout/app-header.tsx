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
					<Link className="flex items-center" href="/">
						<Logo />
					</Link>

					<nav className="hidden items-center gap-6 lg:flex">
						{navLinks.map((link) => (
							<Link
								className={cn(
									"text-sm font-medium transition-colors hover:text-primary no-underline",
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

				<div className="flex items-center gap-1 sm:gap-3">
					<Link href="/">
						<Button aria-label="Search" size="icon" variant="ghost">
							<HugeiconsIcon className="size-5" icon={Search01Icon} />
						</Button>
					</Link>
					<Link className="hidden lg:block" href="/">
						<Button aria-label="Watchlist" size="icon" variant="ghost">
							<HugeiconsIcon
								className="size-5"
								icon={BookmarkAdd01Icon}
							/>
						</Button>
					</Link>
					<Link href="/">
						<Button aria-label="Profile" size="icon" variant="ghost">
							<HugeiconsIcon className="size-5" icon={UserIcon} />
						</Button>
					</Link>
					<Link className="hidden lg:block" href="/">
						<GlassButton
							className="text-primary font-semibold rounded-lg text-xs h-9 px-4"
							glassVariant="liquid"
							size="sm"
						>
							Sign in
						</GlassButton>
					</Link>
					<MobileNav />
				</div>
			</div>
		</motion.header>
	)
}
