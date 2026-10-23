"use server"

import { cacheLife, cacheTag } from "next/cache"
import type { MediaGetPayload } from "@/generated/prisma/models"
import { prisma } from "@/lib/prisma"

export type TVShow = MediaGetPayload<{
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
		seasons: {
			include: {
				episodes: true
			}
		}
	}
}>

export const fetchTvShows = async () => {
	"use cache"

	cacheTag("tv-shows")
	cacheLife("hours")

	return prisma.media.findMany({
		where: {
			type: "tv",
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
			lastAirDate: "desc",
		},
	})
}

export const findTvShow = async (slug: string) => {
	return prisma.media.findFirst({
		where: { slug, type: "tv" },
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
			seasons: {
				include: {
					episodes: true,
				},
			},
		},
	})
}
