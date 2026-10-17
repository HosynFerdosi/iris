import { Tv01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TvNotFound() {
	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
			<div className="mb-6 flex size-16 items-center justify-center rounded-full bg-secondary/60 text-muted-foreground">
				<HugeiconsIcon icon={Tv01Icon} size={28} />
			</div>
			<h1 className="text-2xl font-bold tracking-tight text-foreground">
				This movie isn't available
			</h1>
			<p className="mt-2 max-w-sm text-sm text-muted-foreground">
				It may have been removed from the catalog, or the link you followed
				is out of date.
			</p>
			<div className="mt-7 flex gap-3">
				<Link href="/movies">
					<Button>Browse Movies</Button>
				</Link>
				<Link href="/">
					<Button variant="outline">Back to home</Button>
				</Link>
			</div>
		</div>
	)
}
