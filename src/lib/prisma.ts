import "dotenv/config"
import { PrismaLibSql } from "@prisma/adapter-libsql"	
import { PrismaClient } from "@/generated/prisma/client"

declare global {
	var __prisma__: undefined | PrismaClient
}

const adapter = new PrismaLibSql({
	url: process.env.DATABASE_URL as string,
})

const prismaSingleton = () => new PrismaClient({ adapter })

const prisma = globalThis.__prisma__ ?? prismaSingleton()

if (process.env.NODE_ENV !== "production") globalThis.__prisma__ = prisma

export { prisma }
