import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Metadata, Route } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { MediaGallerySection } from "@/features/media/components/media-gallery-section"
import { CastCrewSection } from "@/features/movies/components/cast-crew-section"
import { DetailsFacts } from "@/features/movies/components/details-facts"
import { DetailsHero } from "@/features/movies/components/details-hero"
import { ReviewsSection } from "@/features/movies/components/reviews-section"
import { findMovie } from "@/features/movies/server/db/movie.db"
import { getReviewsByMediaId } from "@/lib/data/reviews"

export async function generateMetadata({
	params,
}: PageProps<"/movie/[slug]">): Promise<Metadata> {
	const { slug } = await params
	const movie = await findMovie(slug)

	if (!movie) return { title: "Movie not found" }

	return {
		title: movie.title,
		description: movie.overview,
		openGraph: {
			title: movie.title,
			description: movie.overview,
			images: [movie.backdropPath],
		},
	}
}

export default async function Page({ params }: PageProps<"/movie/[slug]">) {
	const { slug } = await params
	const movie = await findMovie(slug)

	if (!movie) notFound()

	const reviews = getReviewsByMediaId(movie.id)
	const primaryGenre = movie.genres.length ? movie.genres[0].genre : undefined

	return (
		<div className="pb-20 relative">
			<Breadcrumb className="px-5 sm:px-10 absolute top-5 z-5 text-xs max-md:hidden">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink render={<Link href="/">Home</Link>} />
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<HugeiconsIcon icon={ArrowRight01Icon} size={12} />
					</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbLink render={<Link href="/movies">Movies</Link>} />
					</BreadcrumbItem>
					{primaryGenre && (
						<>
							<BreadcrumbSeparator>
								<HugeiconsIcon icon={ArrowRight01Icon} size={12} />
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbLink
									render={
										<Link
											href={`/genres/${primaryGenre.slug}` as Route}
										>
											{primaryGenre.name}
										</Link>
									}
								/>
							</BreadcrumbItem>
						</>
					)}

					<BreadcrumbSeparator>
						<HugeiconsIcon icon={ArrowRight01Icon} size={12} />
					</BreadcrumbSeparator>

					<BreadcrumbItem>
						<BreadcrumbPage>{movie.title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<DetailsHero item={movie} />

			<div className="mx-auto mt-10 max-w-[1600px] space-y-12 px-4 sm:px-6 lg:px-10">
				<CastCrewSection cast={movie.cast} crew={movie.crew} />
				<MediaGallerySection
					backdropPath={movie.backdropPath}
					gallery={movie.gallery}
					trailerTitle={movie.trailerTitle}
				/>
				<DetailsFacts item={movie} />
				<ReviewsSection item={movie} reviews={reviews} />
			</div>

			{/* {similar.length > 0 && (
				<div className="mt-12">
					<MediaRail items={similar} title="Similar movies" />
				</div>
			)} */}
		</div>
	)
}
