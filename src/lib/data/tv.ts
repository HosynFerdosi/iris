import type { MediaItem } from "@/lib/types/media"

function unsplash(id: string, w: number, h: number): string {
	return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`
}

export const tvShows: MediaItem[] = [
	{
		id: "tv-glass-city",
		type: "tv",
		title: "Glass City",
		tagline: "Every skyline hides a fault line.",
		overview:
			"In a city built on reclaimed land, a homicide detective and a corporate fixer find themselves on opposite sides of a case that reaches into the foundations of the city itself — literally and politically.",
		posterPath: unsplash("photo-1449824913935-59a10b8d2000", 500, 750),
		backdropPath: unsplash("photo-1449824913935-59a10b8d2000", 1600, 900),
		releaseDate: "2025-04-18",
		status: "returning",
		genreIds: ["crime", "drama", "thriller"],
		rating: 8.6,
		ratingCount: 31820,
		popularity: 112.4,
		cast: [
			{ personId: "p-oscar-isaac", characterName: "Det. Marcus Vega" },
			{ personId: "p-zendaya", characterName: "Priya Malhotra" },
		],
		crew: [],
		similarIds: ["tv-northern-embers", "tv-the-quiet-hour"],
		trailerTitle: "Glass City — Season 1 Trailer",
		galleryPaths: [
			unsplash("photo-1444723121867-7a241cacace9", 1200, 675),
			unsplash("photo-1477959858617-67f85cf4f1df", 1200, 675),
		],
		networks: ["Meridian+"],
		countryOfOrigin: "USA",
		originalLanguage: "English",
		seasons: [
			{
				id: "tv-glass-city-s1",
				seasonNumber: 1,
				name: "Season 1",
				episodeCount: 8,
				airYear: 2025,
				overview:
					"Vega and Malhotra uncover a conspiracy tied to the city's original land developers.",
				posterPath: unsplash("photo-1449824913935-59a10b8d2000", 500, 750),
				episodes: [
					{
						id: "tv-glass-city-s1e1",
						episodeNumber: 1,
						name: "Foundations",
						overview:
							"A body is found in a building that, according to city records, doesn't exist.",
						runtimeMinutes: 52,
						airDate: "2025-04-18",
						stillPath: unsplash(
							"photo-1444723121867-7a241cacace9",
							500,
							280
						),
						rating: 8.4,
					},
					{
						id: "tv-glass-city-s1e2",
						episodeNumber: 2,
						name: "Load Bearing",
						overview:
							"Malhotra's firm pressures her to bury the story before it breaks.",
						runtimeMinutes: 49,
						airDate: "2025-04-25",
						stillPath: unsplash(
							"photo-1477959858617-67f85cf4f1df",
							500,
							280
						),
						rating: 8.2,
					},
					{
						id: "tv-glass-city-s1e3",
						episodeNumber: 3,
						name: "Substrate",
						overview:
							"Vega traces the paper trail to a name everyone in the city knows.",
						runtimeMinutes: 55,
						airDate: "2025-05-02",
						stillPath: unsplash(
							"photo-1519608487953-e999c86e7455",
							500,
							280
						),
						rating: 8.7,
					},
				],
			},
			{
				id: "tv-glass-city-s2",
				seasonNumber: 2,
				name: "Season 2",
				episodeCount: 8,
				airYear: 2026,
				overview: "One year later, the fallout reaches the mayor's office.",
				posterPath: unsplash("photo-1444723121867-7a241cacace9", 500, 750),
				episodes: [
					{
						id: "tv-glass-city-s2e1",
						episodeNumber: 1,
						name: "Aftershock",
						overview:
							"Vega returns from leave to a department that no longer trusts him.",
						runtimeMinutes: 54,
						airDate: "2026-03-10",
						stillPath: unsplash(
							"photo-1517976487492-5750f3195933",
							500,
							280
						),
						rating: 8.5,
					},
				],
			},
		],
	},
	{
		id: "tv-northern-embers",
		type: "tv",
		title: "Northern Embers",
		tagline: "The cold keeps every secret.",
		overview:
			"A remote mining town's fragile peace collapses when a company survey team disappears in the mountains, and the search reveals decades of buried town history.",
		posterPath: unsplash("photo-1517299321609-52687d1bc55a", 500, 750),
		backdropPath: unsplash("photo-1517299321609-52687d1bc55a", 1600, 900),
		releaseDate: "2024-10-04",
		status: "ended",
		genreIds: ["drama", "mystery", "thriller"],
		rating: 8.0,
		ratingCount: 18420,
		popularity: 76.1,
		cast: [
			{ personId: "p-idris-elba", characterName: "Foreman Hale" },
			{ personId: "p-florence-pugh", characterName: "Sgt. Iris Cole" },
		],
		crew: [],
		similarIds: ["tv-glass-city", "tv-the-quiet-hour"],
		trailerTitle: "Northern Embers — Official Trailer",
		galleryPaths: [unsplash("photo-1478760329108-5c3ed9d495a0", 1200, 675)],
		networks: ["Aurora Original"],
		countryOfOrigin: "Canada",
		originalLanguage: "English",
		seasons: [
			{
				id: "tv-northern-embers-s1",
				seasonNumber: 1,
				name: "Season 1",
				episodeCount: 6,
				airYear: 2024,
				overview: "The complete and only season of the series.",
				posterPath: unsplash("photo-1517299321609-52687d1bc55a", 500, 750),
				episodes: [
					{
						id: "tv-northern-embers-s1e1",
						episodeNumber: 1,
						name: "The Survey Team",
						overview: "Six people go up the mountain. Five come back.",
						runtimeMinutes: 48,
						airDate: "2024-10-04",
						stillPath: unsplash(
							"photo-1517299321609-52687d1bc55a",
							500,
							280
						),
						rating: 8.1,
					},
				],
			},
		],
	},
	{
		id: "tv-the-quiet-hour",
		type: "tv",
		title: "The Quiet Hour",
		tagline: "Not everyone survives the news cycle.",
		overview:
			"An ensemble newsroom drama following the editorial staff of a struggling investigative outlet as they chase one final story that could either save the publication or end it.",
		posterPath: unsplash("photo-1495020689067-958852a7765e", 500, 750),
		backdropPath: unsplash("photo-1495020689067-958852a7765e", 1600, 900),
		releaseDate: "2026-09-01",
		status: "returning",
		genreIds: ["drama"],
		rating: 7.4,
		ratingCount: 6210,
		popularity: 44.2,
		cast: [
			{ personId: "p-lupita-nyongo", characterName: "Editor Sarah Kline" },
		],
		crew: [],
		similarIds: ["tv-glass-city"],
		galleryPaths: [unsplash("photo-1504711434969-e33886168f5c", 1200, 675)],
		networks: ["Meridian+"],
		countryOfOrigin: "USA",
		originalLanguage: "English",
		seasons: [
			{
				id: "tv-the-quiet-hour-s1",
				seasonNumber: 1,
				name: "Season 1",
				episodeCount: 10,
				airYear: 2026,
				overview:
					"The newsroom races to break a story before their funding runs out.",
				posterPath: unsplash("photo-1495020689067-958852a7765e", 500, 750),
				episodes: [
					{
						id: "tv-the-quiet-hour-s1e1",
						episodeNumber: 1,
						name: "Deadline",
						overview:
							"The publisher gives the team ninety days to prove their worth.",
						runtimeMinutes: 44,
						airDate: "2026-09-01",
						stillPath: unsplash(
							"photo-1504711434969-e33886168f5c",
							500,
							280
						),
						rating: 7.5,
					},
				],
			},
		],
	},
	{
		id: "tv-ember-and-ash",
		type: "tv",
		title: "Ember & Ash",
		tagline: "Two kingdoms. One line of fire.",
		overview:
			"A sprawling fantasy epic tracing two rival dynasties whose fates become entangled through an arranged alliance neither side wanted.",
		posterPath: unsplash("photo-1518709268805-4e9042af2176", 500, 750),
		backdropPath: unsplash("photo-1518709268805-4e9042af2176", 1600, 900),
		releaseDate: "2027-01-15",
		status: "upcoming",
		genreIds: ["fantasy", "drama", "romance"],
		rating: 0,
		ratingCount: 0,
		popularity: 68.9,
		cast: [{ personId: "p-florence-pugh", characterName: "Princess Sable" }],
		crew: [],
		similarIds: ["tv-glass-city"],
		galleryPaths: [unsplash("photo-1520483601560-389dff434fdf", 1200, 675)],
		networks: ["Aurora Original"],
		countryOfOrigin: "UK",
		originalLanguage: "English",
		seasons: [],
	},
]

export function getTvShowById(id: string): MediaItem | undefined {
	return tvShows.find((show) => show.id === id)
}
