import type { Metadata, Route } from "next"
import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import { TvBrowser } from "@/features/tv/components/tv-browser"
import { getTvShowTopRate, tvShows } from "@/lib/data/tv"

export const metadata: Metadata = {
	title: "TV Shows",
	description: "Browse series, seasons, and episodes across the catalog.",
}

export default function TvPage() {
	const featured = getTvShowTopRate(2)

	return (
		<div className="pb-20">
			<div className="mx-auto max-w-[1600px] px-4 pt-8 sm:px-6 lg:px-10">
				<p className="text-sm font-medium uppercase tracking-wide text-accent-dusk">
					TV Shows
				</p>
				<h1 className="mt-2 max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
					Series worth clearing your evening for
				</h1>

				<div className="mt-8 grid gap-4 sm:grid-cols-2">
					{featured.map((show) => (
						<Link
							className="group relative aspect-16/8 overflow-hidden rounded-2xl ring-1 ring-white/5"
							href={`/tv/${show.id}` as Route}
							key={show.id}
						>
							<AppImage
								alt={show.title}
								aspect="auto"
								sizes=""
								src={show.backdropPath}
							/>
							<div className="absolute inset-0 bg-linear-to-t from-overlay-scrim/90 via-overlay-scrim/20 to-transparent" />
							<div className="absolute inset-x-0 bottom-0 p-5">
								<p className="text-xs font-medium uppercase tracking-wide text-accent-dusk">
									{show.status === "returning"
										? "Returning series"
										: "Complete series"}
								</p>
								<h2 className="mt-1 text-xl font-bold text-white transition-colors group-hover:text-primary sm:text-2xl">
									{show.title}
								</h2>
							</div>
						</Link>
					))}
				</div>
			</div>

			<div className="mx-auto mt-10 max-w-[1600px] px-4 sm:px-6 lg:px-10">
				<TvBrowser shows={tvShows} />
			</div>
		</div>
	)
}
