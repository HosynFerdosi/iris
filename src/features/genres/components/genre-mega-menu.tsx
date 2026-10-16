import type { Route } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { GenresListSkeleton } from "@/components/shared/skeleton"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { fetchGenres } from "../server/db/genres.db"

export function GenresMegaMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent text-muted-foreground px-3 py-2 data-[state=open]:bg-transparent">
						Genres
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="w-140 p-4">
							<Suspense fallback={<GenresListSkeleton />}>
								<GenresList />
							</Suspense>
							<div className="mt-3 border-t border-border pt-3">
								<NavigationMenuLink
									render={
										<Link
											className="block rounded-lg px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
											href="/genres"
										>
											Browse all genres →
										</Link>
									}
								/>
							</div>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

async function GenresList() {
	const genres = await fetchGenres()

	return (
		<div className="grid grid-cols-3 gap-1">
			{genres.slice(0, 12).map((genre) => (
				<NavigationMenuLink
					key={genre.id}
					render={
						<Link
							className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-primary"
							href={`/genres/${genre.id}` as Route}
						>
							{genre.name}
						</Link>
					}
				/>
			))}
		</div>
	)
}
