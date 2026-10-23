export default function Layout({ children }: LayoutProps<"/discover">) {
	return (
		<div className="pb-20">
			<div className="mx-auto max-w-[1600px] px-4 pt-8 sm:px-6 lg:px-10">
				<p className="text-sm font-medium uppercase tracking-wide text-primary">
					Discover
				</p>
				<h1 className="mt-2 max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
					Editorial picks, made for exploring
				</h1>
			</div>
			<div className="space-y-14">{children}</div>
		</div>
	)
}
