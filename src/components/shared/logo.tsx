import { cn } from "@/lib/utils"

interface LogoProps {
	className?: string
	markOnly?: boolean
}

/**
 * Custom mark: a marquee sign silhouette (arched canopy + bulb row) rendered
 * in the brand gold. Deliberately not a stock icon-library glyph, since the
 * logotype is the one place this product should feel unmistakably its own.
 */
export function Logo({ className, markOnly = false }: LogoProps) {
	return (
		<span className={cn("inline-flex items-center gap-2", className)}>
			<svg
				aria-hidden
				className="shrink-0"
				fill="none"
				height="26"
				viewBox="0 0 32 32"
				width="26"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Logo</title>
				<path
					className="text-accent-gold"
					d="M4 14C4 8.477 8.477 4 14 4h4c5.523 0 10 4.477 10 10v3H4v-3Z"
					fill="currentColor"
				/>
				<rect
					className="fill-foreground/85"
					height="3.4"
					rx="1.2"
					width="26"
					x="3"
					y="19"
				/>
				<circle className="fill-background" cx="8" cy="12.5" r="1.15" />
				<circle className="fill-background" cx="12.4" cy="10.4" r="1.15" />
				<circle className="fill-background" cx="16" cy="9.6" r="1.15" />
				<circle className="fill-background" cx="19.6" cy="10.4" r="1.15" />
				<circle className="fill-background" cx="24" cy="12.5" r="1.15" />
				<rect
					className="fill-foreground/40"
					height="2.2"
					rx="1.1"
					width="20"
					x="6"
					y="24.4"
				/>
			</svg>
			{!markOnly && (
				<span className="text-xl font-semibold tracking-tight text-foreground">
					Marquee
				</span>
			)}
		</span>
	)
}
