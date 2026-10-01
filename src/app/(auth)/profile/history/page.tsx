import type { Metadata } from "next"
import { HistoryPageClient } from "@/features/profile/components/history-page-client"
import { watchHistory } from "@/lib/data/user"

export const metadata: Metadata = {
	title: "Watch History",
}

export default function HistoryPage() {
	return <HistoryPageClient entries={watchHistory} />
}
