import type { Metadata } from "next"
import { SectionHeader } from "@/components/shared/section-header"
import { GenreShowcase } from "@/features/home/components/genre-showcase"
import { HeroCarousel } from "@/features/home/components/hero-carousel"
import { FeaturedCard } from "@/features/media/components/featured-card"
import { MediaRail } from "@/features/media/components/media-rail"
import {
	getPopular,
	getTopRated,
	getTrending,
	getUpcoming,
} from "@/lib/data/func"
import { movies } from "@/lib/data/movies"
import { tvShows } from "@/lib/data/tv"

export const metadata: Metadata = {
	title: "Iris — Discover films & series worth your time",
}

export default function Page() {
	const trending = getTrending(8)
	const popularMovies = getPopular("movie", 10)
	const popularTv = getPopular("tv", 10)
	const topRated = getTopRated(undefined, 10)
	const upcoming = getUpcoming(6)
	const featuredPicks = [movies[2], tvShows[0]]

	return (
		<div className="pb-20">
			<HeroCarousel items={trending.slice(0, 5)} />

			<div className="mt-12 space-y-14">
				<MediaRail
					description="What everyone's watching this week"
					href="/discover"
					hrefLabel="See all"
					items={trending}
					preload
					title="Trending now"
				/>

				<section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
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
				/>
			</div>
		</div>
	)
}
