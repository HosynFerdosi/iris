import type { Person } from "@/lib/types/media"

export const people: Person[] = [
	{
		id: "p-cillian-murphy",
		name: "Cillian Murphy",
		profilePath:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&h=500&q=80",
		knownFor: "Acting",
		birthYear: 1976,
		birthplace: "Douglas, Cork, Ireland",
		biography:
			"Cillian Murphy is an Irish actor known for his precise, internalized performances across independent film and studio blockbusters. He first drew wide attention for his work with director Danny Boyle before becoming a frequent collaborator of Christopher Nolan.",
		filmographyIds: ["m-quantum-horizon", "m-last-signal"],
	},
	{
		id: "p-florence-pugh",
		name: "Florence Pugh",
		profilePath:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&h=500&q=80",
		knownFor: "Acting",
		birthYear: 1996,
		birthplace: "Oxford, England, UK",
		biography:
			"Florence Pugh is an English actor recognized for her emotionally direct performances across period drama, horror, and blockbuster franchises, earning widespread critical acclaim early in her career.",
		filmographyIds: [
			"m-quantum-horizon",
			"m-glass-orchard",
			"tv-northern-embers",
		],
	},
	{
		id: "p-idris-elba",
		name: "Idris Elba",
		profilePath:
			"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&h=500&q=80",
		knownFor: "Acting",
		birthYear: 1972,
		birthplace: "Hackney, London, England, UK",
		biography:
			"Idris Elba is a British actor, producer, and musician with a career spanning prestige television, action cinema, and voice work. He is known for commanding screen presence and genre versatility.",
		filmographyIds: ["m-last-signal", "tv-northern-embers"],
	},
	{
		id: "p-zendaya",
		name: "Zendaya",
		profilePath:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&h=500&q=80",
		knownFor: "Acting",
		birthYear: 1996,
		birthplace: "Oakland, California, USA",
		biography:
			"Zendaya is an American actor and producer who transitioned from television to leading film roles, known for collaborating on ambitious visual worlds and for her work in prestige drama.",
		filmographyIds: ["m-glass-orchard", "tv-glass-city"],
	},
	{
		id: "p-oscar-isaac",
		name: "Oscar Isaac",
		profilePath:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&h=500&q=80",
		knownFor: "Acting",
		birthYear: 1979,
		birthplace: "Guatemala City, Guatemala",
		biography:
			"Oscar Isaac is a Guatemalan-American actor known for his range across independent drama, science fiction epics, and character-driven television.",
		filmographyIds: ["m-quantum-horizon", "tv-glass-city"],
	},
	{
		id: "p-lupita-nyongo",
		name: "Lupita Nyong'o",
		profilePath:
			"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=500&h=500&q=80",
		knownFor: "Acting",
		birthYear: 1983,
		birthplace: "Mexico City, Mexico",
		biography:
			"Lupita Nyong'o is a Kenyan-Mexican actor celebrated for her physically committed performances and work spanning horror, historical drama, and blockbuster ensembles.",
		filmographyIds: ["m-glass-orchard", "m-last-signal"],
	},
	{
		id: "p-denis-villeneuve",
		name: "Denis Villeneuve",
		profilePath:
			"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&h=500&q=80",
		knownFor: "Directing",
		birthYear: 1967,
		birthplace: "Bécancour, Quebec, Canada",
		biography:
			"Denis Villeneuve is a Canadian filmmaker known for atmospheric, large-scale science fiction and tightly constructed thrillers, with a distinctive visual and sonic style.",
		filmographyIds: ["m-quantum-horizon"],
	},
	{
		id: "p-greta-gerwig",
		name: "Greta Gerwig",
		profilePath:
			"https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&w=500&h=500&q=80",
		knownFor: "Directing",
		birthYear: 1983,
		birthplace: "Sacramento, California, USA",
		biography:
			"Greta Gerwig is an American filmmaker whose work blends sharp character comedy with formal ambition, moving from acclaimed independent film to major studio productions.",
		filmographyIds: ["m-glass-orchard"],
	},
	{
		id: "p-hans-zimmer",
		name: "Hans Zimmer",
		profilePath:
			"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&h=500&q=80",
		knownFor: "Production",
		birthYear: 1957,
		birthplace: "Frankfurt, West Germany",
		biography:
			"Hans Zimmer is a German composer whose scores define the sound of modern blockbuster cinema, known for immersive, texturally rich compositions.",
		filmographyIds: ["m-quantum-horizon", "m-last-signal"],
	},
]

export function getPersonById(id: string): Person | undefined {
	return people.find((person) => person.id === id)
}
