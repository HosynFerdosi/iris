import { Fragment, type ReactNode } from "react"
import { Skeleton } from "../ui/skeleton"
import { SectionHeader, type SectionHeaderProps } from "./section-header"

export function SkeletonList({
	children,
	count,
}: {
	children: ReactNode
	count: number
}) {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<Fragment key={index.toString()}>{children}</Fragment>
			))}
		</>
	)
}

export function PosterCardSkeleton() {
	return (
		<div className="w-full">
			<Skeleton className="aspect-2/3 w-full rounded-lg" />
			<Skeleton className="mt-2.5 h-4 w-3/4" />
			<Skeleton className="mt-1.5 h-3 w-1/2" />
		</div>
	)
}

export function MediaGridSkeleton({ count = 12 }: { count?: number }) {
	return (
		<div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
			<SkeletonList count={count}>
				<PosterCardSkeleton />
			</SkeletonList>
		</div>
	)
}

type RailSkeletonProps = {
	count?: number
} & SectionHeaderProps

export function RailSkeleton({ count = 6, ...props }: RailSkeletonProps) {
	return (
		<div className="space-y-4 px-4 sm:px-6 lg:px-10">
			<SectionHeader {...props} />
			<div className="scrollbar-none flex gap-4 overflow-x-hidden">
				<SkeletonList count={count}>
					<div className="w-[42vw] shrink-0 sm:w-[26vw] md:w-[18vw] lg:w-[14vw]">
						<PosterCardSkeleton />
					</div>
				</SkeletonList>
			</div>
		</div>
	)
}

export function HeroSkeleton() {
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

export function ReviewCardSkeleton() {
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

export function ProfileHeaderSkeleton() {
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

export function FilterBarSkeleton() {
	return (
		<div className="flex flex-wrap gap-3">
			<SkeletonList count={4}>
				<Skeleton className="h-10 w-32" />
			</SkeletonList>
		</div>
	)
}

export function DetailsHeroSkeleton() {
	return (
		<section className="relative w-full overflow-hidden">
			<div className="absolute inset-0">
				<Skeleton className="size-full rounded-none" />

				<div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/20" />
				<div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/40 to-transparent" />
			</div>

			<div className="relative mx-auto max-w-[1600px] px-4 pb-12 pt-28 sm:px-6 lg:px-10 lg:pb-16 lg:pt-36">
				<div className="flex flex-col gap-8 md:flex-row md:items-end">
					<div className="hidden w-52 shrink-0 md:block lg:w-64">
						<Skeleton className="aspect-2/3 rounded-xl shadow-2xl" />
					</div>

					<div className="w-full max-w-2xl">
						<div className="mb-3 flex flex-wrap gap-2">
							<Skeleton className="h-4 w-20 rounded-full" />
							<Skeleton className="h-4 w-24 rounded-full" />
							<Skeleton className="h-4 w-16 rounded-full" />
						</div>

						<div className="space-y-3">
							<Skeleton className="h-9 w-4/5 rounded-md sm:h-11 lg:h-12" />
							<Skeleton className="h-9 w-2/5 rounded-md sm:h-11 lg:h-12" />
						</div>

						<Skeleton className="mt-3 h-5 w-3/5 rounded-md" />

						<div className="mt-5 flex flex-wrap items-center gap-4">
							<Skeleton className="h-5 w-28 rounded-md" />
							<Skeleton className="h-4 w-12 rounded-md" />
							<Skeleton className="h-4 w-12 rounded-md" />
						</div>

						<div className="mt-5 space-y-2">
							<Skeleton className="h-4 w-full rounded-md" />
							<Skeleton className="h-4 w-full rounded-md" />
							<Skeleton className="h-4 w-11/12 rounded-md" />
						</div>

						<div className="mt-7 flex flex-wrap items-center gap-3">
							<Skeleton className="h-11 w-36 rounded-md" />
							<Skeleton className="h-11 w-44 rounded-md" />
							<Skeleton className="size-11 rounded-full" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export function CastCrewSectionSkeleton() {
	return (
		<section>
			<SectionHeader className="mb-4" title="Cast & crew" />
			<div className="scrollbar-none flex gap-6 overflow-x-auto pb-2">
				{Array.from({ length: 5 }).map((_, index) => (
					<div className="w-30" key={index.toString()}>
						<Skeleton className="h-50 w-32 rounded-lg ring-1 ring-white/5" />
						<Skeleton className="mt-3 h-4 w-4/5 rounded-md" />
						<Skeleton className="mt-2 h-3 w-3/5 rounded-md" />
					</div>
				))}
			</div>
		</section>
	)
}

export function GenreGridSkeleton() {
	return (
		<div className="mx-auto mt-10 grid max-w-[1600px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
			<SkeletonList count={12}>
				<Skeleton className="aspect-16/10 rounded-2xl ring-1 ring-transparent scroll-mt-24" />
			</SkeletonList>
		</div>
	)
}

export function GenresListSkeleton() {
	return (
		<div className="grid grid-cols-3 gap-7.5">
			<SkeletonList count={12}>
				<Skeleton className="w-3/4 h-4 rounded-full" />
			</SkeletonList>
		</div>
	)
}

export function SpotlightSkeleton() {
	return (
		<div className="mx-auto mt-10 max-w-[1600px] px-4 sm:px-6 lg:px-10">
			<div className="relative flex min-h-80 items-end overflow-hidden rounded-2xl ring-1 ring-white/5">
				<Skeleton className="absolute inset-0 z-0 h-full w-full rounded-none" />

				<div className="absolute inset-0 z-1 bg-linear-to-t from-background to-transparent" />
				<div className="absolute inset-0 z-1 bg-linear-to-r from-background via-transparent to-background" />

				<div className="relative z-10 w-full max-w-xl p-6 sm:p-10">
					<Skeleton className="h-3 w-32" />

					<Skeleton className="mt-4 h-8 w-3/4 sm:h-9" />

					<div className="mt-3 space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
					</div>
				</div>
			</div>
		</div>
	)
}

type UpComingSkeletonProps = {} & SectionHeaderProps

export function UpComingSkeleton({ ...props }: UpComingSkeletonProps) {
	return (
		<div className="mx-auto mt-14 max-w-[1600px] px-4 sm:px-6 lg:px-10">
			<SectionHeader className="mb-4" {...props} />

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<SkeletonList count={3}>
					<div className="relative aspect-3/2 overflow-hidden rounded-xl ring-1 ring-white/5">
						<Skeleton className="absolute inset-0 h-full w-full rounded-none" />

						<div className="absolute inset-0 bg-linear-to-t from-overlay-scrim/85 to-transparent" />

						<div className="absolute inset-x-0 bottom-0 space-y-2 p-4">
							<Skeleton className="h-3 w-24" />
							<Skeleton className="h-5 w-3/4" />
						</div>
					</div>
				</SkeletonList>
			</div>
		</div>
	)
}
