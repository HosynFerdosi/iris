import type { Route } from "next"
import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import type { Genre } from "@/generated/prisma/browser"

type Props = {
	genre: Genre
	index: number
}

export default function GenreItem({ genre, index }: Props) {
	return (
		<Link
			className="group relative aspect-16/10 overflow-hidden rounded-2xl ring-1 ring-white/5 scroll-mt-24"
			href={`/genre/${genre.slug}` as Route}
			id={genre.id}
			key={genre.id}
			style={{ animationDelay: `${index * 100}ms` }}
		>
			<AppImage
				alt={genre.name}
				aspect="auto"
				sizes=""
				src={genre.backdropPath}
			/>
			<div className="absolute inset-0 bg-linear-to-t from-overlay-scrim/90 via-overlay-scrim/30 to-transparent transition-opacity duration-300 group-hover:from-overlay-scrim/95" />
			<div className="absolute inset-0 flex flex-col justify-end p-5 before:size-full before:absolute before:-m-5 overflow-hidden before:bg-linear-to-t before:from-black before:to-transparent before:z-1 before:opacity-0 before:duration-200 hover:before:opacity-80">
				<h2 className="text-xl font-bold text-white text-shadow-lg transition-transform duration-300 group-hover:-translate-y-1 sm:text-2xl relative z-2">
					{genre.name}
				</h2>
				<p className="mt-1 max-w-xs text-xs text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-sm relative z-2">
					{genre.description}
				</p>
			</div>
		</Link>
	)
}
