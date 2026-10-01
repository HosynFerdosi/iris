"use client"

import { StarIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useMemo, useState } from "react"
import { EmptyState } from "@/components/shared/empty-state"
import { AppImage } from "@/components/shared/image"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import type { RatingEntry } from "@/lib/data/user"

interface RatingsPageClientProps {
	entries: RatingEntry[]
}

type SortValue = "recent" | "highest" | "lowest"

export function RatingsPageClient({ entries }: RatingsPageClientProps) {
	const [sort, setSort] = useState<SortValue>("recent")

	const sorted = useMemo(() => {
		const copy = [...entries]
		if (sort === "highest") return copy.sort((a, b) => b.rating - a.rating)
		if (sort === "lowest") return copy.sort((a, b) => a.rating - b.rating)
		return copy.sort(
			(a, b) => new Date(b.ratedAt).getTime() - new Date(a.ratedAt).getTime()
		)
	}, [entries, sort])

	return (
		<div>
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div>
					<h1 className="text-2xl font-bold tracking-tight text-foreground">
						Your ratings
					</h1>
					<p className="mt-1 text-sm text-muted-foreground">
						{entries.length} titles rated
					</p>
				</div>
				<Select onValueChange={(v) => setSort(v as SortValue)} value={sort}>
					<SelectTrigger className="w-40">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="recent">Most recent</SelectItem>
						<SelectItem value="highest">Highest rated</SelectItem>
						<SelectItem value="lowest">Lowest rated</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{sorted.length === 0 ? (
				<EmptyState
					actionHref="/discover"
					actionLabel="Browse titles"
					className="mt-8"
					description="Rate titles from their detail page to see them here."
					icon={StarIcon}
					title="You haven't rated anything yet"
				/>
			) : (
				<div className="mt-6 space-y-3">
					{sorted.map((entry) => (
						<div
							className="flex items-center gap-4 rounded-xl border border-border bg-card p-3"
							key={entry.item.id}
						>
							<AppImage
								alt={entry.item.title}
								aspect="poster"
								containerClassName="w-16 shrink-0 rounded-md sm:w-20"
								sizes=""
								src={entry.item.posterPath}
							/>
							<div className="min-w-0 flex-1">
								<h3 className="truncate font-medium text-foreground">
									{entry.item.title}
								</h3>
								<p className="text-xs text-muted-foreground">
									Rated{" "}
									{new Date(entry.ratedAt).toLocaleDateString(
										"en-US",
										{
											month: "short",
											day: "numeric",
											year: "numeric",
										}
									)}
								</p>
							</div>
							<div className="flex shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-primary">
								<HugeiconsIcon
									className="fill-primary"
									icon={StarIcon}
									size={16}
									strokeWidth={0}
								/>
								<span className="font-bold">{entry.rating}</span>
								<span className="text-xs opacity-70">/10</span>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
