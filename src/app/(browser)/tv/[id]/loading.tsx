import { HeroSkeleton, ReviewCardSkeleton } from "@/components/shared/skeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function MovieLoading() {
	return (
		<div className="pb-20">
			<HeroSkeleton />
			<div className="mx-auto mt-10 max-w-[1600px] space-y-12 px-4 sm:px-6 lg:px-10">
				<div className="space-y-4">
					<Skeleton className="h-7 w-40" />
					<div className="flex gap-4">
						{Array.from({ length: 6 }).map((_, i) => (
							<Skeleton
								className="h-40 w-28 rounded-lg"
								key={i.toString()}
							/>
						))}
					</div>
				</div>
				<div className="space-y-4">
					<Skeleton className="h-7 w-48" />
					{Array.from({ length: 3 }).map((_, i) => (
						<ReviewCardSkeleton key={i.toString()} />
					))}
				</div>
			</div>
		</div>
	)
}
