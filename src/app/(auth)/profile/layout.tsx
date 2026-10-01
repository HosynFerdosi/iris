import { ProfileSidebar } from "@/features/profile/components/profile-sidebar"

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="mx-auto max-w-350 px-4 py-8 sm:px-6 xl:px-10 lg:flex lg:gap-10">
			<ProfileSidebar />
			<div className="min-w-0 flex-1">{children}</div>
		</div>
	)
}
