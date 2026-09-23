import { movies, tvShows } from "@/lib/data"
import type { MediaItem } from "@/lib/types/media"

export interface CurrentUser {
	id: string
	name: string
	phone: string
	avatarPath: string
	memberSince: string
	bio: string
}

export const currentUser: CurrentUser = {
	id: "u-current",
	name: "Jordan Blake",
	phone: "+1 (555) 018-2231",
	avatarPath:
		"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80",
	memberSince: "2024-11-02",
	bio: "Sci-fi and slow-burn drama enjoyer. Always looking for the next thing to obsess over.",
}

export interface WatchlistEntry {
	item: MediaItem
	addedAt: string
}

export const watchlist: WatchlistEntry[] = [
	{ item: movies[0], addedAt: "2026-09-18" },
	{ item: movies[2], addedAt: "2026-09-12" },
	{ item: tvShows[0], addedAt: "2026-09-10" },
	{ item: tvShows[2], addedAt: "2026-08-30" },
	{ item: movies[4], addedAt: "2026-08-21" },
]

export interface HistoryEntry {
	item: MediaItem
	watchedAt: string
	progress: number
}

export const watchHistory: HistoryEntry[] = [
	{ item: movies[1], watchedAt: "2026-09-19", progress: 100 },
	{ item: tvShows[0], watchedAt: "2026-09-17", progress: 64 },
	{ item: movies[3], watchedAt: "2026-09-08", progress: 100 },
	{ item: tvShows[1], watchedAt: "2026-08-27", progress: 100 },
	{ item: movies[7], watchedAt: "2026-08-15", progress: 41 },
]

export interface RatingEntry {
	item: MediaItem
	rating: number
	ratedAt: string
}

export const userRatings: RatingEntry[] = [
	{ item: movies[0], rating: 9, ratedAt: "2026-09-20" },
	{ item: movies[2], rating: 8, ratedAt: "2026-09-14" },
	{ item: tvShows[0], rating: 10, ratedAt: "2026-09-05" },
	{ item: movies[3], rating: 6, ratedAt: "2026-08-29" },
]

export type NotificationType =
	| "new-content"
	| "watchlist"
	| "account"
	| "reminder"
	| "review-activity"

export interface NotificationEntry {
	id: string
	type: NotificationType
	title: string
	body: string
	createdAt: string
	read: boolean
	item?: MediaItem
}

export const notifications: NotificationEntry[] = [
	{
		id: "n-1",
		type: "reminder",
		title: "Releasing tomorrow",
		body: "Northern Lights premieres tomorrow — it's on your watchlist.",
		createdAt: "2026-09-21T09:00:00",
		read: false,
		item: movies.find((m) => m.id === "m-northern-lights"),
	},
	{
		id: "n-2",
		type: "review-activity",
		title: "Your review got some love",
		body: "12 people liked your review of Quantum Horizon.",
		createdAt: "2026-09-20T14:00:00",
		read: false,
		item: movies[0],
	},
	{
		id: "n-3",
		type: "new-content",
		title: "New episode available",
		body: "Glass City Season 2, Episode 1 is now available to watch.",
		createdAt: "2026-09-19T08:30:00",
		read: true,
		item: tvShows[0],
	},
	{
		id: "n-4",
		type: "watchlist",
		title: "Added from Discover",
		body: "The Hollow Crown was added to your watchlist.",
		createdAt: "2026-09-17T11:00:00",
		read: true,
		item: movies.find((m) => m.id === "m-hollow-crown"),
	},
	{
		id: "n-5",
		type: "account",
		title: "New sign-in detected",
		body: "Your account was signed in from a new device.",
		createdAt: "2026-09-15T20:15:00",
		read: true,
	},
]
