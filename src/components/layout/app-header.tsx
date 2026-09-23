"use client"

import {
	BookmarkAdd01Icon,
	Search01Icon,
	UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { GenresMegaMenu } from "@/components/layout/genres-mega-menu"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ThemeToggle } from "@/components/layout/theme-toggle"
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
	const [scrolled, setScrolled] = useState(false)
	const { scrollY } = useScroll()
	const pathname = usePathname()

	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrolled(latest > 24)
	})

	return (
		<motion.header
			className={cn(
				"sticky top-0 z-40 w-full transition-colors duration-300",
				scrolled
					? glassSurfaceVariants({ glassVariant: "frosted" })
					: "bg-transparent"
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
									"text-sm font-medium transition-colors hover:text-foreground no-underline",
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

				<div className="flex items-center gap-1 sm:gap-2">
					<Link href="/">
						<Button aria-label="Search" size="icon" variant="ghost">
							<HugeiconsIcon icon={Search01Icon} size={19} />
						</Button>
					</Link>
					<Link className="hidden lg:block" href="/">
						<Button aria-label="Watchlist" size="icon" variant="ghost">
							<HugeiconsIcon icon={BookmarkAdd01Icon} size={19} />
						</Button>
					</Link>
					<ThemeToggle />
					<Link href="/">
						<Button aria-label="Profile" size="icon" variant="ghost">
							<HugeiconsIcon icon={UserIcon} size={19} />
						</Button>
					</Link>
					<Link className="hidden lg:block" href="/">
						<GlassButton
							className="text-accent-gold font-semibold"
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
