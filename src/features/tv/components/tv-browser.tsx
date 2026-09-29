"use client"

import { Tv01Icon } from "@hugeicons/core-free-icons"
import { EmptyState } from "@/components/shared/empty-state"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FilterBar } from "@/features/media/components/filter-bar"
import { MediaGrid } from "@/features/media/components/media-grid"
import type { TVShow } from "@/lib/types/media"

const _sortOptions = [
	{ value: "popular", label: "Most popular" },
	{ value: "rating", label: "Highest rated" },
	{ value: "newest", label: "Newest" },
]

interface TvBrowserProps {
	shows: TVShow[]
}

export function TvBrowser({ shows }: TvBrowserProps) {
	return (
		<div>
			<div className="mb-6 flex gap-4 items-center justify-between">
				<Tabs>
					<TabsList>
						<TabsTrigger value="all">All shows</TabsTrigger>
						<TabsTrigger value="returning">Returning</TabsTrigger>
						<TabsTrigger value="ended">Ended</TabsTrigger>
					</TabsList>
				</Tabs>
				<FilterBar />
			</div>

			{shows.length === 0 ? (
				<EmptyState
					actionLabel="Reset filters"
					description="Try a different genre, year, or status."
					icon={Tv01Icon}
					onAction={() => {}}
					title="No shows match these filters"
				/>
			) : (
				<MediaGrid items={shows} />
			)}
		</div>
	)
}
