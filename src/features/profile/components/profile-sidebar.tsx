"use client"

import {
	Bookmark02Icon,
	Clock01Icon,
	Notification03Icon,
	Settings02Icon,
	StarIcon,
	UserIcon,
} from "@hugeicons/core-free-icons"
import type { IconSvgElement } from "@hugeicons/react"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavEntry {
	href: string
	label: string
	icon: IconSvgElement
}

const navEntries: NavEntry[] = [
	{ href: "/profile", label: "Overview", icon: UserIcon },
	{ href: "/profile/watchlist", label: "Watchlist", icon: Bookmark02Icon },
	{ href: "/profile/history", label: "History", icon: Clock01Icon },
	{ href: "/profile/ratings", label: "Ratings", icon: StarIcon },
	{
		href: "/profile/notifications",
		label: "Notifications",
		icon: Notification03Icon,
	},
	{ href: "/profile/settings", label: "Settings", icon: Settings02Icon },
]

export function ProfileSidebar() {
	const pathname = usePathname()

	return (
		<>
			<nav className="hidden w-56 shrink-0 lg:block">
				<ul className="sticky top-24 space-y-1">
					{navEntries.map((entry) => {
						const isActive = pathname === entry.href
						return (
							<li key={entry.href}>
								<Link
									className={cn(
										"flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors",
										isActive
											? "bg-secondary text-foreground"
											: "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
									)}
									href={entry.href as Route}
								>
									<HugeiconsIcon icon={entry.icon} size={17} />
									{entry.label}
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>

			<nav className="scrollbar-none -mx-4 mb-6 flex gap-1.5 overflow-x-auto px-4 lg:hidden">
				{navEntries.map((entry) => {
					const isActive = pathname === entry.href
					return (
						<Link
							className={cn(
								"flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
								isActive
									? "border-primary/40 bg-primary/10 text-primary"
									: "border-border text-muted-foreground"
							)}
							href={entry.href as Route}
							key={entry.href}
						>
							<HugeiconsIcon icon={entry.icon} size={15} />
							{entry.label}
						</Link>
					)
				})}
			</nav>
		</>
	)
}
