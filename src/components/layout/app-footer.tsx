import {
	Github01Icon,
	InstagramIcon,
	NewTwitterIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Route } from "next"
import Link from "next/link"
import { Logo } from "@/components/shared/logo"
import { genres } from "@/lib/data/genres"

const footerColumns = [
	{
		title: "Browse",
		links: [
			{ href: "/movies", label: "Movies" },
			{ href: "/tv", label: "TV Shows" },
			{ href: "/discover", label: "Discover" },
			{ href: "/coming-soon", label: "Coming Soon" },
		],
	},
	{
		title: "Genres",
		links: genres
			.slice(0, 4)
			.map((g) => ({ href: `/genres/${g.id}`, label: g.name })),
	},
	{
		title: "Account",
		links: [
			{ href: "/profile", label: "Profile" },
			{ href: "/profile/watchlist", label: "Watchlist" },
			{ href: "/profile/settings", label: "Settings" },
			{ href: "/login", label: "Sign in" },
		],
	},
]

export function SiteFooter() {
	return (
		<footer className="border-t border-border bg-surface/40">
			<div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-10">
				<div className="grid grid-cols-2 gap-10 md:grid-cols-5">
					<div className="col-span-2">
						<Link className="flex items-center" href="/">
							<Logo />
						</Link>
						<p className="mt-3 max-w-xs text-sm text-muted-foreground">
							A cinematic home for discovering what to watch next —
							curated collections, deep catalogs, and nothing to sign a
							contract for.
						</p>
						<div className="mt-5 flex items-center gap-3">
							<Link
								aria-label="Marquee on Twitter"
								className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent-gold/40 hover:text-accent-gold"
								href="#"
							>
								<HugeiconsIcon icon={NewTwitterIcon} size={16} />
							</Link>
							<Link
								aria-label="Marquee on Instagram"
								className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent-gold/40 hover:text-accent-gold"
								href="#"
							>
								<HugeiconsIcon icon={InstagramIcon} size={16} />
							</Link>
							<Link
								aria-label="Marquee on GitHub"
								className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent-gold/40 hover:text-accent-gold"
								href="#"
							>
								<HugeiconsIcon icon={Github01Icon} size={16} />
							</Link>
						</div>
					</div>

					{footerColumns.map((col) => (
						<div key={col.title}>
							<h3 className="text-sm font-semibold text-foreground">
								{col.title}
							</h3>
							<ul className="mt-4 space-y-3">
								{col.links.map((link) => (
									<li key={link.href}>
										<Link
											className="text-sm text-muted-foreground transition-colors hover:text-foreground"
											href={link.href as Route}
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
					<p>
						© {new Date().getFullYear()} Marquee. A concept product for
						demonstration.
					</p>
					<div className="flex gap-5">
						<Link className="hover:text-foreground" href="#">
							Privacy
						</Link>
						<Link className="hover:text-foreground" href="#">
							Terms
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
