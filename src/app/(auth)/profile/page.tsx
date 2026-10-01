import {
	ArrowRight01Icon,
	Bookmark02Icon,
	Clock01Icon,
	StarIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Metadata, Route } from "next"
import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import { HorizontalCard } from "@/features/media/components/horizontal-card"
import {
	currentUser,
	notifications,
	userRatings,
	watchHistory,
	watchlist,
} from "@/lib/data/user"

export const metadata: Metadata = {
	title: "Your Profile",
}

type StatCardProps = {
	icon: Parameters<typeof HugeiconsIcon>[0]["icon"]
	label: string
	value: number
	href: string
}

function StatCard({ icon, label, value, href }: StatCardProps) {
	return (
		<Link
			className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
			href={href as Route}
		>
			<div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
				<HugeiconsIcon icon={icon} size={20} />
			</div>
			<div>
				<p className="text-2xl font-bold text-foreground">{value}</p>
				<p className="text-xs text-muted-foreground">{label}</p>
			</div>
		</Link>
	)
}

export default function ProfileOverviewPage() {
	const unreadCount = notifications.filter((n) => !n.read).length

	return (
		<div className="space-y-10">
			<div className="flex flex-col gap-5 sm:flex-row sm:items-center">
				<AppImage
					alt={currentUser.name}
					aspect="avatar"
					containerClassName="size-20 shrink-0 rounded-full ring-2 ring-primary/30"
					fallbackVariant="person"
					sizes=""
					src={currentUser.avatarPath}
				/>
				<div>
					<h1 className="text-2xl font-bold tracking-tight text-foreground">
						{currentUser.name}
					</h1>
					<p className="mt-1 text-sm text-muted-foreground">
						{currentUser.bio}
					</p>
					<p className="mt-1 text-xs text-muted-foreground">
						Member since{" "}
						{new Date(currentUser.memberSince).toLocaleDateString(
							"en-US",
							{
								month: "long",
								year: "numeric",
							}
						)}
					</p>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
				<StatCard
					href="/profile/watchlist"
					icon={Bookmark02Icon}
					label="Watchlist"
					value={watchlist.length}
				/>
				<StatCard
					href="/profile/ratings"
					icon={StarIcon}
					label="Ratings"
					value={userRatings.length}
				/>
				<StatCard
					href="/profile/history"
					icon={Clock01Icon}
					label="Watched"
					value={watchHistory.length}
				/>
				<StatCard
					href="/profile/notifications"
					icon={Bookmark02Icon}
					label="Unread"
					value={unreadCount}
				/>
			</div>

			<section>
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-lg font-semibold text-foreground">
						Continue watching
					</h2>
					<Link
						className="flex items-center gap-1 text-sm text-primary hover:underline"
						href="/profile/history"
					>
						View all <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
					</Link>
				</div>
				<div className="space-y-3">
					{watchHistory.slice(0, 3).map((entry) => (
						<HorizontalCard
							item={entry.item}
							key={entry.item.id}
							meta={
								entry.progress < 100 ? (
									<span className="text-xs text-muted-foreground">
										{entry.progress}% watched
									</span>
								) : (
									<span className="text-xs text-success">
										Completed
									</span>
								)
							}
						/>
					))}
				</div>
			</section>

			<section>
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-lg font-semibold text-foreground">
						From your watchlist
					</h2>
					<Link
						className="flex items-center gap-1 text-sm text-primary hover:underline"
						href="/profile/watchlist"
					>
						View all <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
					</Link>
				</div>
				<div className="space-y-3">
					{watchlist.slice(0, 3).map((entry) => (
						<HorizontalCard item={entry.item} key={entry.item.id} />
					))}
				</div>
			</section>
		</div>
	)
}
