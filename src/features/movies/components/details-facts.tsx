import { SectionHeader } from "@/components/shared/section-header"
import type { Media } from "@/lib/types/medias"

type DetailsFactsProps = {
	item: Media
}

export function DetailsFacts({ item }: DetailsFactsProps) {
	const facts: { label: string; value: string }[] = [
		{
			label: "Status",
			value: item.status.charAt(0).toUpperCase() + item.status.slice(1),
		},
		{ label: "Original language", value: item.originalLanguage },
		{ label: "Country of origin", value: item.countryOfOrigin },
		{
			label: "Release date",
			value: new Date(
				"releaseDate" in item
					? item.releaseDate
					: (item.lastAirDate as string)
			).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			}),
		},
	]

	if ("networks" in item && item.networks && item.networks.length > 0) {
		facts.push({ label: "Network", value: item.networks.join(", ") })
	}

	return (
		<section>
			<SectionHeader className="mb-4" title="Details" />
			<dl className="grid grid-cols-1 gap-x-8 gap-y-4 rounded-xl border border-border bg-card p-5 sm:grid-cols-2">
				{facts.map((fact) => (
					<div key={fact.label}>
						<dt className="text-xs uppercase tracking-wide text-muted-foreground">
							{fact.label}
						</dt>
						<dd className="mt-1 text-sm font-medium text-foreground">
							{fact.value}
						</dd>
					</div>
				))}
			</dl>
		</section>
	)
}
