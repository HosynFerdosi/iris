import { PlayCircleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "cn"
import { AppImage } from "@/components/shared/image"
import { SectionHeader } from "@/components/shared/section-header"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel"
import { ImageZoom } from "@/components/ui/kibo-ui/image-zoom"

type MediaGallerySectionProps = {
	trailerTitle?: string
	backdropPath: string
	galleryPaths: string[]
}

export function MediaGallerySection({
	trailerTitle,
	backdropPath,
	galleryPaths,
}: MediaGallerySectionProps) {
	return (
		<section>
			<SectionHeader className="mb-4" title="Trailer & media" />
			<MediaGalleryTrailer
				backdropPath={backdropPath}
				className="block md:hidden mb-4"
				trailerTitle={trailerTitle}
			/>
			<Carousel
				opts={{
					align: "start",
					dragFree: true,
				}}
			>
				<CarouselContent className="lg:*:basis-1/4 md:*:basis-1/3 *:basis-1/2">
					<CarouselItem className="max-md:hidden">
						<MediaGalleryTrailer
							backdropPath={backdropPath}
							trailerTitle={trailerTitle}
						/>
					</CarouselItem>
					{galleryPaths.map((path, index) => (
						<CarouselItem key={`${path}-${index.toString()}`}>
							<ImageZoom zoomMargin={10}>
								<div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-white/5">
									<AppImage alt="" aspect="auto" sizes="" src={path} />
								</div>
							</ImageZoom>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}

type MediaGalleryTrailerProps = Omit<
	MediaGallerySectionProps,
	"galleryPaths"
> & { className?: string }

function MediaGalleryTrailer({
	backdropPath,
	trailerTitle,
	className,
}: MediaGalleryTrailerProps) {
	if (!trailerTitle) return null

	return (
		<div
			className={cn(
				"relative aspect-video overflow-hidden rounded-xl ring-1 ring-white/5",
				className
			)}
		>
			<AppImage
				alt={trailerTitle}
				aspect="auto"
				sizes=""
				src={backdropPath}
			/>
			<button
				className="absolute inset-0 flex items-center justify-center cursor-pointer"
				type="button"
			>
				<span className="flex size-12 items-center justify-center rounded-full bg-white/90 text-black shadow-xl transition-transform group-hover:scale-105">
					<HugeiconsIcon icon={PlayCircleIcon} size={30} />
				</span>
			</button>
			<p className="absolute bottom-3 left-4 text-sm font-medium text-white text-shadow-lg truncate w-full pr-6">
				{trailerTitle}
			</p>
		</div>
	)
}
