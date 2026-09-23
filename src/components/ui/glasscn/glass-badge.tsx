import type { ComponentProps } from "react"
import { Badge } from "@/components/ui/badge"
import {
	type GlassVariant,
	glassSurfaceVariants,
} from "@/components/ui/glasscn/glass-variants"
import { cn } from "@/lib/utils"

export interface GlassBadgeProps extends ComponentProps<typeof Badge> {
	glassVariant?: GlassVariant
}

/**
 * Vendor copy of glasscn's Glass Badge (npx shadcn add @glasscn/glass-badge).
 */
export function GlassBadge({
	glassVariant = "clear",
	className,
	...props
}: GlassBadgeProps) {
	return (
		<Badge
			className={cn(
				glassSurfaceVariants({ glassVariant }),
				"text-foreground",
				className
			)}
			{...props}
		/>
	)
}
