import { CodeIcon, GithubIcon, TwitterIcon } from "lucide-react"; // Lucide icons with "Icon" suffix
import Logo from "./logo";

export default function Footer() {
	return (
		<footer>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Blocks */}
				<div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
					{/* 1st block */}
					<div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
						<div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
							<div className="mb-4 sm:mb-0">
								<div className="mb-4">
									<Logo />
								</div>
								<div className="text-sm text-slate-300">
									© Zendrel LLC <span className="text-slate-500">·</span> All
									rights reserved.
								</div>
							</div>
							{/* Social links */}
							<ul className="flex">
								<li>
									<a
										className="flex justify-center items-center text-slate-300 hover:text-slate-200 transition duration-150 ease-in-out"
										href="https://x.com/brianrabil"
										aria-label="X"
									>
										<svg
											width="48"
											height="48"
											className="w-5 h-5 fill-current"
											viewBox="0 0 48 48"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											aria-label="X"
										>
											<title>X</title>
											<path
												d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z"
												fill="currentColor"
											/>
										</svg>
									</a>
								</li>
								{/* <li className="ml-2">
									<a
										className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
										href="https://dev.to/zendrel"
										aria-label="Dev.to"
									>
										<CodeIcon className="w-8 h-8 fill-current" />
									</a>
								</li> */}
								{/* <li className="ml-2">
									<a
										className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
										href="https://github.com/zendrel"
										aria-label="Github"
									>
										<GithubIcon className="w-8 h-8 fill-current" />
									</a>
								</li> */}
							</ul>
						</div>
					</div>

					{/* 2nd block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
						<h6 className="text-sm text-slate-50 font-medium mb-2">Services</h6>
						<ul className="text-sm space-y-2">
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/services"
								>
									What We Offer
								</a>
							</li>
							{/* <li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/integrations"
								>
									Integrations
								</a>
							</li> */}
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/pricing"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/how-it-works"
								>
									How It Works
								</a>
							</li>
						</ul>
					</div>

					{/* 3rd block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
						<h6 className="text-sm text-slate-50 font-medium mb-2">Company</h6>
						<ul className="text-sm space-y-2">
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/about"
								>
									About Us
								</a>
							</li>
							{/* <li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/careers"
								>
									Careers
								</a>
							</li> */}
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/blog"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/contact"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>

					{/* 4th block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
						<h6 className="text-sm text-slate-50 font-medium mb-2">
							Resources
						</h6>
						<ul className="text-sm space-y-2">
							{/* <li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/help"
								>
									Help Center
								</a>
							</li> */}
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/terms"
								>
									Terms of Service
								</a>
							</li>
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/privacy"
								>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>

					{/* 5th block */}
					<div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
						<h6 className="text-sm text-slate-50 font-medium mb-2">Support</h6>
						<ul className="text-sm space-y-2">
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/faq"
								>
									FAQs
								</a>
							</li>
							{/* <li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/support"
								>
									Customer Support
								</a>
							</li> */}
							<li>
								<div className="text-slate-400 inline-flex items-center gap-1.5 whitespace-nowrap">
									Status:{" "}
									<div className="flex items-center gap-1">
										<span className="relative flex h-2 w-2">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
											<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
										</span>{" "}
										<span className="text-green-500">Online</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
