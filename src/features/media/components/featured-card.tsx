"use client"

import { PlayIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "framer-motion"
import type { Route } from "next"
import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import { Rating } from "@/components/shared/rating"
import { GlassBadge } from "@/components/ui/glasscn/glass-badge"
import { getGenreById } from "@/lib/data/genres"
import type { Media } from "@/lib/types/media"
import { cn } from "@/lib/utils"

interface FeaturedCardProps {
	item: Media
	className?: string
}

export function FeaturedCard({ item, className }: FeaturedCardProps) {
	const href = `/${item.type === "movie" ? "movie" : "tv"}/${item.id}`
	const genreNames = item.genreIds
		.slice(0, 2)
		.map((id) => getGenreById(id)?.name)
		.filter(Boolean)

	return (
		<motion.div
			className={cn("group relative", className)}
			transition={{ type: "spring", stiffness: 260, damping: 22 }}
			whileHover={{ scale: 1.015 }}
		>
			<Link
				className="block focus-visible:outline-none"
				href={href as Route}
			>
				<div className="relative aspect-16/10 overflow-hidden rounded-2xl ring-1 ring-white/5 sm:aspect-16/8">
					<AppImage
						alt={item.title}
						aspect="auto"
						className="transition-transform duration-700 group-hover:scale-105"
						sizes=""
						src={item.backdropPath}
					/>
					<div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
					<div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
						<div className="mb-2 flex flex-wrap items-center gap-2">
							{genreNames.map((name) => (
								<GlassBadge glassVariant="frosted" key={name}>
									{name}
								</GlassBadge>
							))}
						</div>
						<h3 className="text-xl font-semibold text-white sm:text-2xl">
							{item.title}
						</h3>
						<p className="mt-1 line-clamp-2 max-w-md text-sm text-white/70">
							{item.overview}
						</p>
						<div className="mt-3 flex items-center gap-4">
							<Rating
								className="text-white"
								size="sm"
								value={item.rating}
							/>
							<span className="flex items-center gap-1.5 text-xs font-medium text-white/80">
								<HugeiconsIcon icon={PlayIcon} size={13} />
								Watch trailer
							</span>
						</div>
					</div>
				</div>
			</Link>
		</motion.div>
	)
}
