import type { Media } from "./types/medias"

export { cn } from "cn"

export const wait = async (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const relaseDate = (item: Media, type: "movie" | "tv") => {
	const date = item.type === type ? item.releaseDate : item.firstAirDate

	return date ? new Date(date).getFullYear() : null
}
