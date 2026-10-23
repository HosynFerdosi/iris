import {
	RailSkeleton,
	SpotlightSkeleton,
	UpComingSkeleton,
} from "@/components/shared/skeleton"

export default function DiscoverLoading() {
	return (
		<>
			<SpotlightSkeleton />
			<RailSkeleton
				description="The most talked-about movies and shows right now."
				title="Trending this week"
			/>
			<RailSkeleton
				description="Your favorite series are back with more stories to tell."
				href="/tv-shows"
				hrefLabel="View all"
				title="Returning Series"
			/>
			<RailSkeleton
				description="Powerful stories, unforgettable characters, and gripping drama."
				href="/genres/drama"
				hrefLabel="View all"
				title="Drama, done right"
			/>
			<UpComingSkeleton
				description="A first look at the movies and series arriving soon."
				href="/coming-soon"
				hrefLabel="View all"
				title="On the horizon"
			/>
			<RailSkeleton
				description="Award-worthy performances and stories that stay with you."
				title="Critically acclaimed"
			/>
		</>
	)
}
