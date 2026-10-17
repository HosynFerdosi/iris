import type { MediaGetPayload } from "@/generated/prisma/models"

export type Media = MediaGetPayload<{
	include: {
		genres: {
			include: {
				genre: true
			}
		}
	}
}>
