import {
	BarChartIcon,
	BellIcon,
	BoxIcon,
	DownloadIcon,
	LinkIcon,
	LockIcon,
	MessageCircleIcon,
	SearchIcon,
	UsersIcon,
} from "lucide-react";

export default function Features04() {
	return (
		<section className="relative">
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				{/* Blurred shape */}
				<div
					className="absolute top-0 -mt-24 left-0 -ml-16 blur-2xl opacity-70 pointer-events-none -z-10"
					aria-hidden="true"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
						<title>Blurred shape</title>
						<defs>
							<linearGradient
								id="bs4-a"
								x1="19.609%"
								x2="50%"
								y1="14.544%"
								y2="100%"
							>
								<stop offset="0%" stopColor="#A855F7" />
								<stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
							</linearGradient>
						</defs>
						<path
							fill="url(#bs4-a)"
							fillRule="evenodd"
							d="m0 0 461 369-284 58z"
							transform="matrix(1 0 0 -1 0 427)"
						/>
					</svg>
				</div>

				<div className="pt-16 pb-12 md:pt-32 md:pb-20">
					{/* Section header */}
					<div className="max-w-3xl pb-12 md:pb-20">
						<h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
							Why Trust Zendrel?
						</h2>
						<p className="text-lg text-slate-400">
							Zendrel combines world-class design with cutting-edge AI,
							delivering unlimited solutions that power your business—trusted by
							startups and enterprises alike.
						</p>
					</div>

					{/* Rows */}
					<div className="divide-y divide-slate-800">
						{/* Row */}
						<div className="py-8 first-of-type:pt-0 last-of-type:pb-0">
							<div>
								<div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-6">
									Seamless Collaboration
								</div>
							</div>
							<div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
								{/* Feature */}
								<div>
									<div className="flex items-center space-x-2 mb-1">
										<MessageCircleIcon className="shrink-0 fill-slate-300 w-4 h-4" />
										<h4 className="font-medium text-slate-50">Feedback Loop</h4>
									</div>
									<p className="text-sm text-slate-400">
										Submit requests and get revisions fast—our queue keeps your
										projects on track.
									</p>
								</div>
								{/* Feature */}
								<div>
									<div className="flex items-center space-x-2 mb-1">
										<UsersIcon className="shrink-0 fill-slate-300 w-4 h-4" />
										<h4 className="font-medium text-slate-50">Team Sync</h4>
									</div>
									<p className="text-sm text-slate-400">
										Collaborate effortlessly with your team via our intuitive
										dashboard.
									</p>
								</div>
								{/* Feature */}
								<div>
									<div className="flex items-center space-x-2 mb-1">
										<SearchIcon className="shrink-0 fill-slate-300 w-4 h-4" />
										<h4 className="font-medium text-slate-50">Task Tracking</h4>
									</div>
									<p className="text-sm text-slate-400">
										Monitor progress in real-time—know exactly where your
										designs stand.
									</p>
								</div>
							</div>
						</div>
						{/* Row */}
						<div className="py-8">
							<div>
								<div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-6">
									Actionable Insights
								</div>
							</div>
							<div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
								{/* Feature */}
								<div>
									<div className="flex items-center space-x-2 mb-1">
										<BarChartIcon className="shrink-0 fill-slate-300 w-4 h-4" />
										<h4 className="font-medium text-slate-50">Analytics</h4>
									</div>
									<p className="text-sm text-slate-400">
										Leverage AI-powered insights to optimize your user
										experience.
									</p>
								</div>
								{/* Feature */}
								<div>
									<div className="flex items-center space-x-2 mb-1">
										<BellIcon className="shrink-0 fill-slate-300 w-4 h-4" />
										<h4 className="font-medium text-slate-50">Notifications</h4>
									</div>
									<p className="text-sm text-slate-400">
										Stay updated with instant alerts on task completions and
										updates.
									</p>
								</div>
								{/* Feature */}
								<div>
									<div className="flex items-center space-x-2 mb-1">
										<LinkIcon className="shrink-0 fill-slate-300 w-4 h-4" />
										<h4 className="font-medium text-slate-50">Integrations</h4>
									</div>
									<p className="text-sm text-slate-400">
										Connect Zendrel with your favorite tools for a seamless
										workflow.
									</p>
								</div>
							</div>
						</div>
						{/* Row */}
						<div className="py-8">
							<div>
								<div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-6">
									Reliable Delivery
								</div>
							</div>
							<div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
								{/* Feature */}
								<div>
									<div className="flex items-center space-x-2 mb-1">
										<LockIcon className="shrink-0 fill-slate-300 w-4 h-4" />
										<h4 className="font-medium text-slate-50">Secure Files</h4>
									</div>
									<p className="text-sm text-slate-400">
										Your designs and data are safe with us, delivered securely
										every time.
									</p>
								</div>
								{/* Feature */}
								<div>
									<div className="flex items-center space-x-2 mb-1">
										<DownloadIcon className="shrink-0 fill-slate-300 w-4 h-4" />
										<h4 className="font-medium text-slate-50">Easy Exports</h4>
									</div>
									<p className="text-sm text-slate-400">
										Download native files (Figma, code snippets) with a single
										click.
									</p>
								</div>
								{/* Feature */}
								<div>
									<div className="flex items-center space-x-2 mb-1">
										<BoxIcon className="shrink-0 fill-slate-300 w-4 h-4" />
										<h4 className="font-medium text-slate-50">
											Consistent Output
										</h4>
									</div>
									<p className="text-sm text-slate-400">
										High-quality deliverables, every time—24-48 hour turnarounds
										you can count on.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
