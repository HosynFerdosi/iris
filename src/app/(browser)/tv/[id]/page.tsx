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
import { MediaRail } from "@/features/media/components/media-rail"
import { CastCrewSection } from "@/features/movies/components/cast-crew-section"
import { DetailsFacts } from "@/features/movies/components/details-facts"
import { DetailsHero } from "@/features/movies/components/details-hero"
import { ReviewsSection } from "@/features/movies/components/reviews-section"
import { SeasonsSection } from "@/features/tv/components/seasons-section"
import { getSimilar } from "@/lib/data/func"
import { getGenreById } from "@/lib/data/genres"
import { getReviewsByMediaId } from "@/lib/data/reviews"
import { getTvShowById } from "@/lib/data/tv"

export async function generateMetadata({
	params,
}: PageProps<"/tv/[id]">): Promise<Metadata> {
	const { id } = await params
	const show = getTvShowById(id)
	if (!show) return { title: "Show not found" }

	return {
		title: show.title,
		description: show.overview,
		openGraph: {
			title: show.title,
			description: show.overview,
			images: [show.backdropPath],
		},
	}
}

export default async function TvDetailPage({ params }: PageProps<"/tv/[id]">) {
	const { id } = await params
	const show = getTvShowById(id)

	if (!show) notFound()

	const similar = getSimilar(show)
	const reviews = getReviewsByMediaId(show.id)
	const primaryGenre = show.genreIds[0]
		? getGenreById(show.genreIds[0])
		: undefined

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
						<BreadcrumbLink
							render={
								<Link className="hover:text-foreground" href="/tv">
									TV Shows
								</Link>
							}
						/>
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
											href={`/genres/${primaryGenre.id}` as Route}
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
						<BreadcrumbPage>{show.title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<DetailsHero item={show} />

			<div className="mx-auto mt-10 max-w-[1600px] space-y-12 px-4 sm:px-6 lg:px-10">
				{show.seasons && show.seasons.length > 0 && (
					<SeasonsSection seasons={show.seasons} />
				)}
				<CastCrewSection cast={show.cast} crew={show.crew} />
				<MediaGallerySection
					backdropPath={show.backdropPath}
					galleryPaths={show.galleryPaths}
					trailerTitle={show.trailerTitle}
				/>
				<DetailsFacts item={show} />
				<ReviewsSection item={show} reviews={reviews} />
			</div>

			{similar.length > 0 && (
				<div className="mt-12">
					<MediaRail items={similar} title="Similar shows" />
				</div>
			)}
		</div>
	)
}
