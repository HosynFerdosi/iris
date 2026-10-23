import "server-only"

import { cacheLife, cacheTag } from "next/cache"
import { prisma } from "@/lib/prisma"

const ACTIVE_STATUSES = ["released", "returning", "ended"] as const

const mediaInclude = {
	genres: {
		include: {
			genre: true,
		},
	},
} as const

export const fetchTrendMedia = async () => {
	"use cache"

	cacheTag("movies", "tv-shows", "trends")
	cacheLife("hours")

	return prisma.media.findMany({
		include: mediaInclude,
		where: {
			status: { in: [...ACTIVE_STATUSES] },
		},
		orderBy: {
			rating: "desc",
		},
		take: 16,
	})
}

export const fetchMediaByGenre = async (genre: string) => {
	"use cache"

	cacheTag("movies", "tv-shows", `genre:${genre}`)
	cacheLife("hours")

	return prisma.media.findMany({
		include: mediaInclude,
		where: {
			genres: {
				some: {
					genre: {
						name: { contains: genre },
					},
				},
			},
			status: { in: [...ACTIVE_STATUSES] },
		},
		take: 16,
	})
}

export const fetchReturningSeries = async () => {
	"use cache"

	cacheTag("tv-shows", "returning")
	cacheLife("hours")

	return prisma.media.findMany({
		include: mediaInclude,
		where: {
			status: { equals: "returning" },
		},
		take: 16,
	})
}

export const fetchPopularMedia = async () => {
	"use cache"

	cacheTag("movies", "tv-shows", "populars")
	cacheLife("hours")

	return prisma.media.findMany({
		include: mediaInclude,
		where: {
			status: { in: [...ACTIVE_STATUSES] },
		},
		orderBy: {
			popularity: "desc",
		},
		take: 16,
	})
}

export const fetchUpcomingMedia = async () => {
	"use cache"

	cacheTag("movies", "tv-shows", "upcoming")
	cacheLife("hours")

	return prisma.media.findMany({
		include: mediaInclude,
		where: {
			status: { equals: "upcoming" },
		},
		take: 6,
	})
}
