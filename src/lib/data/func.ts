import type { Media } from "../types/media"
import { movies } from "./movies"
import { tvShows } from "./tv"

const data: Media[] = [...movies, ...tvShows]

export function getMediaById(id: string) {
	return data.find((item) => item.id === id)
}

export function getMediaByIds(ids: string[]) {
	return ids
		.map((id) => getMediaById(id))
		.filter((item): item is Media => Boolean(item))
}

export function getSimilar(item: Media) {
	return getMediaByIds(item.similarIds)
}

export function getTrending(limit = 12) {
	return [...data].sort((a, b) => b.popularity - a.popularity).slice(0, limit)
}

export function getPopular(type?: "movie" | "tv", limit = 12) {
	const pool = type ? data.filter((item) => item.type === type) : data
	return [...pool].sort((a, b) => b.popularity - a.popularity).slice(0, limit)
}

export function getTopRated(type?: "movie" | "tv", limit = 12) {
	const pool = type ? data.filter((item) => item.type === type) : data
	return [...pool]
		.filter((item) => item.rating > 0)
		.sort((a, b) => b.rating - a.rating)
		.slice(0, limit)
}

export function getUpcoming(limit = 12) {
	return data
		.filter((item) => item.status === "upcoming")
		.sort(
			(a, b) =>
				new Date(
					"releaseDate" in a ? a.releaseDate : a.firstAirDate
				).getTime() -
				new Date(
					"releaseDate" in b ? b.releaseDate : b.firstAirDate
				).getTime()
		)
		.slice(0, limit)
}
