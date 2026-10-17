import { MediaCard } from "@/features/media/components/media-card"
import type { Media } from "@/lib/types/media"
import { cn } from "@/lib/utils"

interface MediaGridProps {
	items: Media[]
	className?: string
}

export function MediaGrid({ items, className }: MediaGridProps) {
	return (
		<div
			className={cn(
				"grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",
				className
			)}
		>
			{items.map((item) => (
				<MediaCard item={item} key={item.id} />
			))}
		</div>
	)
}
