import type { Route } from "next"
import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import { Rating } from "@/components/shared/rating"
import { Badge } from "@/components/ui/badge"
import { getGenreById } from "@/lib/data/genres"
import type { Media } from "@/lib/types/media"
import { cn } from "@/lib/utils"

interface HorizontalCardProps {
	item: Media
	className?: string
	meta?: React.ReactNode
	action?: React.ReactNode
}

export function HorizontalCard({
	item,
	className,
	meta,
	action,
}: HorizontalCardProps) {
	const href = `/${item.type === "movie" ? "movie" : "tv"}/${item.id}` as Route
	const year = new Date(
		"releaseDate" in item ? item.releaseDate : item.firstAirDate
	).getFullYear()
	const primaryGenre = item.genreIds[0]
		? getGenreById(item.genreIds[0])
		: undefined

	return (
		<div
			className={cn(
				"group flex items-center gap-4 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary/30",
				className
			)}
		>
			<Link className="shrink-0 focus-visible:outline-none" href={href}>
				<AppImage
					alt={item.title}
					aspect="poster"
					containerClassName="w-16 rounded-md sm:w-20"
					sizes=""
					src={item.posterPath}
				/>
			</Link>
			<div className="min-w-0 flex-1">
				<Link className="focus-visible:outline-none" href={href}>
					<h3 className="truncate font-medium text-foreground group-hover:text-primary transition-colors">
						{item.title}
					</h3>
				</Link>
				<div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
					<span>{year}</span>
					{primaryGenre && (
						<>
							<span aria-hidden>·</span>
							<span>{primaryGenre.name}</span>
						</>
					)}
					{item.type === "tv" && <Badge className="ml-1">Series</Badge>}
				</div>
				<div className="mt-2 flex items-center gap-3">
					<Rating size="sm" value={item.rating} />
					{meta}
				</div>
			</div>
			{action && <div className="shrink-0">{action}</div>}
		</div>
	)
}
