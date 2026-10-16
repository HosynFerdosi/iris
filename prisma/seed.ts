import { randomUUID } from "node:crypto"
import { genres } from "@/lib/data/genres"
import { movies } from "@/lib/data/movies"
import { people } from "@/lib/data/people"
import { reviews } from "@/lib/data/reviews"
import { tvShows } from "@/lib/data/tv"
import { prisma } from "@/lib/prisma"
import { createSlugger } from "@/lib/slug"

const CHUNK_SIZE = 500

async function insertInChunks<T>(
	rows: T[],
	insert: (chunk: T[]) => Promise<unknown>
) {
	for (let i = 0; i < rows.length; i += CHUNK_SIZE) {
		await insert(rows.slice(i, i + CHUNK_SIZE))
	}
}

function buildIdMap(oldIds: Iterable<string>) {
	const map = new Map<string, string>()
	for (const oldId of oldIds) {
		if (!map.has(oldId)) map.set(oldId, randomUUID())
	}
	return map
}

// خواندن امن از Map؛ اگه کلید نبود با پیام واضح خطا میده
function ref(map: Map<string, string>, key: string, label: string): string {
	const value = map.get(key)
	if (!value) throw new Error(`Missing ${label} for "${key}"`)
	return value
}

async function clearDatabase() {
	await prisma.reviewReply.deleteMany()
	await prisma.review.deleteMany()
	await prisma.user.deleteMany()
	await prisma.episode.deleteMany()
	await prisma.season.deleteMany()
	await prisma.castCredit.deleteMany()
	await prisma.crewCredit.deleteMany()
	await prisma.mediaSimilar.deleteMany()
	await prisma.mediaGenre.deleteMany()
	await prisma.mediaGalleryImage.deleteMany()
	await prisma.mediaNetwork.deleteMany()
	await prisma.media.deleteMany()
	await prisma.person.deleteMany()
	await prisma.genre.deleteMany()
}

async function main() {
	console.log("🧹 Clearing database...")
	await clearDatabase()

	const allMedia = [...movies, ...tvShows]
	const allSeasons = tvShows.flatMap((t) =>
		t.seasons.map((s) => ({ ...s, mediaOldId: t.id }))
	)
	const allEpisodes = allSeasons.flatMap((s) =>
		s.episodes.map((e) => ({ ...e, seasonOldId: s.id }))
	)

	// ───────────── UUID maps ─────────────
	const genreIdMap = buildIdMap(genres.map((g) => g.id))
	const personIdMap = buildIdMap(people.map((p) => p.id))
	const mediaIdMap = buildIdMap(allMedia.map((m) => m.id))
	const seasonIdMap = buildIdMap(allSeasons.map((s) => s.id))
	const episodeIdMap = buildIdMap(allEpisodes.map((e) => e.id))
	const userIdMap = buildIdMap(
		reviews.flatMap((r) => [r.userId, ...r.replies.map((x) => x.userId)])
	)
	const reviewIdMap = buildIdMap(reviews.map((r) => r.id))
	const replyIdMap = buildIdMap(
		reviews.flatMap((r) => r.replies.map((x) => x.id))
	)

	const genreId = (old: string) => ref(genreIdMap, old, "genre id")
	const personId = (old: string) => ref(personIdMap, old, "person id")
	const mediaId = (old: string) => ref(mediaIdMap, old, "media id")
	const seasonId = (old: string) => ref(seasonIdMap, old, "season id")
	const episodeId = (old: string) => ref(episodeIdMap, old, "episode id")
	const userId = (old: string) => ref(userIdMap, old, "user id")
	const reviewId = (old: string) => ref(reviewIdMap, old, "review id")
	const replyId = (old: string) => ref(replyIdMap, old, "reply id")

	// ───────────── Slugs ─────────────
	const genreSlugger = createSlugger()
	const personSlugger = createSlugger()
	const movieSlugger = createSlugger()
	const tvSlugger = createSlugger()

	// ژانر: از name
	const genreSlugs = new Map(genres.map((g) => [g.id, genreSlugger(g.name)]))

	// شخص: از name (اگه تکراری بود با سال تولد)
	const personSlugs = new Map(
		people.map((p) => [p.id, personSlugger(p.name, p.birthYear)])
	)

	// فیلم و سریال: از title (اگه تکراری بود با سال)
	const mediaSlugs = new Map<string, string>([
		...movies.map(
			(m) =>
				[
					m.id,
					movieSlugger(m.title, new Date(m.releaseDate).getFullYear()),
				] as const
		),
		...tvShows.map(
			(t) =>
				[
					t.id,
					tvSlugger(t.title, new Date(t.firstAirDate).getFullYear()),
				] as const
		),
	])

	// ───────────── Genres ─────────────
	console.log("🎭 Seeding genres...")
	await insertInChunks(genres, (data) =>
		prisma.genre.createMany({
			data: data.map((g) => ({
				id: genreId(g.id),
				slug: ref(genreSlugs, g.id, "genre slug"),
				name: g.name,
				description: g.description,
				backdropPath: g.backdropPath,
			})),
		})
	)

	// ───────────── People ─────────────
	console.log("🧑‍🎤 Seeding people...")
	await insertInChunks(people, (data) =>
		prisma.person.createMany({
			data: data.map((p) => ({
				id: personId(p.id),
				slug: ref(personSlugs, p.id, "person slug"),
				name: p.name,
				profilePath: p.profilePath,
				knownFor: p.knownFor,
				birthYear: p.birthYear,
				birthplace: p.birthplace,
				biography: p.biography,
			})),
		})
	)

	// ───────────── Media (movies + tv) ─────────────
	console.log("🎬 Seeding media...")
	const baseMedia = (
		m: (typeof movies)[number] | (typeof tvShows)[number]
	) => ({
		id: mediaId(m.id),
		slug: ref(mediaSlugs, m.id, "media slug"),
		type: m.type,
		title: m.title,
		tagline: m.tagline ?? null,
		overview: m.overview,
		posterPath: m.posterPath,
		backdropPath: m.backdropPath,
		status: m.status,
		rating: m.rating,
		ratingCount: m.ratingCount,
		popularity: m.popularity,
		trailerTitle: m.trailerTitle ?? null,
		countryOfOrigin: m.countryOfOrigin,
		originalLanguage: m.originalLanguage,
	})

	await insertInChunks(movies, (data) =>
		prisma.media.createMany({
			data: data.map((m) => ({
				...baseMedia(m),
				releaseDate: new Date(m.releaseDate),
				runtimeMinutes: m.runtimeMinutes,
			})),
		})
	)

	await insertInChunks(tvShows, (data) =>
		prisma.media.createMany({
			data: data.map((t) => ({
				...baseMedia(t),
				firstAirDate: new Date(t.firstAirDate),
				lastAirDate: t.lastAirDate ? new Date(t.lastAirDate) : null,
			})),
		})
	)

	// ───────────── Media ↔ Genre ─────────────
	console.log("🔗 Linking genres...")
	const mediaGenres = new Map<string, { mediaId: string; genreId: string }>()
	for (const m of allMedia) {
		for (const oldGenreId of m.genreIds) {
			if (!genreIdMap.has(oldGenreId)) continue
			const link = {
				mediaId: mediaId(m.id),
				genreId: genreId(oldGenreId),
			}
			mediaGenres.set(`${link.mediaId}:${link.genreId}`, link)
		}
	}
	await insertInChunks([...mediaGenres.values()], (data) =>
		prisma.mediaGenre.createMany({ data })
	)

	// ───────────── Similar ─────────────
	console.log("🔗 Linking similar media...")
	const similar = new Map<string, { mediaId: string; similarId: string }>()
	for (const m of allMedia) {
		for (const oldSimilarId of m.similarIds) {
			if (!mediaIdMap.has(oldSimilarId) || oldSimilarId === m.id) continue
			const link = {
				mediaId: mediaId(m.id),
				similarId: mediaId(oldSimilarId),
			}
			similar.set(`${link.mediaId}:${link.similarId}`, link)
		}
	}
	await insertInChunks([...similar.values()], (data) =>
		prisma.mediaSimilar.createMany({ data })
	)

	// ───────────── Gallery & Networks ─────────────
	console.log("🖼️ Seeding gallery & networks...")
	await insertInChunks(
		allMedia.flatMap((m) =>
			m.galleryPaths.map((path, position) => ({
				id: randomUUID(),
				mediaId: mediaId(m.id),
				path,
				position,
			}))
		),
		(data) => prisma.mediaGalleryImage.createMany({ data })
	)

	await insertInChunks(
		tvShows.flatMap((t) =>
			t.networks.map((name) => ({
				id: randomUUID(),
				mediaId: mediaId(t.id),
				name,
			}))
		),
		(data) => prisma.mediaNetwork.createMany({ data })
	)

	// ───────────── Cast & Crew ─────────────
	console.log("👥 Seeding cast & crew...")
	await insertInChunks(
		allMedia.flatMap((m) =>
			m.cast
				.filter((c) => personIdMap.has(c.personId))
				.map((c) => ({
					id: randomUUID(),
					mediaId: mediaId(m.id),
					personId: personId(c.personId),
					characterName: c.characterName,
				}))
		),
		(data) => prisma.castCredit.createMany({ data })
	)

	await insertInChunks(
		allMedia.flatMap((m) =>
			m.crew
				.filter((c) => personIdMap.has(c.personId))
				.map((c) => ({
					id: randomUUID(),
					mediaId: mediaId(m.id),
					personId: personId(c.personId),
					job: c.job,
				}))
		),
		(data) => prisma.crewCredit.createMany({ data })
	)

	// ───────────── Seasons & Episodes ─────────────
	console.log("📺 Seeding seasons & episodes...")
	await insertInChunks(allSeasons, (data) =>
		prisma.season.createMany({
			data: data.map((s) => ({
				id: seasonId(s.id),
				mediaId: mediaId(s.mediaOldId),
				seasonNumber: s.seasonNumber,
				name: s.name,
				episodeCount: s.episodeCount,
				airYear: s.airYear,
				overview: s.overview,
				posterPath: s.posterPath,
			})),
		})
	)

	await insertInChunks(allEpisodes, (data) =>
		prisma.episode.createMany({
			data: data.map((e) => ({
				id: episodeId(e.id),
				seasonId: seasonId(e.seasonOldId),
				episodeNumber: e.episodeNumber,
				name: e.name,
				overview: e.overview,
				runtimeMinutes: e.runtimeMinutes,
				airDate: new Date(e.airDate),
				stillPath: e.stillPath,
				rating: e.rating,
			})),
		})
	)

	// ───────────── Users (reviews & replies) ─────────────
	console.log("🙋 Seeding users...")
	const users = new Map<
		string,
		{ id: string; name: string; avatarPath: string }
	>()
	for (const r of reviews) {
		if (!users.has(r.userId)) {
			users.set(r.userId, {
				id: userId(r.userId),
				name: r.userName,
				avatarPath: r.userAvatarPath,
			})
		}
		for (const reply of r.replies) {
			if (!users.has(reply.userId)) {
				users.set(reply.userId, {
					id: userId(reply.userId),
					name: reply.userName,
					avatarPath: reply.userAvatarPath,
				})
			}
		}
	}
	await insertInChunks([...users.values()], (data) =>
		prisma.user.createMany({ data })
	)

	// ───────────── Reviews & Replies ─────────────
	console.log("💬 Seeding reviews & replies...")
	const validReviews = reviews.filter((r) => mediaIdMap.has(r.mediaId))

	await insertInChunks(validReviews, (data) =>
		prisma.review.createMany({
			data: data.map((r) => ({
				id: reviewId(r.id),
				mediaId: mediaId(r.mediaId),
				userId: userId(r.userId),
				rating: r.rating,
				title: r.title,
				body: r.body,
				likeCount: r.likeCount,
				createdAt: new Date(r.createdAt),
			})),
		})
	)

	await insertInChunks(
		validReviews.flatMap((r) =>
			r.replies.map((reply) => ({
				id: replyId(reply.id),
				reviewId: reviewId(r.id),
				userId: userId(reply.userId),
				body: reply.body,
				likeCount: reply.likeCount,
				createdAt: new Date(reply.createdAt),
			}))
		),
		(data) => prisma.reviewReply.createMany({ data })
	)

	console.log("✅ Seed completed")
	console.log({
		genres: await prisma.genre.count(),
		people: await prisma.person.count(),
		media: await prisma.media.count(),
		seasons: await prisma.season.count(),
		episodes: await prisma.episode.count(),
		users: await prisma.user.count(),
		reviews: await prisma.review.count(),
		replies: await prisma.reviewReply.count(),
	})
}

main()
	.catch((error) => {
		console.error("❌ Seed failed:", error)
		process.exitCode = 1
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
