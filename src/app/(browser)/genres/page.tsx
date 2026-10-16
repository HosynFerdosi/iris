import type { Metadata } from "next"
import { Suspense } from "react"
import { GenreGridSkeleton } from "@/components/shared/skeleton"
import { GenreGrid } from "@/features/genres/components/genre-grid"

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

			<Suspense fallback={<GenreGridSkeleton />}>
				<GenreGrid />
			</Suspense>
		</div>
	)
}
