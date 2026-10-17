import { SectionHeader } from "@/components/shared/section-header"
import { PersonCard } from "@/features/media/components/person-card"
import { getPersonById } from "@/lib/data/people"
import type { CastCredit, CrewCredit } from "@/lib/types/medias"

type CastCrewSectionProps = {
	cast: CastCredit[]
	crew: CrewCredit[]
}

export function CastCrewSection({ cast, crew }: CastCrewSectionProps) {
	if (cast.length === 0 && crew.length === 0) return null

	return (
		<section>
			<SectionHeader className="mb-4" title="Cast & crew" />
			<div className="scrollbar-none flex gap-6 overflow-x-auto pb-2">
				{[...cast, ...crew].map((credit, index) => {
					const person = getPersonById(credit.personId)
					if (!person) return null
					return (
						<PersonCard
							key={`${credit.personId}-${index.toString()}`}
							name={person.name}
							personId={person.id}
							profilePath={person.profilePath}
							role={
								"characterName" in credit
									? credit.characterName
									: credit.job
							}
						/>
					)
				})}
			</div>
		</section>
	)
}
