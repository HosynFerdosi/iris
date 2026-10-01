import type { Metadata } from "next"
import GenreItem from "@/features/genres/components/genre-item"
import { genres } from "@/lib/data/genres"

export const metadata: Metadata = {
	title: "Genres",
	description: "Browse movies and TV shows by genre.",
}

export default function GenresPage() {
	return (
		<div className="pb-20">
			<div className="mx-auto max-w-[1600px] px-4 pt-8 sm:px-6 lg:px-10">
				<p className="text-sm font-medium uppercase tracking-wide text-primary">
					Genres
				</p>
				<h1 className="mt-2 max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
					Find your next mood
				</h1>
			</div>

			<div className="mx-auto mt-10 grid max-w-[1600px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
				{genres.map((genre, index) => (
					<GenreItem genre={genre} index={index} key={index.toString()} />
				))}
			</div>
		</div>
	)
}
