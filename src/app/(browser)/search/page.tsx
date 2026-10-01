import type { Metadata } from "next"
import { SearchExperience } from "@/features/search/components/search-experience"

export const metadata: Metadata = {
	title: "Search",
	description: "Search movies, TV shows, and people.",
}

export default function SearchPage() {
	return <SearchExperience />
}
