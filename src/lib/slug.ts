export function slugify(input: string): string {
	return input
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/&/g, " and ")
		.replace(/['’]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
}

export function createSlugger() {
	const used = new Set<string>()

	return (name: string, ...fallbacks: (string | number | undefined)[]) => {
		const base = slugify(name) || "item"
		const candidates = [
			base,
			...fallbacks
				.filter((f) => f !== undefined && f !== "")
				.map((f) => `${base}-${slugify(String(f))}`),
		]

		for (const candidate of candidates) {
			if (!used.has(candidate)) {
				used.add(candidate)
				return candidate
			}
		}

		let counter = 2
		while (used.has(`${base}-${counter}`)) counter++
		const slug = `${base}-${counter}`
		used.add(slug)
		return slug
	}
}
