"use client"

import {
	Bookmark02Icon,
	Calendar03Icon,
	FilmRoll01Icon,
	Notification03Icon,
	ThumbsUpIcon,
	UserIcon,
} from "@hugeicons/core-free-icons"
import type { IconSvgElement } from "@hugeicons/react"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import { EmptyState } from "@/components/shared/empty-state"
import { AppImage } from "@/components/shared/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { NotificationEntry, NotificationType } from "@/lib/data/user"
import { cn } from "@/lib/utils"

const typeIcons: Record<NotificationType, IconSvgElement> = {
	"new-content": FilmRoll01Icon,
	watchlist: Bookmark02Icon,
	account: UserIcon,
	reminder: Calendar03Icon,
	"review-activity": ThumbsUpIcon,
}

function timeAgo(dateString: string): string {
	const diffHours = Math.floor(
		(Date.now() - new Date(dateString).getTime()) / (1000 * 60 * 60)
	)
	if (diffHours < 1) return "Just now"
	if (diffHours < 24) return `${diffHours}h ago`
	return `${Math.floor(diffHours / 24)}d ago`
}

interface NotificationsPageClientProps {
	initialNotifications: NotificationEntry[]
}

export function NotificationsPageClient({
	initialNotifications,
}: NotificationsPageClientProps) {
	const [items, setItems] = useState(initialNotifications)

	const markRead = (id: string) => {
		setItems((prev) =>
			prev.map((n) => (n.id === id ? { ...n, read: true } : n))
		)
	}

	const unread = items.filter((n) => !n.read)
	const read = items.filter((n) => n.read)

	const renderList = (list: NotificationEntry[]) => {
		if (list.length === 0) {
			return (
				<EmptyState
					description="You're all caught up here."
					icon={Notification03Icon}
					title="Nothing to show"
				/>
			)
		}

		return (
			<div className="space-y-2">
				{list.map((notification) => (
					<button
						className={cn(
							"flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition-colors",
							notification.read
								? "border-border bg-card"
								: "border-primary/25 bg-primary/5"
						)}
						key={notification.id}
						onClick={() => markRead(notification.id)}
						type="button"
					>
						<div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary/70 text-foreground/70">
							<HugeiconsIcon
								icon={typeIcons[notification.type]}
								size={16}
							/>
						</div>
						<div className="min-w-0 flex-1">
							<div className="flex items-start justify-between gap-2">
								<p className="text-sm font-medium text-foreground">
									{notification.title}
								</p>
								{!notification.read && (
									<span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
								)}
							</div>
							<p className="mt-0.5 text-sm text-muted-foreground">
								{notification.body}
							</p>
							<p className="mt-1 text-xs text-muted-foreground">
								{timeAgo(notification.createdAt)}
							</p>
						</div>
						{notification.item && (
							<AppImage
								alt={notification.item.title}
								aspect="poster"
								containerClassName="w-15 shrink-0 rounded-md"
								sizes=""
								src={notification.item.posterPath}
							/>
						)}
					</button>
				))}
			</div>
		)
	}

	return (
		<div>
			<h1 className="text-2xl font-bold tracking-tight text-foreground">
				Notifications
			</h1>
			<Tabs className="mt-6" defaultValue="all">
				<TabsList>
					<TabsTrigger value="all">All ({items.length})</TabsTrigger>
					<TabsTrigger value="unread">
						Unread ({unread.length})
					</TabsTrigger>
					<TabsTrigger value="read">Read ({read.length})</TabsTrigger>
				</TabsList>
				<TabsContent value="all">{renderList(items)}</TabsContent>
				<TabsContent value="unread">{renderList(unread)}</TabsContent>
				<TabsContent value="read">{renderList(read)}</TabsContent>
			</Tabs>
		</div>
	)
}
