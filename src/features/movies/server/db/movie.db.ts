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

export type MovieDetails = MediaGetPayload<{
	include: {
		genres: {
			include: {
				genre: true
			}
		}
		cast: {
			include: {
				person: true
			}
		}
		crew: {
			include: {
				person: true
			}
		}
		gallery: true
		networks: true
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

export const findMovie = async (slug: string) => {
	return prisma.media.findFirst({
		where: { slug },
		include: {
			genres: {
				include: {
					genre: true,
				},
			},
			cast: {
				include: {
					person: true,
				},
			},
			crew: {
				include: {
					person: true,
				},
			},
			gallery: true,
			networks: true,
		},
	})
}
