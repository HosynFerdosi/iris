"use server"

import { cacheLife, cacheTag } from "next/cache"
import { prisma } from "@/lib/prisma"

export const fetchTvShows = async () => {
	"use cache"

	cacheTag("movies")
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
