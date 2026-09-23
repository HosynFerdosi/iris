import type { Genre } from "@/lib/types/media"

function unsplash(id: string): string {
	return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=780&h=440&q=80`
}

export const genres: Genre[] = [
	{
		id: "action",
		name: "Action",
		description: "High-stakes stunts, chases, and confrontations.",
		backdropPath: unsplash("photo-1517602302552-471fe67acf66"),
	},
	{
		id: "sci-fi",
		name: "Science Fiction",
		description: "Speculative futures, technology, and the unknown.",
		backdropPath: unsplash("photo-1451187580459-43490279c0fa"),
	},
	{
		id: "drama",
		name: "Drama",
		description: "Character-driven stories of consequence.",
		backdropPath: unsplash("photo-1500964757637-c85e8a162699"),
	},
	{
		id: "thriller",
		name: "Thriller",
		description: "Tension, suspense, and the edge of your seat.",
		backdropPath: unsplash("photo-1478760329108-5c3ed9d495a0"),
	},
	{
		id: "comedy",
		name: "Comedy",
		description: "Sharp writing built to make you laugh.",
		backdropPath: unsplash("photo-1541278107931-e006523892df"),
	},
	{
		id: "crime",
		name: "Crime",
		description: "Heists, investigations, and moral grey areas.",
		backdropPath: unsplash("photo-1449824913935-59a10b8d2000"),
	},
	{
		id: "fantasy",
		name: "Fantasy",
		description: "Myth, magic, and worlds beyond our own.",
		backdropPath: unsplash("photo-1518709268805-4e9042af2176"),
	},
	{
		id: "horror",
		name: "Horror",
		description: "Dread, tension, and the things in the dark.",
		backdropPath: unsplash("photo-1446776653964-20c1d3a81b06"),
	},
	{
		id: "animation",
		name: "Animation",
		description: "Craft and imagination frame by frame.",
		backdropPath: unsplash("photo-1536440136628-849c177e76a1"),
	},
	{
		id: "mystery",
		name: "Mystery",
		description: "Puzzles, clues, and questions worth answering.",
		backdropPath: unsplash("photo-1517976487492-5750f3195933"),
	},
	{
		id: "romance",
		name: "Romance",
		description: "Connection, longing, and the space between two people.",
		backdropPath: unsplash("photo-1470770903676-69b98201ea1c"),
	},
	{
		id: "documentary",
		name: "Documentary",
		description: "Real stories told with cinematic craft.",
		backdropPath: unsplash("photo-1504711434969-e33886168f5c"),
	},
	{
		id: "family",
		name: "Family",
		description: "Stories built for every generation in the room.",
		backdropPath: unsplash("photo-1551524559-8af4e6624178"),
	},
	{
		id: "history",
		name: "History",
		description: "Turning points, retold with weight and detail.",
		backdropPath: unsplash("photo-1533622597524-a1215e26c0a0"),
	},
	{
		id: "adventure",
		name: "Adventure",
		description: "Journeys across distance, danger, and discovery.",
		backdropPath: unsplash("photo-1519681393784-d120267933ba"),
	},
]

export function getGenreById(id: string): Genre | undefined {
	return genres.find((genre) => genre.id === id)
}
