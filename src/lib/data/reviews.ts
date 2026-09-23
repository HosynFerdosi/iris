import type { Review } from "@/lib/types/media"

export const reviews: Review[] = [
	{
		id: "rev-1",
		mediaId: "m-quantum-horizon",
		userId: "u-current",
		userName: "You",
		userAvatarPath: "",
		rating: 9,
		title: "Genuinely stayed with me for days",
		body: "The sound design alone deserves an award. It's rare for a science fiction film to be this patient with silence and still feel tense the whole way through. The final act recontextualizes almost everything that came before it.",
		createdAt: "2026-03-20",
		likeCount: 142,
		isCurrentUser: true,
		replies: [
			{
				id: "rev-1-reply-1",
				userId: "u-marta",
				userName: "Marta Oyelaran",
				userAvatarPath:
					"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
				body: "Completely agree — the sound mixing during the descent sequence was incredible on a good pair of headphones.",
				createdAt: "2026-03-21",
				likeCount: 12,
			},
		],
	},
	{
		id: "rev-2",
		mediaId: "m-quantum-horizon",
		userId: "u-devon",
		userName: "Devon Marsh",
		userAvatarPath:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
		rating: 7,
		title: "Beautiful but a little cold",
		body: "Visually one of the best films this year, and the central performance carries a lot of the emotional weight the script doesn't quite provide. Worth watching on the biggest screen you can find.",
		createdAt: "2026-03-18",
		likeCount: 58,
		replies: [],
	},
	{
		id: "rev-3",
		mediaId: "m-quantum-horizon",
		userId: "u-priya",
		userName: "Priya Nataraj",
		userAvatarPath:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
		rating: 10,
		title: "The best of the director's career",
		body: "I've watched it twice now and caught new details both times. This is the kind of film that rewards close attention — nothing on screen is accidental.",
		createdAt: "2026-03-15",
		likeCount: 201,
		replies: [
			{
				id: "rev-3-reply-1",
				userId: "u-devon",
				userName: "Devon Marsh",
				userAvatarPath:
					"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
				body: "Curious what you caught on the second watch — I only saw it once.",
				createdAt: "2026-03-16",
				likeCount: 4,
			},
		],
	},
	{
		id: "rev-4",
		mediaId: "tv-glass-city",
		userId: "u-noor",
		userName: "Noor Adeyemi",
		userAvatarPath:
			"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
		rating: 9,
		title: "Best new crime drama in years",
		body: "The writing trusts its audience. Every episode adds a piece to the larger puzzle without ever feeling like filler, and the two leads have real chemistry as reluctant allies.",
		createdAt: "2025-05-02",
		likeCount: 89,
		replies: [],
	},
]

export function getReviewsByMediaId(mediaId: string): Review[] {
	return reviews.filter((review) => review.mediaId === mediaId)
}
