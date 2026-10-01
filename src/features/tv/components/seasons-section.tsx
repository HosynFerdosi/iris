"use client"

import { Clock01Icon, PlayIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import { AppImage } from "@/components/shared/image"
import { Rating } from "@/components/shared/rating"
import { SectionHeader } from "@/components/shared/section-header"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import type { Season } from "@/lib/types/media"

interface SeasonsSectionProps {
	seasons: Season[]
}

export function SeasonsSection({ seasons }: SeasonsSectionProps) {
	const [activeSeasonId, setActiveSeasonId] = useState<string | null>(
		seasons[seasons.length - 1]?.id ?? "1"
	)

	if (seasons.length === 0) return null

	const activeSeason =
		seasons.find((s) => s.id === activeSeasonId) ?? seasons[0]

	return (
		<section>
			<div className="mb-4 flex flex-wrap items-center justify-between gap-3">
				<SectionHeader title="Seasons & episodes" />
				<Select onValueChange={setActiveSeasonId} value={activeSeasonId}>
					<SelectTrigger className="w-44">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{seasons.map((season) => (
							<SelectItem key={season.id} value={season.id}>
								{season.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			<p className="mb-5 text-sm text-muted-foreground">
				{activeSeason.overview}
			</p>

			<div className="space-y-3">
				{activeSeason.episodes.map((episode) => (
					<div
						className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary/30 sm:flex-row"
						key={episode.id}
					>
						<div className="relative w-full shrink-0 sm:w-48">
							<AppImage
								alt={episode.name}
								aspect="backdrop"
								containerClassName="rounded-lg"
								sizes="192px"
								src={episode.stillPath}
							/>
							<div className="absolute inset-0 flex items-center justify-center bg-overlay-scrim/0 transition-colors group-hover:bg-overlay-scrim/40">
								<span className="flex size-9 items-center justify-center rounded-full bg-white/0 text-white opacity-0 transition-all group-hover:bg-white/90 group-hover:text-black group-hover:opacity-100">
									<HugeiconsIcon icon={PlayIcon} size={16} />
								</span>
							</div>
						</div>
						<div className="min-w-0 flex-1 py-1">
							<div className="flex items-start justify-between gap-3">
								<h3 className="font-medium text-foreground">
									{episode.episodeNumber}. {episode.name}
								</h3>
								<Rating
									className="shrink-0"
									size="sm"
									value={episode.rating}
								/>
							</div>
							<div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
								<span className="flex items-center gap-1">
									<HugeiconsIcon icon={Clock01Icon} size={12} />
									{episode.runtimeMinutes}m
								</span>
								<span>
									{new Date(episode.airDate).toLocaleDateString(
										"en-US",
										{
											month: "short",
											day: "numeric",
											year: "numeric",
										}
									)}
								</span>
							</div>
							<p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
								{episode.overview}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
