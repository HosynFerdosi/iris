import { HeroSkeleton, RailSkeleton } from "@/components/shared/skeleton"

export default function HomeLoading() {
	return (
		<div className="pb-20">
			<HeroSkeleton />
			<div className="mt-12 space-y-14">
				<RailSkeleton />
				<RailSkeleton />
				<RailSkeleton />
			</div>
		</div>
	)
}
