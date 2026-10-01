"use client"

import { Cancel01Icon, FilterIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { genres } from "@/lib/data/genres"

const sortOptions = [
	{ value: "popular", label: "Most popular" },
	{ value: "rating", label: "Highest rated" },
	{ value: "newest", label: "Newest" },
]
const years = Array.from({ length: 30 }, (_, i) => (2027 - i).toString())

function FilterControls() {
	return (
		<>
			<Select>
				<SelectTrigger className="w-full sm:w-40">
					<SelectValue placeholder="Genre" />
				</SelectTrigger>
				<SelectContent className="p-2">
					<SelectItem value="all">All genres</SelectItem>
					{genres.map((genre) => (
						<SelectItem key={genre.id} value={genre.id}>
							{genre.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			<Select>
				<SelectTrigger className="w-full sm:w-32">
					<SelectValue placeholder="Year" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All years</SelectItem>
					{years.map((year) => (
						<SelectItem key={year} value={year}>
							{year}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			<Select>
				<SelectTrigger className="w-full sm:w-44">
					<SelectValue placeholder="Sort by" />
				</SelectTrigger>
				<SelectContent className="p-2">
					{sortOptions.map((opt) => (
						<SelectItem key={opt.value} value={opt.value}>
							{opt.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</>
	)
}

export function FilterBar() {
	const [mobileOpen, setMobileOpen] = useState(false)
	const hasActiveFilters = false

	return (
		<div className="flex items-center gap-3">
			<div className="hidden flex-1 flex-wrap gap-3 sm:flex">
				<FilterControls />
			</div>

			<Sheet onOpenChange={setMobileOpen} open={mobileOpen}>
				<SheetTrigger
					render={
						<Button className="sm:hidden" variant="outline">
							<HugeiconsIcon icon={FilterIcon} size={16} />
							Filters
							{hasActiveFilters && (
								<span className="ml-1 flex size-1.5 rounded-full bg-primary" />
							)}
						</Button>
					}
				/>
				<SheetContent className="max-h-[80vh] rounded-t-2xl" side="bottom">
					<SheetHeader>
						<SheetTitle>Filter & sort</SheetTitle>
					</SheetHeader>
					<div className="flex flex-col gap-3 p-5 pt-2">
						<FilterControls />
						<Button className="mt-2" onClick={() => setMobileOpen(false)}>
							Show results
						</Button>
					</div>
				</SheetContent>
			</Sheet>

			{hasActiveFilters && (
				<Button className="hidden sm:inline-flex" size="sm" variant="ghost">
					<HugeiconsIcon icon={Cancel01Icon} size={14} />
					Clear
				</Button>
			)}
		</div>
	)
}
