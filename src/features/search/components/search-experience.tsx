"use client"

import {
	Cancel01Icon,
	Clock01Icon,
	SearchIcon,
	UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Route } from "next"
import Link from "next/link"
import * as React from "react"
import { EmptyState } from "@/components/shared/empty-state"
import { AppImage } from "@/components/shared/image"
import { Rating } from "@/components/shared/rating"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { data } from "@/lib/data/func"
import { people } from "@/lib/data/people"

const RECENT_SEARCHES = ["Quantum Horizon", "Florence Pugh", "Glass City"]
const TRENDING_SEARCHES = [
	"Denis Villeneuve",
	"Northern Embers",
	"The Last Signal",
]

export function SearchExperience() {
	const [query, setQuery] = React.useState("")

	const mediaResults = React.useMemo(() => {
		if (!query.trim()) return []
		const q = query.toLowerCase()
		return data.filter((item) => item.title.toLowerCase().includes(q))
	}, [query])

	const peopleResults = React.useMemo(() => {
		if (!query.trim()) return []
		const q = query.toLowerCase()
		return people.filter((person) => person.name.toLowerCase().includes(q))
	}, [query])

	const hasQuery = query.trim().length > 0
	const totalResults = mediaResults.length + peopleResults.length

	return (
		<div className="mx-auto max-w-3xl px-4 pt-10 pb-20 sm:px-6">
			<h1 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				What do you want to watch?
			</h1>
			<div className="relative mt-8">
				<HugeiconsIcon
					className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
					icon={SearchIcon}
					size={20}
				/>
				<Input
					autoFocus
					className="h-14 rounded-xl pl-12 pr-12 text-base"
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search movies, TV shows, and people..."
					value={query}
				/>
				{query && (
					<button
						aria-label="Clear search"
						className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
						onClick={() => setQuery("")}
						type="button"
					>
						<HugeiconsIcon icon={Cancel01Icon} size={18} />
					</button>
				)}
			</div>

			{!hasQuery && (
				<div className="mt-10 space-y-8">
					<div>
						<p className="mb-3 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
							<HugeiconsIcon icon={Clock01Icon} size={15} />
							Recent searches
						</p>
						<div className="flex flex-wrap gap-2">
							{RECENT_SEARCHES.map((term) => (
								<button
									className="rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
									key={term}
									onClick={() => setQuery(term)}
									type="button"
								>
									{term}
								</button>
							))}
						</div>
					</div>
					<div>
						<p className="mb-3 text-sm font-medium text-muted-foreground">
							Trending searches
						</p>
						<div className="flex flex-wrap gap-2">
							{TRENDING_SEARCHES.map((term) => (
								<button
									className="rounded-full bg-secondary/60 px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-secondary"
									key={term}
									onClick={() => setQuery(term)}
									type="button"
								>
									{term}
								</button>
							))}
						</div>
					</div>
				</div>
			)}

			{hasQuery && (
				<div className="mt-8">
					{totalResults === 0 ? (
						<EmptyState
							description="Try a different spelling or a broader term."
							icon={SearchIcon}
							title={`No results for "${query}"`}
						/>
					) : (
						<Tabs defaultValue="all">
							<TabsList>
								<TabsTrigger value="all">
									All ({totalResults})
								</TabsTrigger>
								<TabsTrigger value="titles">
									Titles ({mediaResults.length})
								</TabsTrigger>
								<TabsTrigger value="people">
									People ({peopleResults.length})
								</TabsTrigger>
							</TabsList>

							<TabsContent className="space-y-2" value="all">
								{mediaResults.map((item) => (
									<MediaResultRow item={item} key={item.id} />
								))}
								{peopleResults.map((person) => (
									<PersonResultRow key={person.id} person={person} />
								))}
							</TabsContent>
							<TabsContent className="space-y-2" value="titles">
								{mediaResults.map((item) => (
									<MediaResultRow item={item} key={item.id} />
								))}
							</TabsContent>
							<TabsContent className="space-y-2" value="people">
								{peopleResults.map((person) => (
									<PersonResultRow key={person.id} person={person} />
								))}
							</TabsContent>
						</Tabs>
					)}
				</div>
			)}
		</div>
	)
}

function MediaResultRow({ item }: { item: (typeof data)[number] }) {
	const href = `/${item.type === "movie" ? "movie" : "tv"}/${item.id}`
	return (
		<Link
			className="flex items-center gap-4 rounded-xl p-2.5 transition-colors hover:bg-secondary/50"
			href={href as Route}
		>
			<AppImage
				alt={item.title}
				aspect="poster"
				containerClassName="w-12 shrink-0 rounded-md"
				sizes=""
				src={item.posterPath}
			/>
			<div className="min-w-0 flex-1">
				<p className="truncate font-medium text-foreground">{item.title}</p>
				<p className="text-xs text-muted-foreground">
					{new Date(
						"releaseDate" in item ? item.releaseDate : item.firstAirDate
					).getFullYear()}{" "}
					· {item.type === "movie" ? "Movie" : "TV Show"}
				</p>
			</div>
			{item.rating > 0 && <Rating size="sm" value={item.rating} />}
		</Link>
	)
}

function PersonResultRow({ person }: { person: (typeof people)[number] }) {
	return (
		<Link
			className="flex items-center gap-4 rounded-xl p-2.5 transition-colors hover:bg-secondary/50"
			href={`/person/${person.id}`}
		>
			<AppImage
				alt={person.name}
				aspect="avatar"
				containerClassName="size-12 shrink-0 rounded-full"
				fallbackVariant="person"
				sizes=""
				src={person.profilePath}
			/>
			<div className="min-w-0 flex-1">
				<p className="truncate font-medium text-foreground">
					{person.name}
				</p>
				<p className="flex items-center gap-1 text-xs text-muted-foreground">
					<HugeiconsIcon icon={UserIcon} size={12} />
					{person.knownFor}
				</p>
			</div>
		</Link>
	)
}
