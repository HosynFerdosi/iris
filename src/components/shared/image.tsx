"use client"

import { ImageNotFound01Icon, UserIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "../ui/skeleton"

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
	const imageRef = useRef<HTMLImageElement>(null)

	const [status, setStatus] = useState<"loading" | "loaded" | "error">(
		src ? "loading" : "error"
	)

	const handleLoad = useCallback(() => {
		setStatus("loaded")
	}, [])

	const handleError = useCallback(() => {
		setStatus("error")
	}, [])

	useEffect(() => {
		if (!src) {
			setStatus("error")
			return
		}

		const image = imageRef.current

		if (image?.complete) {
			setStatus(image.naturalWidth > 0 ? "loaded" : "error")
		} else {
			setStatus("loading")
		}
	}, [src])

	const showFallback = status === "error" || !src

	return (
		<div
			className={cn(
				"relative h-full overflow-hidden bg-surface-raised",
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
					{...props}
					alt={alt}
					className={cn(
						"object-cover transition-all duration-500",
						status === "loaded" ? "opacity-100" : "opacity-0",
						className
					)}
					fill={fill ?? true}
					key={src}
					onError={handleError}
					onLoad={handleLoad}
					ref={imageRef}
					sizes={
						sizes ??
						"(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
					}
					src={src}
				/>
			)}

			{status === "loading" && src && (
				<Skeleton aria-hidden="true" className="absolute inset-0" />
			)}
		</div>
	)
}
