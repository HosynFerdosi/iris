import type { Metadata, Route } from "next"
import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import { PosterCollageGrid } from "@/features/discover/components/poster-collage-grid"
import { MediaRail } from "@/features/media/components/media-rail"
import {
	getByGenre,
	getTopRated,
	getTrending,
	getUpcoming,
} from "@/lib/data/func"
import { genres } from "@/lib/data/genres"

export const metadata: Metadata = {
	title: "Discover",
	description: "Curated collections and editorial picks across movies and TV.",
}

export default function DiscoverPage() {
	const trending = getTrending(10)
	const topRated = getTopRated(undefined, 10)
	const upcoming = getUpcoming(6)
	const dramaPicks = getByGenre("drama").slice(0, 8)
	const spotlight = trending[2]

	return (
		<div className="pb-20">
			<div className="mx-auto max-w-[1600px] px-4 pt-8 sm:px-6 lg:px-10">
				<p className="text-sm font-medium uppercase tracking-wide text-accent-gold">
					Discover
				</p>
				<h1 className="mt-2 max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
					Editorial picks, made for exploring
				</h1>
			</div>

			{spotlight && (
				<div className="mx-auto mt-10 max-w-[1600px] px-4 sm:px-6 lg:px-10">
					<Link
						className="group relative flex min-h-80 items-end overflow-hidden rounded-2xl ring-1 ring-white/5"
						href={
							`/${spotlight.type === "movie" ? "movie" : "tv"}/${spotlight.id}` as Route
						}
					>
						<div className="absolute inset-0 z-2">
							<AppImage
								alt={spotlight.title}
								aspect="auto"
								className="object-cover"
								sizes=""
								src={spotlight.backdropPath}
							/>
						</div>
						<div className="absolute inset-0 z-5 bg-linear-to-t from-background to-transparent" />
						<div className="absolute inset-0 z-5 bg-linear-to-r from-background via-transparent to-background" />
						<div className="relative z-10 max-w-xl p-6 sm:p-10">
							<p className="text-xs font-medium uppercase tracking-wide text-accent-gold">
								Editor's spotlight
							</p>
							<h2 className="mt-2 text-2xl font-bold text-white transition-colors group-hover:text-accent-gold sm:text-3xl">
								{spotlight.title}
							</h2>
							<p className="mt-2 line-clamp-2 text-sm text-white/70">
								{spotlight.overview}
							</p>
						</div>
					</Link>
				</div>
			)}

			<div className="mt-12">
				<MediaRail items={trending} title="Trending this week" />
			</div>

			<div className="mx-auto mt-14 max-w-[1600px] px-4 sm:px-6 lg:px-10">
				<div className="mb-5">
					<p className="text-xs font-medium uppercase tracking-wide text-accent-dusk">
						Genre spotlight
					</p>
					<h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
						Drama, done right
					</h2>
				</div>
				<PosterCollageGrid items={dramaPicks} />
			</div>

			<div className="mt-14">
				<MediaRail items={topRated} title="Critically acclaimed" />
			</div>

			<div className="mx-auto mt-14 max-w-[1600px] px-4 sm:px-6 lg:px-10">
				<div className="mb-5 flex items-center justify-between">
					<h2 className="text-2xl font-bold tracking-tight text-foreground">
						On the horizon
					</h2>
					<Link
						className="text-sm font-medium text-accent-gold hover:underline"
						href="/coming-soon"
					>
						View all
					</Link>
				</div>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{upcoming.map((item) => (
						<Link
							className="group relative aspect-3/2 overflow-hidden rounded-xl ring-1 ring-white/5"
							href={`/${item.type === "movie" ? "movie" : "tv"}/${item.id}`}
							key={item.id}
						>
							<AppImage
								alt={item.title}
								aspect="auto"
								sizes=""
								src={item.backdropPath}
							/>
							<div className="absolute inset-0 bg-linear-to-t from-overlay-scrim/85 to-transparent" />
							<div className="absolute inset-x-0 bottom-0 p-4">
								<p className="text-xs text-accent-gold">
									{new Date(
										"releaseDate" in item
											? item.releaseDate
											: item.firstAirDate
									).toLocaleDateString("en-US", {
										month: "short",
										year: "numeric",
									})}
								</p>
								<h3 className="mt-0.5 font-semibold text-white group-hover:text-accent-gold transition-colors">
									{item.title}
								</h3>
							</div>
						</Link>
					))}
				</div>
			</div>

			<div className="mx-auto mt-14 max-w-[1600px] px-4 sm:px-6 lg:px-10">
				<h2 className="mb-5 text-2xl font-bold tracking-tight text-foreground">
					Browse by genre
				</h2>
				<div className="scrollbar-none flex gap-3 overflow-x-auto pb-2">
					{genres.slice(0, 10).map((genre) => (
						<Link
							className="shrink-0 rounded-full border border-border px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-accent-gold/40 hover:text-foreground"
							href={`/genres?genre=${genre.id}`}
							key={genre.id}
						>
							{genre.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
