import {
	type GlassVariant,
	glassSurfaceVariants,
} from "@/components/ui/glasscn/glass-variants"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export interface GlassSkeletonProps
	extends React.HTMLAttributes<HTMLDivElement> {
	glassVariant?: GlassVariant
}

/**
 * Vendor copy of glasscn's Glass Skeleton
 * (npx shadcn add @glasscn/glass-skeleton).
 */
export function GlassSkeleton({
	glassVariant = "subtle",
	className,
	...props
}: GlassSkeletonProps) {
	return (
		<Skeleton
			className={cn(glassSurfaceVariants({ glassVariant }), className)}
			{...props}
		/>
	)
}
