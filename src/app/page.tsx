import type { Metadata } from "next"
import { HeroCarousel } from "@/features/home/components/hero-carousel"
import { fetchLatestMovies } from "@/features/home/server/db/media.db"
import { MediaRail } from "@/features/media/components/media-rail"

export const metadata: Metadata = {
	title: "Iris — Discover films & series worth your time",
}

export default async function Page() {
	const latest = await fetchLatestMovies()
	const popularMovies = []
	const popularTv = []
	const topRated = []
	const upcoming = []
	const featuredPicks = []

	// const popularMovies = getPopular("movie", 10)
	// const popularTv = getPopular("tv", 10)
	// const topRated = getTopRated(undefined, 10)
	// const upcoming = getUpcoming(6)
	// const featuredPicks = [movies[2], tvShows[0]]

	return (
		<div className="pb-20">
			<HeroCarousel items={latest.slice(0, 5)} />

			<div className="mt-12 space-y-14">
				<MediaRail
					description="What everyone's watching this week"
					href="/discover"
					hrefLabel="See all"
					items={latest}
					preload
					title="Latest now"
				/>

				{/* <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
					<SectionHeader
						className="mb-5"
						description="Two standout titles our team can't stop recommending"
						title="Editor's picks"
					/>
					<div className="grid gap-5 md:grid-cols-2">
						{featuredPicks.map((item) => (
							<FeaturedCard item={item} key={item.id} />
						))}
					</div>
				</section>

				<MediaRail
					href="/movies"
					hrefLabel="Browse movies"
					items={popularMovies}
					title="Popular movies"
				/>

				<MediaRail
					href="/tv"
					hrefLabel="Browse TV shows"
					items={popularTv}
					title="Popular TV shows"
				/>

				<section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
					<SectionHeader
						className="mb-5"
						description="Jump straight into the mood you're in"
						href="/genres"
						title="Explore by genre"
					/>
					<GenreShowcase />
				</section>

				<MediaRail
					description="The highest-rated titles across the catalog"
					href="/discover"
					items={topRated}
					title="Top rated"
				/>

				<MediaRail
					description="Mark your calendar"
					href="/coming-soon"
					hrefLabel="View release calendar"
					items={upcoming}
					title="Coming soon"
				/> */}
			</div>
		</div>
	)
}
