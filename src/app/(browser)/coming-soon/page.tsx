import { Calendar03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Metadata } from "next"
import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import { Badge } from "@/components/ui/badge"
import { getUpcoming } from "@/lib/data/func"
import { getGenreById } from "@/lib/data/genres"

export const metadata: Metadata = {
	title: "Coming Soon",
	description: "Upcoming movies and TV shows, ordered by release date.",
}

export default function ComingSoonPage() {
	const upcoming = getUpcoming(20)
	const featured = upcoming[0]
	const rest = upcoming

	return (
		<div className="pb-20">
			<div className="mx-auto max-w-[1600px] px-4 pt-8 sm:px-6 lg:px-10">
				<p className="text-sm font-medium uppercase tracking-wide text-primary">
					Coming Soon
				</p>
				<h1 className="mt-2 max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
					Mark your calendar
				</h1>
			</div>

			{featured && (
				<div className="mx-auto mt-8 max-w-[1600px] px-4 sm:px-6 lg:px-10">
					<Link
						className="group relative flex min-h-96 items-end overflow-hidden rounded-2xl ring-1 ring-white/5"
						href={`/${featured.type === "movie" ? "movie" : "tv"}/${featured.id}`}
					>
						<div className="absolute inset-0">
							<AppImage
								alt={featured.title}
								aspect="auto"
								preload
								sizes=""
								src={featured.backdropPath}
							/>
						</div>
						<div className="absolute inset-0 bg-linear-to-t from-overlay-scrim/95 via-overlay-scrim/40 to-transparent" />
						<div className="relative z-10 max-w-xl p-6 sm:p-10">
							<Badge className="mb-3">Most anticipated</Badge>
							<h2 className="text-3xl font-bold text-white transition-colors group-hover:text-primary sm:text-4xl">
								{featured.title}
							</h2>
							<p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
								<HugeiconsIcon icon={Calendar03Icon} size={15} />
								{new Date(
									"releaseDate" in featured
										? featured.releaseDate
										: featured.firstAirDate
								).toLocaleDateString("en-US", {
									month: "long",
									day: "numeric",
									year: "numeric",
								})}
							</p>
							<p className="mt-3 line-clamp-2 text-sm text-white/70">
								{featured.overview}
							</p>
						</div>
					</Link>
				</div>
			)}

			<div className="mx-auto mt-12 max-w-[1600px] px-4 sm:px-6 lg:px-10">
				<h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
					Full release schedule
				</h2>
				<ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
					{rest.map((item) => {
						const primaryGenre = item.genreIds[0]
							? getGenreById(item.genreIds[0])
							: undefined
						return (
							<li className="relative" key={item.id}>
								<span className="absolute -left-7.75 top-1.5 size-3 rounded-full border-2 border-background bg-primary sm:-left-9.75" />
								<Link
									className="group flex flex-row gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 sm:items-center"
									href={`/${item.type === "movie" ? "movie" : "tv"}/${item.id}`}
								>
									<AppImage
										alt={item.title}
										aspect="poster"
										containerClassName="w-20 shrink-0 rounded-lg"
										sizes="80px"
										src={item.posterPath}
									/>
									<div className="min-w-0 flex-1">
										<p className="text-xs font-medium uppercase tracking-wide text-primary">
											{new Date(
												"releaseDate" in item
													? item.releaseDate
													: item.firstAirDate
											).toLocaleDateString("en-US", {
												month: "long",
												day: "numeric",
												year: "numeric",
											})}
										</p>
										<h3 className="mt-1 font-semibold text-foreground group-hover:text-primary transition-colors">
											{item.title}
										</h3>
										<p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
											{item.tagline}
										</p>
										<div className="mt-2 flex items-center gap-2">
											<Badge variant="outline">
												{item.type === "movie" ? "Movie" : "Series"}
											</Badge>
											{primaryGenre && (
												<Badge variant="secondary">
													{primaryGenre.name}
												</Badge>
											)}
										</div>
									</div>
								</Link>
							</li>
						)
					})}
				</ol>
			</div>
		</div>
	)
}
