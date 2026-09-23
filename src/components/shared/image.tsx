"use client"

import { ImageNotFound01Icon, UserIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type ImageAspect = "poster" | "backdrop" | "square" | "avatar" | "auto"

const aspectClassMap: Record<ImageAspect, string> = {
	poster: "aspect-[2/3]",
	backdrop: "aspect-video",
	square: "aspect-square",
	avatar: "aspect-square rounded-full",
	auto: "",
}

export interface AppImageProps
	extends Omit<NextImageProps, "onError" | "src" | "alt"> {
	src?: string | null
	alt: string
	aspect?: ImageAspect
	containerClassName?: string
	fallbackVariant?: "poster" | "backdrop" | "person"
}

export function AppImage({
	src,
	alt,
	aspect = "auto",
	containerClassName,
	className,
	fallbackVariant = "poster",
	fill,
	sizes,
	...props
}: AppImageProps) {
	const [status, setStatus] = useState<"loading" | "loaded" | "error">(
		src ? "loading" : "error"
	)

	useEffect(() => {
		setStatus(src ? "loading" : "error")
	}, [src])

	const showFallback = status === "error" || !src

	return (
		<div
			className={cn(
				"relative overflow-hidden bg-surface-raised h-full",
				aspectClassMap[aspect],
				containerClassName
			)}
		>
			{showFallback ? (
				<div className="flex size-full flex-col items-center justify-center gap-2 text-muted-foreground/60">
					<HugeiconsIcon
						icon={
							fallbackVariant === "person"
								? UserIcon
								: ImageNotFound01Icon
						}
						size={aspect === "avatar" ? 20 : 32}
					/>
					{aspect !== "avatar" && (
						<span className="px-4 text-center text-xs leading-tight">
							Image unavailable
						</span>
					)}
				</div>
			) : (
				<NextImage
					alt={alt}
					className={cn(
						"object-cover transition-opacity duration-500",
						status === "loaded" ? "opacity-100" : "opacity-0",
						className
					)}
					fill={fill ?? true}
					onError={() => setStatus("error")}
					onLoad={() => setStatus("loaded")}
					sizes={
						sizes ??
						"(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
					}
					src={src}
					{...props}
				/>
			)}
			{status === "loading" && src && (
				<div aria-hidden className="absolute inset-0 shimmer" />
			)}
		</div>
	)
}
