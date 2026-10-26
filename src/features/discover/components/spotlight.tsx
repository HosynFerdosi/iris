import type { Route } from "next"
import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import type { Media } from "@/lib/types/media"

type Props = {
	spotlight: Media | null
}

export function Spotlight({ spotlight }: Props) {
	if (!spotlight) return null

	return (
		<div className="mx-auto mt-10 max-w-[1600px] px-4 sm:px-6 lg:px-10">
			<Link
				className="group relative flex min-h-80 items-end overflow-hidden rounded-2xl ring-1 ring-white/5"
				href={
					`/${spotlight.type === "movie" ? "movie" : "tv"}/${spotlight.slug}` as Route
				}
			>
				<div className="absolute inset-0 z-2">
					<AppImage
						alt={spotlight.title}
						aspect="auto"
						className="object-cover"
						sizes=""
						src={spotlight.backdropPath}
					/>
				</div>
				<div className="absolute inset-0 z-5 bg-linear-to-t from-background to-transparent" />
				<div className="absolute inset-0 z-5 bg-linear-to-r from-background via-transparent to-background" />
				<div className="relative z-10 max-w-xl p-6 sm:p-10">
					<p className="text-xs font-medium uppercase tracking-wide text-primary">
						Editor's spotlight
					</p>
					<h2 className="mt-2 text-2xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-3xl">
						{spotlight.title}
					</h2>
					<p className="mt-2 line-clamp-2 text-sm text-foreground/70">
						{spotlight.overview}
					</p>
				</div>
			</Link>
		</div>
	)
}
