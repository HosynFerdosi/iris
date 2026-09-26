import type { IconSvgElement } from "@hugeicons/react"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Route } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EmptyStateProps {
	icon: IconSvgElement
	title: string
	description: string
	actionLabel?: string
	actionHref?: string
	onAction?: () => void
	className?: string
}

export function EmptyState({
	icon,
	title,
	description,
	actionLabel,
	actionHref,
	onAction,
	className,
}: EmptyStateProps) {
	return (
		<div
			className={cn(
				"flex flex-col items-center justify-center rounded-2xl border border-dashed border-border px-6 py-16 text-center",
				className
			)}
		>
			<div className="mb-5 flex size-16 items-center justify-center rounded-full bg-secondary/60 text-muted-foreground">
				<HugeiconsIcon icon={icon} size={28} />
			</div>
			<h3 className="text-lg font-semibold text-foreground">{title}</h3>
			<p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
				{description}
			</p>
			{actionLabel && (actionHref || onAction) && (
				<div className="mt-6">
					{actionHref ? (
						<Link href={actionHref as Route}>
							<Button>{actionLabel}</Button>
						</Link>
					) : (
						<Button onClick={onAction}>{actionLabel}</Button>
					)}
				</div>
			)}
		</div>
	)
}
