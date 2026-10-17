export type MediaType = "movie" | "tv"

export interface Genre {
	id: string
	name: string
	description: string
	backdropPath: string
}

export interface CastCredit {
	personId: string
	characterName: string
}

export interface CrewCredit {
	personId: string
	job: string
}

export interface Season {
	id: string
	seasonNumber: number
	name: string
	episodeCount: number
	airYear: number
	overview: string
	posterPath: string
	episodes: Episode[]
}

export interface Episode {
	id: string
	episodeNumber: number
	name: string
	overview: string
	runtimeMinutes: number
	airDate: string
	stillPath: string
	rating: number
}

export interface MediaItem {
	id: string
	title: string
	tagline?: string
	overview: string
	posterPath: string
	backdropPath: string
	status: "released" | "upcoming" | "returning" | "ended"
	genreIds: string[]
	rating: number
	ratingCount: number
	popularity: number
	cast: CastCredit[]
	crew: CrewCredit[]
	similarIds: string[]
	trailerTitle?: string
	galleryPaths: string[]
	countryOfOrigin: string
	originalLanguage: string
}

export interface Movie extends MediaItem {
	type: "movie"
	releaseDate: string
	runtimeMinutes: number
}

export interface TVShow extends MediaItem {
	type: "tv"
	firstAirDate: string
	lastAirDate?: string
	seasons: Season[]
	networks: string[]
}

export interface Person {
	id: string
	name: string
	profilePath: string
	knownFor: "Acting" | "Directing" | "Writing" | "Production" | "Composer"
	birthYear: number
	birthplace: string
	biography: string
	filmographyIds: string[]
}

export interface Review {
	id: string
	mediaId: string
	userId: string
	userName: string
	userAvatarPath: string
	rating: number
	title: string
	body: string
	createdAt: string
	likeCount: number
	isCurrentUser?: boolean
	replies: ReviewReply[]
}

export interface ReviewReply {
	id: string
	userId: string
	userName: string
	userAvatarPath: string
	body: string
	createdAt: string
	likeCount: number
}

export interface RatingBreakdown {
	score: number
	percentage: number
}
