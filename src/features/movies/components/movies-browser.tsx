"use client"

import { SearchIcon } from "@hugeicons/core-free-icons"
import { EmptyState } from "@/components/shared/empty-state"
import { FilterBar } from "@/features/media/components/filter-bar"
import { MediaGrid } from "@/features/media/components/media-grid"
import type { Movie } from "@/lib/types/media"

type MoviesBrowserProps = {
	movies: Movie[]
}

export function MoviesBrowser({ movies }: MoviesBrowserProps) {
	return (
		<div>
			<div className="mb-6 flex gap-4 items-center justify-between">
				<p className="text-sm text-muted-foreground">0 Title</p>
				<FilterBar />
			</div>

			{movies.length === 0 ? (
				<EmptyState
					actionLabel="Reset filters"
					description="Try widening your search by adjusting genre or year."
					icon={SearchIcon}
					onAction={() => {}}
					title="No movies match these filters"
				/>
			) : (
				<MediaGrid items={movies} />
			)}
		</div>
	)
}
