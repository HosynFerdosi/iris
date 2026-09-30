import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import { genres } from "@/lib/data/genres"

export function GenreShowcase() {
	const featured = genres.slice(0, 6)

	return (
		<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
			{featured.map((genre) => (
				<Link
					className="group relative aspect-4/3 overflow-hidden rounded-xl focus-visible:outline-none"
					href={`/genres?genre=${genre.id}`}
					key={genre.id}
				>
					<AppImage
						alt=""
						aspect="auto"
						className="transition-transform duration-500 group-hover:scale-110"
						sizes=""
						src={genre.backdropPath}
					/>
					<div className="absolute inset-0 bg-linear-to-t from-overlay-scrim/90 via-overlay-scrim/30 to-transparent transition-colors group-hover:from-overlay-scrim/95" />
					<span className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-white">
						{genre.name}
					</span>
				</Link>
			))}
		</div>
	)
}
