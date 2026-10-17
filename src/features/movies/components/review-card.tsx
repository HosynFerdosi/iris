"use client"

import {
	Delete02Icon,
	Edit02Icon,
	ReplyIcon,
	StarIcon,
	ThumbsUpIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import { toast } from "sonner"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import type { Review } from "@/lib/types/medias"
import { cn } from "@/lib/utils"

function timeAgo(dateString: string): string {
	const diffDays = Math.floor(
		(Date.now() - new Date(dateString).getTime()) / (1000 * 60 * 60 * 24)
	)
	if (diffDays <= 0) return "Today"
	if (diffDays === 1) return "Yesterday"
	if (diffDays < 30) return `${diffDays}d ago`
	const months = Math.floor(diffDays / 30)
	return `${months} mo ago`
}

function initials(name: string): string {
	return name
		.split(" ")
		.map((part) => part[0])
		.slice(0, 2)
		.join("")
		.toUpperCase()
}

interface ReviewCardProps {
	review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
	const [liked, setLiked] = useState(false)
	const [likeCount, setLikeCount] = useState(review.likeCount)
	const [replyOpen, setReplyOpen] = useState(false)
	const [replyText, setReplyText] = useState("")

	const handleLike = () => {
		setLiked((prev) => !prev)
		setLikeCount((prev) => (liked ? prev - 1 : prev + 1))
	}

	const handleReplySubmit = () => {
		if (!replyText.trim()) return
		toast.success("Reply added")
		setReplyText("")
		setReplyOpen(false)
	}

	return (
		<div className="rounded-xl border border-border bg-card p-4 sm:p-5">
			<div className="flex items-start gap-3">
				<Avatar>
					<AvatarImage alt={review.userName} src={review.userAvatarPath} />
					<AvatarFallback>{initials(review.userName)}</AvatarFallback>
				</Avatar>
				<div className="min-w-0 flex-1">
					<div className="flex flex-wrap items-center gap-2">
						<span className="font-medium text-foreground">
							{review.userName}
						</span>
						{review.isCurrentUser && <Badge>Your review</Badge>}
						<span className="text-xs text-muted-foreground">
							{timeAgo(review.createdAt)}
						</span>
					</div>
					<div className="mt-1 flex items-center gap-1.5">
						<HugeiconsIcon
							className="fill-orange-400 text-orange-400"
							icon={StarIcon}
							size={13}
						/>
						<span className="text-sm font-semibold text-foreground">
							{review.rating}/10
						</span>
					</div>
					<h4 className="mt-2 font-medium text-foreground">
						{review.title}
					</h4>
					<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
						{review.body}
					</p>

					<div className="mt-3 flex items-center gap-4">
						<button
							className={cn(
								"flex items-center gap-1.5 text-xs font-medium transition-colors",
								liked
									? "text-orange-400"
									: "text-muted-foreground hover:text-foreground"
							)}
							onClick={handleLike}
							type="button"
						>
							<HugeiconsIcon icon={ThumbsUpIcon} size={14} />
							{likeCount}
						</button>
						<button
							className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
							onClick={() => setReplyOpen((prev) => !prev)}
							type="button"
						>
							<HugeiconsIcon icon={ReplyIcon} size={14} />
							Reply
						</button>
						{review.isCurrentUser && (
							<>
								<button
									className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
									onClick={() =>
										toast.info(
											"Edit review coming from your account settings"
										)
									}
									type="button"
								>
									<HugeiconsIcon icon={Edit02Icon} size={14} />
									Edit
								</button>
								<button
									className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-danger"
									onClick={() => toast.success("Review deleted")}
									type="button"
								>
									<HugeiconsIcon icon={Delete02Icon} size={14} />
									Delete
								</button>
							</>
						)}
					</div>

					{replyOpen && (
						<div className="mt-3 space-y-2">
							<Textarea
								className="min-h-16"
								onChange={(e) => setReplyText(e.target.value)}
								placeholder={`Reply to ${review.userName}...`}
								value={replyText}
							/>
							<div className="flex justify-end gap-2">
								<Button
									onClick={() => setReplyOpen(false)}
									size="sm"
									variant="ghost"
								>
									Cancel
								</Button>
								<Button onClick={handleReplySubmit} size="sm">
									Post reply
								</Button>
							</div>
						</div>
					)}

					{review.replies.length > 0 && (
						<div className="mt-4 space-y-3 border-l-2 border-border pl-4">
							{review.replies.map((reply) => (
								<div
									className="flex items-start gap-2.5"
									key={reply.id}
								>
									<Avatar className="size-7">
										<AvatarImage
											alt={reply.userName}
											src={reply.userAvatarPath}
										/>
										<AvatarFallback className="text-xs">
											{initials(reply.userName)}
										</AvatarFallback>
									</Avatar>
									<div className="min-w-0 flex-1">
										<div className="flex items-center gap-2">
											<span className="text-sm font-medium text-foreground">
												{reply.userName}
											</span>
											<span className="text-xs text-muted-foreground">
												{timeAgo(reply.createdAt)}
											</span>
										</div>
										<p className="text-sm text-muted-foreground">
											{reply.body}
										</p>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
