"use client"

import {
	Add01Icon,
	InformationCircleIcon,
	PlayIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import AutoPlay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import { AnimatePresence, motion } from "framer-motion"
import type { Route } from "next"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AppImage } from "@/components/shared/image"
import { Rating } from "@/components/shared/rating"
import { Button } from "@/components/ui/button"
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel"
import { GlassBadge } from "@/components/ui/glasscn/glass-badge"
import { GlassButton } from "@/components/ui/glasscn/glass-button"
import type { Media } from "@/lib/types/media"
import { relaseDate } from "@/lib/utils"

interface HeroCarouselProps {
	items: Media[]
}

export function HeroCarousel({ items }: HeroCarouselProps) {
	const [active, setActive] = useState(0)
	const [carouselApi, setCarouselApi] = useState<CarouselApi>()

	useEffect(() => {
		if (!carouselApi) return

		const onSelect = () => {
			setActive(carouselApi.selectedScrollSnap())
		}

		onSelect()

		carouselApi.on("select", onSelect)

		return () => {
			carouselApi.off("select", onSelect)
		}
	}, [carouselApi])

	const current = items[active]

	if (!current) return null

	const year = relaseDate(current)?.getFullYear()

	const genreNames = current.genres
		.slice(0, 3)
		.map(({ genre }) => genre.name)
		.filter(Boolean)

	const href = `/${current.type}/${current.slug}`

	return (
		<section className="relative min-h-140 md:h-[85vh] h-[70vh] w-full flex items-center overflow-hidden bg-background">
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<Carousel
					className="size-full *:h-full"
					opts={{
						loop: true,
					}}
					plugins={[
						Fade(),
						AutoPlay({
							delay: 6000,
							stopOnInteraction: false,
						}),
					]}
					setApi={setCarouselApi}
				>
					<CarouselContent className="h-full">
						{items.map((item) => (
							<CarouselItem
								className="relative h-full basis-full pl-0"
								key={item.id}
							>
								<AppImage
									alt=""
									aspect="auto"
									className="size-full scale-105 object-cover object-center"
									preload
									quality={100}
									sizes="200vw"
									src={item.backdropPath}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>

				<div className="absolute w-full right-0 bottom-0 left-0 md:h-10 max-md:top-0 bg-linear-to-t from-background to-transparent" />
				<div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent" />
			</div>

			<div className="relative flex h-full items-end">
				<div className="mx-auto w-full max-w-[1600px] px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20">
					<AnimatePresence mode="wait">
						<motion.div
							animate={{ opacity: 1, y: 0 }}
							className="max-w-xl"
							exit={{ opacity: 0, y: -12 }}
							initial={{ opacity: 0, y: 28 }}
							key={current.id}
							transition={{
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<div className="mb-4 flex flex-wrap items-center gap-2">
								{genreNames.map((name) => (
									<GlassBadge glassVariant="frosted" key={name}>
										{name}
									</GlassBadge>
								))}
							</div>

							<h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
								{current.title}
							</h1>

							{current.tagline && (
								<p className="mt-3 text-base italic text-muted-foreground">
									{current.tagline}
								</p>
							)}

							<div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
								<Rating
									count={current.ratingCount}
									value={current.rating}
								/>

								<span className="text-muted-foreground">{year}</span>

								{"runtimeMinutes" in current &&
									current.runtimeMinutes && (
										<span className="text-muted-foreground">
											{Math.floor(current.runtimeMinutes / 60)}h{" "}
											{current.runtimeMinutes % 60}m
										</span>
									)}
							</div>

							<p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
								{current.overview}
							</p>

							<div className="mt-7 flex flex-wrap items-center gap-3">
								<Link href={href as Route}>
									<Button size="lg">
										<HugeiconsIcon icon={PlayIcon} size={18} />
										Watch trailer
									</Button>
								</Link>

								<GlassButton glassVariant="liquid" size="lg">
									<HugeiconsIcon icon={Add01Icon} size={18} />
									Watchlist
								</GlassButton>

								<Link href={href as Route}>
									<Button size="lg" variant="ghost">
										<HugeiconsIcon
											icon={InformationCircleIcon}
											size={18}
										/>
										More info
									</Button>
								</Link>
							</div>
						</motion.div>
					</AnimatePresence>

					<div className="mt-10 flex items-center gap-2">
						{items.map((item, index) => (
							<button
								aria-current={index === active}
								aria-label={`Show ${item.title}`}
								className="group relative h-1 w-8 overflow-hidden rounded-full bg-white/15"
								key={item.id}
								onClick={() => carouselApi?.scrollTo(index)}
								type="button"
							>
								{index === active && (
									<span className="absolute inset-0 bg-primary" />
								)}

								{index !== active && (
									<span className="absolute inset-0 bg-white/30 opacity-0 transition-opacity group-hover:opacity-100" />
								)}
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
