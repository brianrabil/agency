interface PageHeaderProps {
	className?: string;
	children: React.ReactNode;
	title: string;
	description?: string;
}

export default function PageHeader({
	className,
	children,
	title,
	description,
}: PageHeaderProps) {
	return (
		<div className={`max-w-3xl mx-auto ${className || ""}`}>
			<div className="text-center">
				<div className="relative flex items-center justify-center gap-4 mb-5 before:h-px before:w-24 before:border-b before:[border-image:linear-gradient(to_left,var(--color-indigo-300),transparent)1] dark:before:[border-image:linear-gradient(to_left,--theme(--color-indigo-300/.16),transparent)1] before:shadow-xs before:shadow-white/20 dark:before:shadow-none after:h-px after:w-24 after:border-b after:[border-image:linear-gradient(to_right,var(--color-indigo-300),transparent)1] dark:after:[border-image:linear-gradient(to_right,--theme(--color-indigo-300/.16),transparent)1] after:shadow-xs after:shadow-white/20 dark:after:shadow-none">
					<div className="relative text-sm font-medium text-gray-700 bg-gray-700 inline-flex rounded-lg whitespace-nowrap px-3 py-[3px] tracking-normal before:absolute before:inset-0 before:rounded-lg before:[background-image:linear-gradient(120deg,transparent_0%,--theme(--color-indigo-400/.12)_33%,--theme(--color-pink-400/.12)_66%,--theme(--color-amber-200/.12)_100%)] dark:before:[background-image:linear-gradient(120deg,--theme(--color-indigo-400/.16),--theme(--color-indigo-600/.16)_50%,transparent_100%)] shadow-sm">
						{/* Border with dots in corners */}
						<div
							className="absolute -inset-1.5 bg-gray-800/65 rounded-xs -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_0.5px,transparent_0.5px)] dark:before:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-indigo-500/.56)_0.5px,transparent_0.5px)] dark:after:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px)]"
							aria-hidden="true"
						/>
						<span className="relative text-transparent bg-clip-text bg-linear-to-b from-indigo-500 to-indigo-50">
							{children}
						</span>
					</div>
				</div>
				<div>
					<h1 className="font-inter-tight text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-indigo-200 to-gray-200 pb-4">
						{title}
					</h1>
					<p className="text-lg text-gray-400">{description}</p>
				</div>
			</div>
		</div>
	);
}
