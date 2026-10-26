"use client"

import { Add01Icon, PlayIcon, Share08Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { AppImage } from "@/components/shared/image"
import { Rating } from "@/components/shared/rating"
import { Button } from "@/components/ui/button"
import { GlassBadge } from "@/components/ui/glasscn/glass-badge"
import { GlassButton } from "@/components/ui/glasscn/glass-button"
import { relaseDate } from "@/lib/utils"
import type { Movie } from "../server/db/movie.db"

type DetailsHeroProps = {
	item: Movie
}

export function DetailsHero({ item }: DetailsHeroProps) {
	const year = relaseDate(item)?.getFullYear()
	const genreNames = item.genres
		.map((genre) => genre.genre)
		.filter((g): g is NonNullable<typeof g> => Boolean(g))

	const handleWatchlist = () => {
		toast.success(`Added "${item.title}" to your watchlist`)
	}

	const handleShare = () => {
		toast.success("Link copied to clipboard")
	}

	return (
		<section className="relative w-full overflow-hidden">
			<div className="absolute inset-0">
				<AppImage
					alt=""
					aspect="auto"
					preload
					sizes="200vw"
					src={item.backdropPath}
				/>
				<div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/20" />
				<div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/40 to-transparent" />
			</div>

			<div className="relative mx-auto max-w-[1600px] px-4 pb-12 pt-28 sm:px-6 lg:px-10 lg:pb-16 lg:pt-36">
				<div className="flex flex-col gap-8 md:flex-row md:items-end">
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className="hidden w-52 shrink-0 overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 md:block lg:w-64"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						<AppImage
							alt={item.title}
							aspect="poster"
							preload
							src={item.posterPath}
						/>
					</motion.div>

					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className="max-w-2xl"
						initial={{ opacity: 0, y: 24 }}
						transition={{
							duration: 0.65,
							delay: 0.1,
							ease: [0.22, 1, 0.36, 1],
						}}
					>
						<div className="mb-3 flex flex-wrap gap-2">
							{genreNames.map((g) => (
								<GlassBadge glassVariant="frosted" key={g.id}>
									{g.name}
								</GlassBadge>
							))}
						</div>
						<h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
							{item.title}
						</h1>
						{item.tagline && (
							<p className="mt-2 text-base italic text-muted-foreground">
								{item.tagline}
							</p>
						)}
						<div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
							<Rating
								count={item.ratingCount}
								size="lg"
								value={item.rating}
							/>
							<span className="text-muted-foreground">{year}</span>
							{"runtimeMinutes" in item && item.runtimeMinutes && (
								<span className="text-muted-foreground">
									{Math.floor(item.runtimeMinutes / 60)}h{" "}
									{item.runtimeMinutes % 60}m
								</span>
							)}
							<span className="text-muted-foreground">
								{item.countryOfOrigin}
							</span>
						</div>
						<p className="mt-5 text-sm leading-relaxed text-foreground/90 sm:text-base">
							{item.overview}
						</p>
						<div className="mt-7 flex flex-wrap items-center gap-3">
							<Button size="lg">
								<HugeiconsIcon icon={PlayIcon} size={18} />
								Watch trailer
							</Button>
							<GlassButton
								glassVariant="liquid"
								onClick={handleWatchlist}
								size="lg"
							>
								<HugeiconsIcon icon={Add01Icon} size={18} />
								Add to watchlist
							</GlassButton>
							<Button
								aria-label="Share"
								className="size-11 rounded-full"
								onClick={handleShare}
								size="icon-sm"
								variant="ghost"
							>
								<HugeiconsIcon icon={Share08Icon} size={18} />
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
