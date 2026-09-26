import type { Route } from "next"
import Link from "next/link"
import { AppImage } from "@/components/shared/image"
import { cn } from "@/lib/utils"

type PersonCardProps = {
	personId: string
	name: string
	role: string
	profilePath: string
	className?: string
}

export function PersonCard({
	personId,
	name,
	role,
	profilePath,
	className,
}: PersonCardProps) {
	return (
		<Link
			className={cn("group focus-visible:outline-none w-30", className)}
			href={`/person/${personId}` as Route}
		>
			<AppImage
				alt={name}
				aspect="poster"
				containerClassName="rounded-lg ring-1 ring-white/5 transition-shadow group-hover:shadow-lg w-32 h-50"
				fallbackVariant="person"
				sizes=""
				src={profilePath}
				title={name}
			/>
			<p
				className="mt-2 truncate text-sm font-medium text-foreground group-hover:text-orange-400 transition-colors"
				title={name}
			>
				{name}
			</p>
			<p className="truncate text-xs text-muted-foreground" title={role}>
				{role}
			</p>
		</Link>
	)
}
