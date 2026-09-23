import { type ComponentProps, forwardRef } from "react"
import { Button } from "@/components/ui/button"
import {
	type GlassVariant,
	glassSurfaceVariants,
} from "@/components/ui/glasscn/glass-variants"
import { cn } from "@/lib/utils"

export interface GlassButtonProps extends ComponentProps<typeof Button> {
	glassVariant?: GlassVariant
}

/**
 * Vendor copy of glasscn's Glass Button
 * (npx shadcn add @glasscn/glass-button). Layers a glass surface treatment
 * over the shadcn Button primitive rather than replacing it.
 */
export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
	(
		{ glassVariant = "clear", className, variant = "ghost", ...props },
		ref
	) => {
		return (
			<Button
				className={cn(
					"text-foreground hover:bg-transparent",
					glassSurfaceVariants({ glassVariant }),
					className
				)}
				ref={ref}
				variant={variant}
				{...props}
			/>
		)
	}
)
GlassButton.displayName = "GlassButton"
