"use server"

import { cacheLife, cacheTag } from "next/cache"
import type { MediaGetPayload } from "@/generated/prisma/models"
import { prisma } from "@/lib/prisma"

export type Movie = MediaGetPayload<{
	include: {
		genres: {
			include: {
				genre: true
			}
		}
	}
}>

export const fetchMovies = async () => {
	"use cache"

	cacheTag("movies")
	cacheLife("hours")

	return prisma.media.findMany({
		where: {
			type: "movie",
			status: { not: "upcoming" },
		},
		include: {
			genres: {
				include: {
					genre: true,
				},
			},
		},
		orderBy: {
			releaseDate: "desc",
		},
	})
}
