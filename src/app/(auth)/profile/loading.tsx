import { ProfileHeaderSkeleton } from "@/components/shared/skeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProfileLoading() {
	return (
		<div className="space-y-8">
			<ProfileHeaderSkeleton />
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
				{Array.from({ length: 4 }).map((_, i) => (
					<Skeleton className="h-20 rounded-xl" key={i.toString()} />
				))}
			</div>
			<div className="space-y-3">
				{Array.from({ length: 3 }).map((_, i) => (
					<Skeleton className="h-20 rounded-xl" key={i.toString()} />
				))}
			</div>
		</div>
	)
}
