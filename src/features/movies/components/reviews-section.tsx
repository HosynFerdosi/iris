"use client"

import { PencilEdit01Icon, StarIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { EmptyState } from "@/components/shared/empty-state"
import { SectionHeader } from "@/components/shared/section-header"
import { Button } from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import type { Media, RatingBreakdown, Review } from "@/lib/types/media"
import { RatingBreakdownChart } from "./rating-breakdown-chart"
import { ReviewCard } from "./review-card"

type ReviewsSectionProps = {
	item: Media
	reviews: Review[]
}

const breakdown: RatingBreakdown[] = [
	{
		score: 10,
		percentage: 1,
	},
	{
		score: 9,
		percentage: 2,
	},
	{
		score: 8,
		percentage: 0.5,
	},
	{
		score: 7,
		percentage: 4,
	},
	{
		score: 6,
		percentage: 6.5,
	},
	{
		score: 5,
		percentage: 3.5,
	},
	{
		score: 4,
		percentage: 1,
	},
	{
		score: 3,
		percentage: 4,
	},
	{
		score: 2,
		percentage: 2,
	},
	{
		score: 1,
		percentage: 1,
	},
].reverse()

export function ReviewsSection({ item, reviews }: ReviewsSectionProps) {
	return (
		<section>
			<SectionHeader
				className="mb-5"
				description={`${item.ratingCount.toLocaleString()} people have rated this title`}
				title="Ratings & reviews"
			/>

			<RatingBreakdownChart
				average={item.rating}
				breakdown={breakdown}
				count={item.ratingCount}
			/>

			<div className="mt-6 flex flex-wrap items-center justify-between gap-3">
				<Select value="Newest">
					<SelectTrigger className="w-44">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="p-2">
						<SelectItem value="newest">Newest</SelectItem>
						<SelectItem value="most-liked">Most liked</SelectItem>
						<SelectItem value="highest-rated">Highest rated</SelectItem>
					</SelectContent>
				</Select>
				<Button>
					<HugeiconsIcon icon={PencilEdit01Icon} size={16} />
					Write a review
				</Button>
			</div>

			<div className="mt-5 space-y-4">
				{reviews.length === 0 ? (
					<EmptyState
						actionLabel="Write a review"
						description="Be the first to share your thoughts on this title."
						icon={StarIcon}
						onAction={() => {}}
						title="No reviews yet"
					/>
				) : (
					reviews.map((review) => (
						<ReviewCard key={review.id} review={review} />
					))
				)}
			</div>

			{/* <Dialog onOpenChange={setWriteOpen} open={writeOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Write a review</DialogTitle>
					</DialogHeader>
					<div className="space-y-4">
						<div>
							<label className="mb-2 block text-sm font-medium text-foreground">
								Your rating
							</label>
							<div className="flex items-center gap-1">
								{Array.from({ length: 10 }, (_, i) => i + 1).map(
									(score) => (
										<button
											aria-label={`Rate ${score} out of 10`}
											className="p-0.5"
											key={score}
											onClick={() => setDraftRating(score)}
											type="button"
										>
											<HugeiconsIcon
												className={
													score <= draftRating
														? "fill-primary text-primary"
														: "text-border"
												}
												icon={StarIcon}
												size={20}
											/>
										</button>
									)
								)}
								<span className="ml-2 text-sm font-medium text-foreground">
									{draftRating}/10
								</span>
							</div>
						</div>
						<Input
							onChange={(e) => setDraftTitle(e.target.value)}
							placeholder="Review title"
							value={draftTitle}
						/>
						<Textarea
							className="min-h-28"
							onChange={(e) => setDraftBody(e.target.value)}
							placeholder="Share your thoughts..."
							value={draftBody}
						/>
					</div>
					<DialogFooter>
						<Button onClick={() => setWriteOpen(false)} variant="ghost">
							Cancel
						</Button>
						<Button onClick={handleSubmitReview} variant="gold">
							Post review
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog> */}
		</section>
	)
}
