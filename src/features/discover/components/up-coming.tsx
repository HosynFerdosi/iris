import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import {
	SectionHeader,
	type SectionHeaderProps,
} from "@/components/shared/section-header"
import type { Media } from "@/lib/types/media"
import { relaseDate } from "@/lib/utils"

type Props = {
	upcoming: Media[]
} & SectionHeaderProps

export function UpComing({ upcoming, ...props }: Props) {
	return (
		<div className="mx-auto mt-14 max-w-[1600px] px-4 sm:px-6 lg:px-10">
			<SectionHeader className="mb-4" {...props} />
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{upcoming.map((item) => (
					<Link
						className="group relative aspect-3/2 overflow-hidden rounded-xl ring-1 ring-white/5"
						href={`/${item.type === "movie" ? "movie" : "tv"}/${item.id}`}
						key={item.id}
					>
						<AppImage
							alt={item.title}
							aspect="auto"
							sizes=""
							src={item.backdropPath}
						/>
						<div className="absolute inset-0 bg-linear-to-t from-overlay-scrim/85 to-transparent" />
						<div className="absolute inset-x-0 bottom-0 p-4">
							<p className="text-xs text-primary">
								{relaseDate(item)?.getFullYear()}
							</p>
							<h3 className="mt-0.5 font-semibold text-white group-hover:text-primary transition-colors">
								{item.title}
							</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
