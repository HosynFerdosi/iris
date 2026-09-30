"use client"

import {
	BookmarkAdd01Icon,
	Cancel01Icon,
	Menu01Icon,
	UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Logo } from "@/components/shared/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GlassButton } from "../ui/glasscn/glass-button"
import { glassSurfaceVariants } from "../ui/glasscn/glass-variants"
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from "../ui/sheet"

const links = [
	{ href: "/movies", label: "Movies" },
	{ href: "/tv", label: "TV Shows" },
	{ href: "/discover", label: "Discover" },
	{ href: "/genres", label: "Genres" },
	{ href: "/coming-soon", label: "Coming Soon" },
]

export function MobileNav() {
	const [open, setOpen] = useState(false)
	const pathname = usePathname()

	return (
		<div className="lg:hidden">
			<Sheet onOpenChange={setOpen} open={open}>
				<SheetTrigger
					render={
						<Button
							aria-expanded={open}
							aria-label="Open menu"
							className="bg-transparent"
							onClick={() => setOpen(true)}
							size="icon"
							variant="ghost"
						>
							<HugeiconsIcon icon={Menu01Icon} size={22} />
						</Button>
					}
				/>
				<SheetContent className="bg-none" showCloseButton={false}>
					<div
						className={cn(
							glassSurfaceVariants({ glassVariant: "liquid" }),
							"max-h-none h-full border-0"
						)}
					>
						<SheetHeader>
							<div className="flex items-center justify-between">
								<Logo />
								<Button
									aria-label="Close menu"
									onClick={() => setOpen(false)}
									size="icon"
									variant="ghost"
								>
									<HugeiconsIcon icon={Cancel01Icon} size={20} />
								</Button>
							</div>
						</SheetHeader>
						<nav className="flex flex-col gap-1 px-3 py-2">
							{links.map((link) => (
								<Link
									className={cn(
										"rounded-lg px-3 py-3 text-base font-medium transition-colors",
										pathname === link.href
											? "bg-secondary text-foreground"
											: "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
									)}
									href={link.href as Route}
									key={link.href}
									onClick={() => setOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</nav>
						<SheetFooter>
							<div className="mt-auto flex flex-col gap-2 border-t border-border py-4">
								<Link
									className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
									href="/"
									onClick={() => setOpen(false)}
								>
									<HugeiconsIcon icon={BookmarkAdd01Icon} size={18} />
									Watchlist
								</Link>
								<Link
									className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
									href="/"
									onClick={() => setOpen(false)}
								>
									<HugeiconsIcon icon={UserIcon} size={18} />
									Profile
								</Link>
								<Link className="mt-1" href="/login">
									<GlassButton
										className="w-full text-primary rounded-lg"
										glassVariant="liquid"
										onClick={() => setOpen(false)}
									>
										Sign in
									</GlassButton>
								</Link>
							</div>
						</SheetFooter>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}
