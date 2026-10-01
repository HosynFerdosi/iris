"use client"

import { StarIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "framer-motion"
import type { Route } from "next"
import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import { getGenreById } from "@/lib/data/genres"
import type { Media } from "@/lib/types/media"
import { cn } from "@/lib/utils"

type MovieCardProps = {
	item: Media
	className?: string
	preload?: boolean
}

export function MovieCard({ item, className, preload }: MovieCardProps) {
	const href = `/${item.type === "movie" ? "movie" : "tv"}/${item.id}`
	const year = new Date(
		"releaseDate" in item ? item.releaseDate : item.firstAirDate
	).getFullYear()
	const primaryGenre =
		item.genreIds.length > 0 ? getGenreById(item.genreIds[0]) : undefined

	return (
		<motion.div
			className={cn("group relative w-full shrink-0", className)}
			transition={{ type: "spring", stiffness: 300, damping: 24 }}
			whileHover={{ y: -4 }}
		>
			<Link
				className="block focus-visible:outline-none focus-visible:ring-2 ring-primary rounded-lg transition-all focus-visible:p-2"
				href={href as Route}
			>
				<div className="relative overflow-hidden rounded-lg ring-1 ring-white/5 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-black/40 group-focus-visible:ring-2 group-focus-visible:ring-ring">
					<AppImage
						alt={item.title}
						aspect="poster"
						preload={preload}
						sizes=""
						src={item.posterPath}
					/>
					<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-overlay-scrim/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
					{item.rating > 0 && (
						<div className="absolute right-2 top-2 flex items-center gap-1 rounded-full glass px-2 py-1 text-xs font-semibold text-white bg-black/50">
							<HugeiconsIcon
								className="fill-orange-400 text-orange-400"
								icon={StarIcon}
								size={11}
							/>
							{item.rating.toFixed(1)}
						</div>
					)}
				</div>
				<div className="mt-2.5 space-y-0.5">
					<h3 className="truncate text-sm font-medium text-foreground">
						{item.title}
					</h3>
					<p className="truncate text-xs text-muted-foreground">
						{year}
						{primaryGenre ? ` · ${primaryGenre.name}` : ""}
					</p>
				</div>
			</Link>
		</motion.div>
	)
}
