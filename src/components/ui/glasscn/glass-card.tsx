import type * as React from "react"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	type GlassVariant,
	glassSurfaceVariants,
} from "@/components/ui/glasscn/glass-variants"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.ComponentProps<typeof Card> {
	glassVariant?: GlassVariant
}

/**
 * Vendor copy of glasscn's Glass Card (npx shadcn add @glasscn/glass-card).
 */
export function GlassCard({
	glassVariant = "clear",
	className,
	...props
}: GlassCardProps) {
	return (
		<Card
			className={cn(glassSurfaceVariants({ glassVariant }), className)}
			{...props}
		/>
	)
}

export interface GlassCardFooterProps
	extends React.ComponentProps<typeof CardFooter> {
	glassVariant?: GlassVariant
}

export function GlassCardFooter({
	glassVariant = "clear",
	className,
	...props
}: GlassCardFooterProps) {
	return (
		<CardFooter
			className={cn(
				glassSurfaceVariants({ glassVariant }),
				"rounded-b-xl",
				className
			)}
			{...props}
		/>
	)
}

export { CardContent, CardDescription, CardHeader, CardTitle }
