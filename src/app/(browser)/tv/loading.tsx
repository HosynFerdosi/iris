import { FilterBarSkeleton } from "@/components/shared/skeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
	return (
		<div className="pb-20">
			<div className="mx-auto max-w-[1600px] space-y-6 px-4 pt-8 sm:px-6 lg:px-10">
				<Skeleton className="h-4 w-24" />
				<Skeleton className="h-12 w-2/3" />
				<div className="grid gap-4 sm:grid-cols-2">
					<Skeleton className="aspect-16/8 rounded-2xl" />
					<Skeleton className="aspect-16/8 rounded-2xl" />
				</div>
				<FilterBarSkeleton />
				<div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
					{Array.from({ length: 6 }).map((_, i) => (
						<Skeleton className="h-28 rounded-xl" key={i.toString()} />
					))}
				</div>
			</div>
		</div>
	)
}
