import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Route } from "next"
import Link from "next/link"
import { cn } from "@/lib/utils"

type SectionHeaderProps = {
	title: string
	description?: string
	href?: string
	hrefLabel?: string
	className?: string
}

export function SectionHeader({
	title,
	description,
	href,
	hrefLabel = "See all",
	className,
}: SectionHeaderProps) {
	return (
		<div className={cn("flex items-end justify-between gap-4", className)}>
			<div>
				<h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
					{title}
				</h2>
				{description && (
					<p className="mt-1 text-sm text-muted-foreground">
						{description}
					</p>
				)}
			</div>
			{href && (
				<Link
					className="flex shrink-0 items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-accent-gold"
					href={href as Route}
				>
					{hrefLabel}
					<HugeiconsIcon icon={ArrowRight02Icon} size={15} />
				</Link>
			)}
		</div>
	)
}
