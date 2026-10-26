import "server-only"

import { cacheLife, cacheTag } from "next/cache"
import { prisma } from "@/lib/prisma"

const ACTIVE_STATUSES = ["released", "returning", "ended"]

const MEDIA_INCLUDE = {
	genres: {
		include: {
			genre: true,
		},
	},
} as const

export const fetchLatestMovies = async () => {
	"use cache"

	cacheTag("movies", "tv-shows", "latest")
	cacheLife("hours")

	return prisma.media.findMany({
		where: {
			type: "movie",
			status: {
				in: ACTIVE_STATUSES,
			},
		},
		orderBy: { releaseDate: "desc" },
		include: MEDIA_INCLUDE,
	})
}
