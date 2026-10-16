import { Skeleton } from "@/components/ui/skeleton"

export default function ComingSoonLoading() {
	return (
		<div className="pb-20">
			<div className="mx-auto max-w-[1600px] space-y-4 px-4 pt-8 sm:px-6 lg:px-10">
				<Skeleton className="h-4 w-24" />
				<Skeleton className="h-12 w-2/3" />
				<Skeleton className="mt-6 h-96 rounded-2xl" />
				<div className="mt-8 space-y-4">
					{Array.from({ length: 4 }).map((_, i) => (
						<Skeleton className="h-24 rounded-xl" key={i.toString()} />
					))}
				</div>
			</div>
		</div>
	)
}
