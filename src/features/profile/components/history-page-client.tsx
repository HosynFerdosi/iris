"use client"

import { Clock01Icon } from "@hugeicons/core-free-icons"
import { useState } from "react"
import { EmptyState } from "@/components/shared/empty-state"
import { AppImage } from "@/components/shared/image"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { getGenreById } from "@/lib/data/genres"
import type { HistoryEntry } from "@/lib/data/user"

interface HistoryPageClientProps {
	entries: HistoryEntry[]
}

type FilterValue = "all" | "movie" | "tv" | "in-progress"

export function HistoryPageClient({ entries }: HistoryPageClientProps) {
	const [filter, setFilter] = useState<FilterValue>("all")

	const filtered = entries.filter((entry) => {
		if (filter === "movie") return entry.item.type === "movie"
		if (filter === "tv") return entry.item.type === "tv"
		if (filter === "in-progress") return entry.progress < 100
		return true
	})

	return (
		<div>
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div>
					<h1 className="text-2xl font-bold tracking-tight text-foreground">
						History
					</h1>
					<p className="mt-1 text-sm text-muted-foreground">
						Everything you've watched, most recent first
					</p>
				</div>
				<Select
					onValueChange={(v) => setFilter(v as FilterValue)}
					value={filter}
				>
					<SelectTrigger className="w-44">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">Everything</SelectItem>
						<SelectItem value="movie">Movies</SelectItem>
						<SelectItem value="tv">TV Shows</SelectItem>
						<SelectItem value="in-progress">In progress</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{filtered.length === 0 ? (
				<EmptyState
					actionHref="/discover"
					actionLabel="Browse titles"
					className="mt-8"
					description="Titles you watch will appear here."
					icon={Clock01Icon}
					title="No watch history"
				/>
			) : (
				<div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
					{filtered.map((entry) => {
						const primaryGenre = entry.item.genreIds[0]
							? getGenreById(entry.item.genreIds[0])
							: undefined
						return (
							<div
								className="group relative overflow-hidden rounded-xl border border-border bg-card"
								key={entry.item.id}
							>
								<div>
									<AppImage
										alt={entry.item.title}
										aspect="backdrop"
										sizes=""
										src={entry.item.backdropPath}
									/>
								</div>
								{entry.progress < 100 && (
									<div className="absolute inset-x-0 bottom-0 h-1 bg-black/40">
										<div
											className="h-full bg-primary"
											style={{ width: `${entry.progress}%` }}
										/>
									</div>
								)}
								<div className="p-4">
									<div className="flex items-start justify-between gap-2">
										<h3 className="font-medium text-foreground">
											{entry.item.title}
										</h3>
										{entry.progress >= 100 ? (
											<span className="shrink-0 text-xs font-medium bg-emerald-400/10 px-2 py-1 rounded-xl text-emerald-400">
												Watched
											</span>
										) : (
											<span className="shrink-0 text-xs font-medium bg-primary/10 px-2 py-1 rounded-xl text-primary">
												{entry.progress}%
											</span>
										)}
									</div>
									<p className="mt-1 text-xs text-muted-foreground">
										{primaryGenre?.name} · Watched{" "}
										{new Date(entry.watchedAt).toLocaleDateString(
											"en-US",
											{
												month: "short",
												day: "numeric",
											}
										)}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}
