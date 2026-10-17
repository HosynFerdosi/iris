import {
	CastCrewSectionSkeleton,
	DetailsHeroSkeleton,
} from "@/components/shared/skeleton"

export default function Loading() {
	return (
		<div className="pb-20 relative">
			<DetailsHeroSkeleton />
			<div className="mx-auto mt-10 max-w-[1600px] space-y-12 px-4 sm:px-6 lg:px-10">
				<CastCrewSectionSkeleton />
			</div>
		</div>
	)
}
