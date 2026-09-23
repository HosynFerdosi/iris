import { genres, getGenreById } from "@/lib/data/genres"
import { getMovieById, movies } from "@/lib/data/movies"
import { getPersonById, people } from "@/lib/data/people"
import { getReviewsByMediaId } from "@/lib/data/reviews"
import { getTvShowById, tvShows } from "@/lib/data/tv"
import type { MediaItem, RatingBreakdown } from "@/lib/types/media"

export {
	movies,
	getMovieById,
	tvShows,
	getTvShowById,
	people,
	getPersonById,
	genres,
	getGenreById,
	getReviewsByMediaId,
}

export const allMedia: MediaItem[] = [...movies, ...tvShows]

export function getMediaById(id: string): MediaItem | undefined {
	return allMedia.find((item) => item.id === id)
}

export function getMediaByIds(ids: string[]): MediaItem[] {
	return ids
		.map((id) => getMediaById(id))
		.filter((item): item is MediaItem => Boolean(item))
}

export function getTrending(limit = 12): MediaItem[] {
	return [...allMedia]
		.sort((a, b) => b.popularity - a.popularity)
		.slice(0, limit)
}

export function getTopRated(type?: "movie" | "tv", limit = 12): MediaItem[] {
	const pool = type ? allMedia.filter((item) => item.type === type) : allMedia
	return [...pool]
		.filter((item) => item.rating > 0)
		.sort((a, b) => b.rating - a.rating)
		.slice(0, limit)
}

export function getPopular(type?: "movie" | "tv", limit = 12): MediaItem[] {
	const pool = type ? allMedia.filter((item) => item.type === type) : allMedia
	return [...pool].sort((a, b) => b.popularity - a.popularity).slice(0, limit)
}

export function getUpcoming(limit = 12): MediaItem[] {
	return allMedia
		.filter((item) => item.status === "upcoming")
		.sort(
			(a, b) =>
				new Date(a.releaseDate).getTime() -
				new Date(b.releaseDate).getTime()
		)
		.slice(0, limit)
}

export function getByGenre(
	genreId: string,
	type?: "movie" | "tv"
): MediaItem[] {
	const pool = type ? allMedia.filter((item) => item.type === type) : allMedia
	return pool.filter((item) => item.genreIds.includes(genreId))
}

export function getSimilar(item: MediaItem): MediaItem[] {
	return getMediaByIds(item.similarIds)
}

export function getRatingBreakdown(item: MediaItem): RatingBreakdown[] {
	const seed = item.id.length + Math.round(item.rating * 10)
	return Array.from({ length: 10 }, (_, index) => {
		const score = index + 1
		const distance = Math.abs(score - item.rating)
		const weight = Math.max(2, 32 - distance * distance * 3 + (seed % 5))
		return { score, percentage: weight }
	}).map((entry, _index, arr) => {
		const total = arr.reduce((sum, e) => sum + e.percentage, 0)
		return {
			score: entry.score,
			percentage: Math.round((entry.percentage / total) * 100),
		}
	})
}
