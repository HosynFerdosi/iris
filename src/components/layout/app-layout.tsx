import { type ReactNode, Suspense } from "react"
import { SiteFooter } from "./app-footer"
import { SiteHeader } from "./app-header"
import { MobileTabBar } from "./mobile-tab-bar"

export function AppLayout({ children }: { children: ReactNode }) {
	return (
		<div className="relative flex min-h-screen flex-col">
			<Suspense>
				<SiteHeader />
				<MobileTabBar />
			</Suspense>
			<main className="flex-1">{children}</main>
			<SiteFooter />
		</div>
	)
}
