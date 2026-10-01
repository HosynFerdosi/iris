"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { currentUser } from "@/lib/data/user"

export function SettingsPageClient() {
	const [name, setName] = useState(currentUser.name)
	const [notifyReleases, setNotifyReleases] = useState(true)
	const [notifyActivity, setNotifyActivity] = useState(true)
	const [publicProfile, setPublicProfile] = useState(false)

	const handleSaveAccount = () => {
		toast.success("Account details updated")
	}

	return (
		<div>
			<h1 className="text-2xl font-bold tracking-tight text-foreground">
				Settings
			</h1>

			<Tabs className="mt-6" defaultValue="account">
				<TabsList className="flex-wrap">
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="notifications">Notifications</TabsTrigger>
					<TabsTrigger value="privacy">Privacy</TabsTrigger>
					<TabsTrigger value="preferences">Preferences</TabsTrigger>
				</TabsList>

				<TabsContent value="account">
					<Card>
						<CardHeader>
							<CardTitle>Account details</CardTitle>
							<CardDescription>
								Update your name and phone number.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-1.5">
								<Label htmlFor="settings-name">Full name</Label>
								<Input
									id="settings-name"
									onChange={(e) => setName(e.target.value)}
									value={name}
								/>
							</div>
							<div className="space-y-1.5">
								<Label htmlFor="settings-phone">Phone number</Label>
								<Input
									disabled
									id="settings-phone"
									value={currentUser.phone}
								/>
							</div>
							<Button onClick={handleSaveAccount}>Save changes</Button>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="notifications">
					<Card>
						<CardHeader>
							<CardTitle>Notification preferences</CardTitle>
							<CardDescription>
								Choose what you want to hear about.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-5">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-foreground">
										Release reminders
									</p>
									<p className="text-sm text-muted-foreground">
										Get notified when watchlist titles release.
									</p>
								</div>
								<Switch
									checked={notifyReleases}
									onCheckedChange={setNotifyReleases}
								/>
							</div>
							<Separator />
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-foreground">
										Review activity
									</p>
									<p className="text-sm text-muted-foreground">
										Likes and replies on your reviews.
									</p>
								</div>
								<Switch
									checked={notifyActivity}
									onCheckedChange={setNotifyActivity}
								/>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="privacy">
					<Card>
						<CardHeader>
							<CardTitle>Privacy</CardTitle>
							<CardDescription>
								Control what others can see.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-foreground">
										Public profile
									</p>
									<p className="text-sm text-muted-foreground">
										Let others see your ratings and watchlist.
									</p>
								</div>
								<Switch
									checked={publicProfile}
									onCheckedChange={setPublicProfile}
								/>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="preferences">
					<Card>
						<CardHeader>
							<CardTitle>Playback & discovery</CardTitle>
							<CardDescription>
								Tune your default browsing experience.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-1.5">
								<Label>Default landing page</Label>
								<Select defaultValue="home">
									<SelectTrigger className="w-48">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="home">Home</SelectItem>
										<SelectItem value="discover">Discover</SelectItem>
										<SelectItem value="movies">Movies</SelectItem>
										<SelectItem value="tv">TV Shows</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-1.5">
								<Label>Preferred content language</Label>
								<Select defaultValue="en">
									<SelectTrigger className="w-48">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="en">English</SelectItem>
										<SelectItem value="fa">Persian</SelectItem>
										<SelectItem value="es">Spanish</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}
