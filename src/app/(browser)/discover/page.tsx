import type { Metadata } from "next"
import { GenresList } from "@/features/discover/components/genres-list"
import { Spotlight } from "@/features/discover/components/spotlight"
import { UpComing } from "@/features/discover/components/up-coming"
import {
	fetchMediaByGenre,
	fetchPopularMedia,
	fetchReturningSeries,
	fetchTrendMedia,
	fetchUpcomingMedia,
} from "@/features/discover/server/db/media.db"
import { fetchGenres } from "@/features/genres/server/db/genres.db"
import { MediaRail } from "@/features/media/components/media-rail"

export const metadata: Metadata = {
	title: "Discover",
	description: "Curated collections and editorial picks across movies and TV.",
}

export default async function Page() {
	const [trending, populars, returning, drama, upcoming, genres] =
		await Promise.all([
			fetchTrendMedia(),
			fetchPopularMedia(),
			fetchReturningSeries(),
			fetchMediaByGenre("drama"),
			fetchUpcomingMedia(),
			fetchGenres(),
		])
	const spotlight = upcoming[0] ?? null

	return (
		<>
			<Spotlight spotlight={spotlight} />
			<MediaRail
				description="The most talked-about movies and shows right now."
				items={trending}
				title="Trending this week"
			/>

			<MediaRail
				description="Your favorite series are back with more stories to tell."
				href="/tv-shows"
				hrefLabel="View all"
				items={returning}
				title="Returning Series"
			/>

			<MediaRail
				description="Powerful stories, unforgettable characters, and gripping drama."
				href="/genres/drama"
				hrefLabel="View all"
				items={drama}
				title="Drama, done right"
			/>

			<UpComing
				description="A first look at the movies and series arriving soon."
				href="/coming-soon"
				hrefLabel="View all"
				title="On the horizon"
				upcoming={upcoming}
			/>

			<MediaRail
				description="Award-worthy performances and stories that stay with you."
				items={populars}
				title="Critically acclaimed"
			/>
			
			<GenresList genres={genres} />
		</>
	)
}
