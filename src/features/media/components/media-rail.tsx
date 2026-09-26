"use client"

import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import * as React from "react"
import { SectionHeader } from "@/components/shared/section-header"
import { GlassButton } from "@/components/ui/glasscn/glass-button"
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
	const scrollRef = React.useRef<HTMLDivElement>(null)

	const scroll = (direction: "left" | "right") => {
		const el = scrollRef.current
		if (!el) return
		const amount = el.clientWidth * 0.8 * (direction === "left" ? -1 : 1)
		el.scrollBy({ left: amount, behavior: "smooth" })
	}

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
			<div className="group/rail relative">
				<GlassButton
					aria-label="Scroll left"
					className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full opacity-0 shadow-lg transition-opacity duration-200 group-hover/rail:opacity-100 md:flex"
					glassVariant="frosted"
					onClick={() => scroll("left")}
					size="icon"
				>
					<HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
				</GlassButton>
				<div
					className="scrollbar-none flex gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-6 lg:px-10"
					ref={scrollRef}
				>
					{items.map((item, index) => (
						<MovieCard
							className="w-[42vw] sm:w-[26vw] md:w-[18vw] lg:w-[14vw]"
							item={item}
							key={item.id}
							preload={preload && index < 4}
						/>
					))}
				</div>
				<GlassButton
					aria-label="Scroll right"
					className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full opacity-0 shadow-lg transition-opacity duration-200 group-hover/rail:opacity-100 md:flex"
					glassVariant="frosted"
					onClick={() => scroll("right")}
					size="icon"
				>
					<HugeiconsIcon icon={ArrowRight01Icon} size={18} />
				</GlassButton>
			</div>
		</section>
	)
}
