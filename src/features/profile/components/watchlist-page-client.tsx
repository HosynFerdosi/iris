"use client"

import { Bookmark02Icon, Delete02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Route } from "next"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"
import { EmptyState } from "@/components/shared/empty-state"
import { AppImage } from "@/components/shared/image"
import { Rating } from "@/components/shared/rating"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { WatchlistEntry } from "@/lib/data/user"

interface WatchlistPageClientProps {
	initialEntries: WatchlistEntry[]
}

export function WatchlistPageClient({
	initialEntries,
}: WatchlistPageClientProps) {
	const [entries, setEntries] = useState(initialEntries)

	const handleRemove = (id: string, title: string) => {
		setEntries((prev) => prev.filter((entry) => entry.item.id !== id))
		toast.success(`Removed "${title}" from your watchlist`)
	}

	const movieEntries = entries.filter((e) => e.item.type === "movie")
	const tvEntries = entries.filter((e) => e.item.type === "tv")

	const renderGrid = (list: WatchlistEntry[]) => {
		if (list.length === 0) {
			return (
				<EmptyState
					actionHref="/discover"
					actionLabel="Browse titles"
					description="Titles you add to your watchlist will show up here."
					icon={Bookmark02Icon}
					title="Nothing here yet"
				/>
			)
		}

		return (
			<div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{list.map((entry) => (
					<div className="group" key={entry.item.id}>
						<div className="relative">
							<Link
								href={`/${entry.item.type}/${entry.item.id}` as Route}
							>
								<AppImage
									alt={entry.item.title}
									aspect="poster"
									containerClassName="rounded-lg ring-1 ring-white/5"
									sizes=""
									src={entry.item.posterPath}
								/>
							</Link>
							<Button
								aria-label={`Remove ${entry.item.title} from watchlist`}
								className="absolute right-2 top-2 rounded-full bg-overlay-scrim/60 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-danger/80 group-hover:opacity-100"
								onClick={() =>
									handleRemove(entry.item.id, entry.item.title)
								}
								size="icon-sm"
								variant="ghost"
							>
								<HugeiconsIcon icon={Delete02Icon} size={14} />
							</Button>
						</div>
						<div className="mt-2">
							<p className="truncate text-sm font-medium text-foreground">
								{entry.item.title}
							</p>
							<div className="mt-0.5 flex items-center justify-between">
								<Rating size="sm" value={entry.item.rating} />
								<span className="text-xs text-muted-foreground">
									Added{" "}
									{new Date(entry.addedAt).toLocaleDateString(
										"en-US",
										{
											month: "short",
											day: "numeric",
										}
									)}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		)
	}

	return (
		<div>
			<h1 className="text-2xl font-bold tracking-tight text-foreground">
				Watchlist
			</h1>
			<p className="mt-1 text-sm text-muted-foreground">
				{entries.length} {entries.length === 1 ? "title" : "titles"} saved
				to watch later
			</p>

			<Tabs className="mt-6" defaultValue="all">
				<TabsList>
					<TabsTrigger value="all">All ({entries.length})</TabsTrigger>
					<TabsTrigger value="movies">
						Movies ({movieEntries.length})
					</TabsTrigger>
					<TabsTrigger value="tv">
						TV Shows ({tvEntries.length})
					</TabsTrigger>
				</TabsList>
				<TabsContent value="all">{renderGrid(entries)}</TabsContent>
				<TabsContent value="movies">{renderGrid(movieEntries)}</TabsContent>
				<TabsContent value="tv">{renderGrid(tvEntries)}</TabsContent>
			</Tabs>
		</div>
	)
}
