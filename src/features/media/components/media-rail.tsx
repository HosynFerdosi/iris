"use client"

import { SectionHeader } from "@/components/shared/section-header"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel"
import { MovieCard } from "@/features/media/components/movie-card"
import type { Media } from "@/lib/types/media"
import { cn } from "@/lib/utils"

type MediaRailProps = {
	title: string
	description?: string
	items: Media[]
	href?: string
	hrefLabel?: string
	preload?: boolean
	className?: string
}

export function MediaRail({
	title,
	description,
	items,
	href,
	hrefLabel,
	preload,
	className,
}: MediaRailProps) {
	if (items.length === 0) return null

	return (
		<section className={cn("relative", className)}>
			<div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
				<SectionHeader
					className="mb-4"
					description={description}
					href={href}
					hrefLabel={hrefLabel}
					title={title}
				/>
			</div>

			<Carousel
				className="w-full pr-5"
				opts={{
					align: "start",
					containScroll: "trimSnaps",
					dragFree: true,
				}}
			>
				<CarouselContent className="ml-0 gap-4 px-4 sm:px-6 lg:px-10">
					{items.map((item, index) => (
						<CarouselItem
							className="basis-[38vw] p-0 sm:basis-[26vw] md:basis-[18vw] lg:basis-[14vw]"
							key={item.id}
						>
							<MovieCard
								className="w-full"
								item={item}
								preload={preload && index < 4}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}
