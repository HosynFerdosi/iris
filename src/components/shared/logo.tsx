import { CameraVideoIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "@/lib/utils"

type LogoProps = {
	className?: string
	markOnly?: boolean
}

export function Logo({ className, markOnly = false }: LogoProps) {
	return (
		<span
			className={cn("inline-flex items-center gap-1 py-2 px-1", className)}
		>
			<HugeiconsIcon
				className="rotate-z-180 rotate-x-180 text-primary"
				icon={CameraVideoIcon}
			/>
			{!markOnly && (
				<span className="flex flex-col leading-none">
					<span className="text-xl font-semibold leading-4 text-foreground">
						Iris
					</span>
					<span className="mt-0.5 text-[9px] font-medium tracking-wide text-muted-foreground">
						Movies & Series
					</span>
				</span>
			)}
		</span>
	)
}
