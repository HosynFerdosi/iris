import { StarIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { RatingBreakdown } from "@/lib/types/media"

interface RatingBreakdownChartProps {
	breakdown: RatingBreakdown[]
	average: number
	count: number
}

export function RatingBreakdownChart({
	breakdown,
	average,
	count,
}: RatingBreakdownChartProps) {
	const maxPercentage = Math.max(...breakdown.map((b) => b.percentage), 1)

	return (
		<div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center">
			<div className="flex shrink-0 flex-col items-center justify-center border-border sm:border-r sm:pr-6">
				<div className="flex items-center gap-1.5">
					<HugeiconsIcon
						className="fill-orange-400 text-orange-400"
						icon={StarIcon}
						size={26}
					/>
					<span className="text-4xl font-bold tracking-tight text-foreground">
						{average.toFixed(1)}
					</span>
				</div>
				<p className="mt-1 text-xs text-muted-foreground">
					{count.toLocaleString()} ratings
				</p>
			</div>
			<div className="flex-1 space-y-1.5">
				{[...breakdown].reverse().map((entry) => (
					<div className="flex items-center gap-2.5" key={entry.score}>
						<span className="w-3 shrink-0 text-right text-xs text-muted-foreground">
							{entry.score}
						</span>
						<div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
							<div
								className="h-full rounded-full bg-orange-400/80"
								style={{
									width: `${(entry.percentage / maxPercentage) * 100}%`,
								}}
							/>
						</div>
						<span className="w-8 shrink-0 text-xs text-muted-foreground">
							{entry.percentage}%
						</span>
					</div>
				))}
			</div>
		</div>
	)
}
