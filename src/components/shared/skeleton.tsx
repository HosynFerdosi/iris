import { Skeleton } from "../ui/skeleton"

function PosterCardSkeleton() {
	return (
		<div className="w-full">
			<Skeleton className="aspect-2/3 w-full rounded-lg" />
			<Skeleton className="mt-2.5 h-4 w-3/4" />
			<Skeleton className="mt-1.5 h-3 w-1/2" />
		</div>
	)
}

function MediaGridSkeleton({ count = 12 }: { count?: number }) {
	return (
		<div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
			{Array.from({ length: count }).map((_, i) => (
				<PosterCardSkeleton key={i.toString()} />
			))}
		</div>
	)
}

function RailSkeleton({ count = 6 }: { count?: number }) {
	return (
		<div className="space-y-4">
			<Skeleton className="h-7 w-48" />
			<div className="scrollbar-none flex gap-4 overflow-x-hidden px-4 sm:px-6 lg:px-10">
				{Array.from({ length: count }).map((_, i) => (
					<div
						className="w-[42vw] shrink-0 sm:w-[26vw] md:w-[18vw] lg:w-[14vw]"
						key={i.toString()}
					>
						<PosterCardSkeleton />
					</div>
				))}
			</div>
		</div>
	)
}

function HeroSkeleton() {
	return (
		<div className="relative h-[70vh] w-full overflow-hidden">
			<Skeleton className="size-full rounded-none" />
			<div className="absolute inset-x-0 bottom-0 space-y-3 p-10">
				<Skeleton className="h-4 w-24" />
				<Skeleton className="h-12 w-2/3" />
				<Skeleton className="h-4 w-1/2" />
				<Skeleton className="h-10 w-40" />
			</div>
		</div>
	)
}

function ReviewCardSkeleton() {
	return (
		<div className="flex gap-3 rounded-xl border border-border p-4">
			<Skeleton className="size-10 shrink-0 rounded-full" />
			<div className="flex-1 space-y-2">
				<Skeleton className="h-4 w-32" />
				<Skeleton className="h-3 w-full" />
				<Skeleton className="h-3 w-5/6" />
			</div>
		</div>
	)
}

function ProfileHeaderSkeleton() {
	return (
		<div className="flex items-center gap-5">
			<Skeleton className="size-20 shrink-0 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-6 w-40" />
				<Skeleton className="h-4 w-56" />
			</div>
		</div>
	)
}

function FilterBarSkeleton() {
	return (
		<div className="flex flex-wrap gap-3">
			{Array.from({ length: 4 }).map((_, i) => (
				<Skeleton className="h-10 w-32" key={i.toString()} />
			))}
		</div>
	)
}

export {
	Skeleton,
	PosterCardSkeleton,
	MediaGridSkeleton,
	RailSkeleton,
	HeroSkeleton,
	ReviewCardSkeleton,
	ProfileHeaderSkeleton,
	FilterBarSkeleton,
}
