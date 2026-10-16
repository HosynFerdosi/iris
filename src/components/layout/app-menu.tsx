"use client"

import { cn } from "cn"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
	{ href: "/movies", label: "Movies" },
	{ href: "/tv", label: "TV Shows" },
	{ href: "/discover", label: "Discover" },
	{ href: "/coming-soon", label: "Coming Soon" },
]

export function SiteMenu() {
	const pathname = usePathname()

	return (
		<>
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
		</>
	)
}
