import type * as React from "react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
	type GlassVariant,
	glassSurfaceVariants,
} from "@/components/ui/glasscn/glass-variants"
import { cn } from "@/lib/utils"

export interface GlassDropdownMenuContentProps
	extends React.ComponentProps<typeof DropdownMenuContent> {
	glassVariant?: GlassVariant
}

/**
 * Vendor copy of glasscn's Glass Dropdown Menu
 * (npx shadcn add @glasscn/glass-dropdown-menu).
 */
export function GlassDropdownMenuContent({
	glassVariant = "frosted",
	className,
	...props
}: GlassDropdownMenuContentProps) {
	return (
		<DropdownMenuContent
			className={cn(
				glassSurfaceVariants({ glassVariant }),
				"shadow-2xl",
				className
			)}
			{...props}
		/>
	)
}

export {
	DropdownMenu as GlassDropdownMenu,
	DropdownMenuTrigger as GlassDropdownMenuTrigger,
	DropdownMenuItem as GlassDropdownMenuItem,
	DropdownMenuLabel as GlassDropdownMenuLabel,
	DropdownMenuSeparator as GlassDropdownMenuSeparator,
}
