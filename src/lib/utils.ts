import type { Media } from "./types/media"

export { cn } from "cn"

export const wait = async (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const relaseDate = (item: Media) => {
	const date = item.type === "movie" ? item.releaseDate : item.firstAirDate
	return date ? new Date(date) : undefined
}
