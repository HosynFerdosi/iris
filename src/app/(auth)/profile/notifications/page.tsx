import type { Metadata } from "next"
import { NotificationsPageClient } from "@/features/profile/components/notifications-page-client"
import { notifications } from "@/lib/data/user"

export const metadata: Metadata = {
	title: "Notifications",
}

export default function NotificationsPage() {
	return <NotificationsPageClient initialNotifications={notifications} />
}
