import type { Metadata } from "next"
import { RatingsPageClient } from "@/features/profile/components/ratings-page-client"
import { userRatings } from "@/lib/data/user"

export const metadata: Metadata = {
	title: "Your Ratings",
}

export default function RatingsPage() {
	return <RatingsPageClient entries={userRatings} />
}
