import type { Metadata } from "next"
import { AppImage } from "@/components/shared/image"
import { MoviesBrowser } from "@/features/movies/components/movies-browser"
import { movies } from "@/lib/data/movies"

export const metadata: Metadata = {
	title: "Movies",
	description:
		"Browse the full movie catalog — filter by genre, year, and rating.",
}

export default function MoviesPage() {
	return (
		<div className="pb-20">
			<div className="relative h-[38vh] min-h-72 w-full overflow-hidden sm:h-[46vh]">
				<AppImage
					alt={movies[0].title}
					aspect="auto"
					preload
					sizes=""
					src={movies[0].backdropPath}
				/>
				<div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/10" />
				<div className="absolute inset-0 bg-linear-to-r from-background/70 via-transparent to-transparent" />
				<div className="absolute inset-0 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-4 pb-10 sm:px-6 lg:px-10">
					<p className="text-sm font-medium uppercase tracking-wide text-primary">
						Movies
					</p>
					<h1 className="mt-2 max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
						Every story starts on a single screen
					</h1>
					<p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
						From intimate dramas to sprawling epics — the full catalog,
						ready to filter by what you're in the mood for.
					</p>
				</div>
			</div>

			<div className="mx-auto mt-10 max-w-[1600px] px-4 sm:px-6 lg:px-10">
				<MoviesBrowser movies={movies} />
			</div>
		</div>
	)
}
