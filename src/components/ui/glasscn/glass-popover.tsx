import type * as React from "react"
import {
	type GlassVariant,
	glassSurfaceVariants,
} from "@/components/ui/glasscn/glass-variants"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export interface GlassPopoverContentProps
	extends React.ComponentProps<typeof PopoverContent> {
	glassVariant?: GlassVariant
}

/**
 * Vendor copy of glasscn's Glass Popover
 * (npx shadcn add @glasscn/glass-popover).
 */
export function GlassPopoverContent({
	glassVariant = "frosted",
	className,
	...props
}: GlassPopoverContentProps) {
	return (
		<PopoverContent
			className={cn(
				glassSurfaceVariants({ glassVariant }),
				"shadow-2xl",
				className
			)}
			{...props}
		/>
	)
}

export { Popover as GlassPopover, PopoverTrigger as GlassPopoverTrigger }
