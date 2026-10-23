import type { Route } from "next"
import Link from "next/link"
import type { Genre } from "@/generated/prisma/client"

type Props = {
	genres: Genre[]
}

export function GenresList({ genres }: Props) {
	return (
		<div className="mx-auto mt-14 max-w-[1600px] px-4 sm:px-6 lg:px-10">
			<h2 className="mb-5 text-2xl font-bold tracking-tight text-foreground">
				Browse by genre
			</h2>
			<div className="scrollbar-none flex gap-3 overflow-x-auto pb-2">
				{genres.slice(0, 10).map((genre) => (
					<Link
						className="shrink-0 rounded-full border border-border px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
						href={`/genres/${genre.slug}` as Route}
						key={genre.id}
					>
						{genre.name}
					</Link>
				))}
			</div>
		</div>
	)
}
