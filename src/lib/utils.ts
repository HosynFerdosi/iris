export { cn } from "cn"

export const wait = async (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
