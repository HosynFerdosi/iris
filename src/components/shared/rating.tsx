import { StarIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "@/lib/utils"

interface RatingProps {
	value: number
	count?: number
	size?: "sm" | "md" | "lg"
	className?: string
}

const sizeMap = {
	sm: { icon: 12, text: "text-xs" },
	md: { icon: 14, text: "text-sm" },
	lg: { icon: 18, text: "text-base" },
}

export function Rating({ value, count, size = "md", className }: RatingProps) {
	const { icon, text } = sizeMap[size]

	if (value <= 0) {
		return (
			<span className={cn("text-muted-foreground", text, className)}>
				Not yet rated
			</span>
		)
	}

	return (
		<span className={cn("inline-flex items-center gap-1.5", text, className)}>
			<HugeiconsIcon
				className="fill-orange-400 text-orange-400"
				icon={StarIcon}
				size={icon}
			/>
			<span className="font-semibold text-foreground">
				{value.toFixed(1)}
			</span>
			{count !== undefined && (
				<span className="text-muted-foreground">
					({count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count})
				</span>
			)}
		</span>
	)
}
