import Image from "next/image";

export default function Story() {
	return (
		<section className="relative">
			{/* Blurred shape */}
			<div
				className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10"
				aria-hidden="true"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
					<title>Story illustration</title>
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

			<div className="px-4 sm:px-6">
				<div className="max-w-5xl mx-auto">
					<div className="pb-12 md:pb-20">
						{/* Section header */}
						<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
							<h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
								Our Story (So Far)
							</h2>
						</div>

						<div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
							<figure className="min-w-[240px]">
								<Image
									className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]"
									src="https://placekitten.com/420/280"
									width={420}
									height={280}
									alt="Team"
								/>
							</figure>
							<div className="max-w-[548px] mx-auto">
								<div className="text-slate-400 space-y-6">
									<p>
										We came together fueled by a shared passion for solving a
										problem we faced ourselves: how to deliver exceptional UI/UX
										and AI solutions without the hassle of endless project fees.
										What started as a personal challenge grew into a mission to
										empower businesses of all sizes—startups, scale-ups, and
										enterprises alike.
									</p>
									<p>
										Zendrel is a platform that blends stunning design with
										intelligent AI, all under one subscription.{" "}
										<strong className="text-slate-50 font-medium">
											We dreamed of using technology to redefine how design and
											innovation intersect
										</strong>
										, making it seamless, accessible, and limitless for our
										clients.
									</p>
									<p>
										With Zendrel, you can request unlimited designs, tap into
										AI-driven features, and see your ideas come to life in as
										little as 24 hours. Our goal is to{" "}
										<strong className="text-slate-50 font-medium">
											break down barriers and spark creativity
										</strong>
										, offering a space where businesses can thrive without
										constraints.
									</p>
									<p>
										Our journey began over five years ago, inspired by a simple
										yet powerful idea: to rethink how design and tech could work
										together. Drawing from our diverse backgrounds—spanning
										design, AI, and client success—we’ve built a service that’s
										as dynamic as the teams we serve, rooted in a commitment to
										excellence and innovation.
									</p>
									<p>
										At Zendrel, we’re always learning, experimenting, and
										pushing the envelope. We’re a team of builders, dreamers,
										and problem-solvers, excited to tackle the challenges of a
										fast-evolving digital landscape. From startups to global
										brands, we’re here to transform how the world experiences
										design and AI—one unlimited subscription at a time.
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
