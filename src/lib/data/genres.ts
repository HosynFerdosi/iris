import type { Genre } from "@/lib/types/medias"

export const genres: Genre[] = [
	{
		id: "action",
		name: "Action",
		description: "High-stakes stunts, chases, and confrontations.",
		backdropPath: "/images/genres/action.jpg",
	},
	{
		id: "sci-fi",
		name: "Science Fiction",
		description: "Speculative futures, technology, and the unknown.",
		backdropPath: "/images/genres/sci-fi.jpg",
	},
	{
		id: "drama",
		name: "Drama",
		description: "Character-driven stories of consequence.",
		backdropPath: "/images/genres/drama.jpg",
	},
	{
		id: "thriller",
		name: "Thriller",
		description: "Tension, suspense, and the edge of your seat.",
		backdropPath: "/images/genres/thriller.jpg",
	},
	{
		id: "comedy",
		name: "Comedy",
		description: "Sharp writing built to make you laugh.",
		backdropPath: "/images/genres/comedy.jpg",
	},
	{
		id: "crime",
		name: "Crime",
		description: "Heists, investigations, and moral grey areas.",
		backdropPath: "/images/genres/crime.jpg",
	},
	{
		id: "fantasy",
		name: "Fantasy",
		description: "Myth, magic, and worlds beyond our own.",
		backdropPath: "/images/genres/fantasy.jpg",
	},
	{
		id: "horror",
		name: "Horror",
		description: "Dread, tension, and the things in the dark.",
		backdropPath: "/images/genres/horror.jpg",
	},
	{
		id: "animation",
		name: "Animation",
		description: "Craft and imagination frame by frame.",
		backdropPath: "/images/genres/animation.jpg",
	},
	{
		id: "mystery",
		name: "Mystery",
		description: "Puzzles, clues, and questions worth answering.",
		backdropPath: "/images/genres/mystery.jpg",
	},
	{
		id: "romance",
		name: "Romance",
		description: "Connection, longing, and the space between two people.",
		backdropPath: "/images/genres/romance.jpg",
	},
	{
		id: "documentary",
		name: "Documentary",
		description: "Real stories told with cinematic craft.",
		backdropPath: "/images/genres/documentary.jpg",
	},
	{
		id: "family",
		name: "Family",
		description: "Stories built for every generation in the room.",
		backdropPath: "/images/genres/family.jpg",
	},
	{
		id: "history",
		name: "History",
		description: "Turning points, retold with weight and detail.",
		backdropPath: "/images/genres/history.jpg",
	},
	{
		id: "adventure",
		name: "Adventure",
		description: "Journeys across distance, danger, and discovery.",
		backdropPath: "/images/genres/adventure.jpg",
	},
]

export function getGenreById(id: string): Genre | undefined {
	return genres.find((genre) => genre.id === id)
}
