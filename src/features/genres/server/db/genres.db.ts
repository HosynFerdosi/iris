"use server"

import { cacheLife, cacheTag } from "next/cache"
import { prisma } from "@/lib/prisma"

export const fetchGenres = async () => {
	"use cache"

	cacheTag("generes")
	cacheLife("weeks")

	return prisma.genre.findMany({
		orderBy: { name: "asc" },
	})
}
