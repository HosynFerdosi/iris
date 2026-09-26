import {
	ArrowRight01Icon,
	Calendar03Icon,
	Location01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { EmptyState } from "@/components/shared/empty-state"
import { AppImage } from "@/components/shared/image"
import { Badge } from "@/components/ui/badge"
import { MediaGrid } from "@/features/media/components/media-grid"
import { getSimilar } from "@/lib/data/movies"
import { getPersonById } from "@/lib/data/people"

interface PersonPageProps {
	params: Promise<{ id: string }>
}

export async function generateMetadata({
	params,
}: PersonPageProps): Promise<Metadata> {
	const { id } = await params
	const person = getPersonById(id)
	if (!person) return { title: "Person not found" }

	return {
		title: person.name,
		description: person.biography,
	}
}

export default async function PersonPage({ params }: PersonPageProps) {
	const { id } = await params
	const person = getPersonById(id)

	if (!person) notFound()

	const filmography = getSimilar(person.filmographyIds)

	return (
		<div className="pb-20">
			<nav
				aria-label="Breadcrumb"
				className="mx-auto max-w-[1600px] px-4 pt-4 sm:px-6 lg:px-10"
			>
				<ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
					<li>
						<Link className="hover:text-foreground" href="/">
							Home
						</Link>
					</li>
					<HugeiconsIcon icon={ArrowRight01Icon} size={12} />
					<li className="text-foreground/80">{person.name}</li>
				</ol>
			</nav>

			<section className="relative mt-6 overflow-hidden">
				<div className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-10">
					<div className="flex flex-col gap-8 sm:flex-row">
						<div className="w-40 shrink-0 sm:w-56">
							<AppImage
								alt={person.name}
								aspect="poster"
								containerClassName="rounded-xl ring-1 ring-white/10 shadow-2xl"
								fallbackVariant="person"
								priority
								src={person.profilePath}
							/>
						</div>
						<div className="min-w-0 flex-1">
							<Badge className="mb-3" variant="secondary">
								{person.knownFor}
							</Badge>
							<h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
								{person.name}
							</h1>
							<div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
								<span className="flex items-center gap-1.5">
									<HugeiconsIcon icon={Calendar03Icon} size={15} />
									Born {person.birthYear}
								</span>
								<span className="flex items-center gap-1.5">
									<HugeiconsIcon icon={Location01Icon} size={15} />
									{person.birthplace}
								</span>
							</div>
							<p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground/90 sm:text-base">
								{person.biography}
							</p>
						</div>
					</div>
				</div>
			</section>

			<div className="mx-auto mt-8 max-w-[1600px] px-4 sm:px-6 lg:px-10">
				<h2 className="mb-5 text-2xl font-bold tracking-tight text-foreground">
					Known for
				</h2>
				{filmography.length === 0 ? (
					<EmptyState
						description="We don't have filmography details for this person yet."
						icon={Calendar03Icon}
						title="No credits available"
					/>
				) : (
					<MediaGrid items={filmography} />
				)}
			</div>
		</div>
	)
}
