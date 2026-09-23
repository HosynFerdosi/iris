import type { Route } from "next"
import Link from "next/link"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { genres } from "@/lib/data"

export function GenresMegaMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent px-3 py-2 data-[state=open]:bg-transparent">
						Genres
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="w-140 p-4">
							<div className="grid grid-cols-3 gap-1">
								{genres.slice(0, 12).map((genre) => (
									<NavigationMenuLink
										key={genre.id}
										render={
											<Link
												className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
												href={`/genres?genre=${genre.id}` as Route}
											>
												{genre.name}
											</Link>
										}
									/>
								))}
							</div>
							<div className="mt-3 border-t border-border pt-3">
								<NavigationMenuLink
									render={
										<Link
											className="block rounded-lg px-3 py-2 text-sm font-medium text-accent-gold transition-colors hover:bg-accent-gold/10"
											href="/"
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
