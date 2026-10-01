import type { Metadata } from "next"
import { SettingsPageClient } from "@/features/profile/components/settings-page-client"

export const metadata: Metadata = {
	title: "Settings",
}

export default function SettingsPage() {
	return <SettingsPageClient />
}
