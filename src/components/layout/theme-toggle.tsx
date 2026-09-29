"use client"

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])

	if (!mounted) {
		return (
			<Button aria-hidden size="icon" variant="ghost">
				<HugeiconsIcon className="size-4.5" icon={Sun03Icon} />
			</Button>
		)
	}

	const isDark = resolvedTheme === "dark"

	return (
		<Button
			aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
			onClick={() => setTheme(isDark ? "light" : "dark")}
			size="icon"
			variant="ghost"
		>
			<HugeiconsIcon
				className="size-4.5"
				icon={isDark ? Sun03Icon : Moon02Icon}
			/>
		</Button>
	)
}
