import { type ReactNode, Suspense } from "react"
import { SiteFooter } from "./app-footer"
import { SiteHeader } from "./app-header"

export function AppLayout({ children }: { children: ReactNode }) {
	return (
		<div className="relative flex min-h-screen flex-col">
			<Suspense>
				<SiteHeader />
			</Suspense>
			<main className="flex-1">{children}</main>
			<SiteFooter />
		</div>
	)
}
