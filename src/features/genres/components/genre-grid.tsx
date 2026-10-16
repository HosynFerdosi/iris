import { fetchGenres } from "../server/db/genres.db"
import GenreItem from "./genre-item"

export async function GenreGrid() {
	const genres = await fetchGenres()

	return (
		<div className="mx-auto mt-10 grid max-w-[1600px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
			{genres.map((genre, index) => (
				<GenreItem genre={genre} index={index} key={index.toString()} />
			))}
		</div>
	)
}
