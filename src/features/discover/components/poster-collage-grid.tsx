import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import type { Media } from "@/lib/types/media"

interface PosterCollageGridProps {
	items: Media[]
}

export function PosterCollageGrid({ items }: PosterCollageGridProps) {
	return (
		<div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
			{items.map((item) => (
				<Link
					className="group relative overflow-hidden rounded-lg ring-1 ring-white/5 transition-transform duration-300 hover:z-10 hover:scale-105 hover:shadow-xl"
					href={`/${item.type === "movie" ? "movie" : "tv"}/${item.id}`}
					key={item.id}
				>
					<AppImage
						alt={item.title}
						aspect="poster"
						sizes=""
						src={item.posterPath}
					/>
					<div className="absolute inset-0 bg-overlay-scrim/0 transition-colors group-hover:bg-overlay-scrim/20" />
				</Link>
			))}
		</div>
	)
}
