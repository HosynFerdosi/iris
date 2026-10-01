import type { Metadata } from "next"
import { WatchlistPageClient } from "@/features/profile/components/watchlist-page-client"
import { watchlist } from "@/lib/data/user"

export const metadata: Metadata = {
	title: "Watchlist",
}

export default function WatchlistPage() {
	return <WatchlistPageClient initialEntries={watchlist} />
}
