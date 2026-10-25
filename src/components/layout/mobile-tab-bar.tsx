"use client"

import {
	BookmarkAdd01Icon,
	GridViewIcon,
	Home01Icon,
	Search01Icon,
	UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { glassSurfaceVariants } from "@/components/ui/glasscn/glass-variants"
import { cn } from "@/lib/utils"

const navItems = [
	{
		href: "/" as Route,
		label: "Home",
		icon: Home01Icon,
	},
	{
		href: "/discover" as Route,
		label: "Discover",
		icon: Search01Icon,
	},
	{
		href: "/genres" as Route,
		label: "Genres",
		icon: GridViewIcon,
	},
	{
		href: "/watchlist" as Route,
		label: "Watchlist",
		icon: BookmarkAdd01Icon,
	},
	{
		href: "/profile" as Route,
		label: "Profile",
		icon: UserIcon,
	},
]

export function MobileTabBar() {
	const pathname = usePathname()

	return (
		<nav
			aria-label="Mobile navigation"
			className={cn(
				glassSurfaceVariants({ glassVariant: "frosted" }),
				"fixed inset-x-4 bottom-5 z-50 sm:hidden",
				"rounded-full border border-white/15",
				"bg-white/80 dark:bg-black/70",
				"shadow-lg shadow-black/5",
				"pb-[env(safe-area-inset-bottom)]"
			)}
		>
			<ul className="flex h-17 items-center justify-around px-1">
				{navItems.map((item) => {
					const active =
						item.href === "/"
							? pathname === "/"
							: pathname === item.href ||
								pathname.startsWith(`${item.href}/`)

					return (
						<li className="flex-1" key={item.href}>
							<Link
								aria-current={active ? "page" : undefined}
								aria-label={item.label}
								className={cn(
									"relative flex h-16 flex-col items-center justify-center gap-1",
									"rounded-xl transition-all duration-200",
									active
										? "text-primary"
										: "text-muted-foreground hover:text-foreground"
								)}
								href={item.href}
							>
								{active && (
									<span className="absolute top-0 h-0.5 w-7 rounded-full bg-primary" />
								)}

								<HugeiconsIcon
									icon={item.icon}
									size={22}
									strokeWidth={active ? 2 : 1.7}
								/>

								<span
									className={cn(
										"text-[10px] leading-none",
										active ? "font-semibold" : "font-medium"
									)}
								>
									{item.label}
								</span>
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
