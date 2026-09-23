import { cva } from "class-variance-authority"

/**
 * Vendor copy of glasscn's `glass-variants` utility
 * (npx shadcn add @glasscn/glass-variants). Defines the five documented
 * surface treatments — clear, frosted, subtle, liquid, liquid-refract —
 * shared across every Glass* component in this directory.
 */
export const glassSurfaceVariants = cva("", {
	variants: {
		glassVariant: {
			clear: "bg-surface/40 backdrop-blur-md border border-white/10 supports-[backdrop-filter]:bg-surface/30",
			frosted:
				"bg-surface/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 shadow-lg",
			subtle: "bg-surface/20 backdrop-blur-sm border border-white/5",
			liquid:
				"relative bg-gradient-to-b from-white/12 to-white/[0.03] backdrop-blur-xl border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_32px_rgba(0,0,0,0.24)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent",
			"liquid-refract":
				"relative bg-white/8 backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_12px_40px_rgba(0,0,0,0.3)] overflow-hidden",
		},
	},
	defaultVariants: {
		glassVariant: "clear",
	},
})

export type GlassVariant =
	| "clear"
	| "frosted"
	| "subtle"
	| "liquid"
	| "liquid-refract"
