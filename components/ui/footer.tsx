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
									© Zendrel Inc. <span className="text-slate-500">-</span> All
									rights reserved.
								</div>
							</div>
							{/* Social links */}
							<ul className="flex">
								<li>
									<a
										className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
										href="https://twitter.com/zendrel"
										aria-label="Twitter"
									>
										<TwitterIcon className="w-8 h-8 fill-current" />
									</a>
								</li>
								<li className="ml-2">
									<a
										className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
										href="https://dev.to/zendrel"
										aria-label="Dev.to"
									>
										<CodeIcon className="w-8 h-8 fill-current" />
									</a>
								</li>
								<li className="ml-2">
									<a
										className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
										href="https://github.com/zendrel"
										aria-label="Github"
									>
										<GithubIcon className="w-8 h-8 fill-current" />
									</a>
								</li>
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
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/integrations"
								>
									Integrations
								</a>
							</li>
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/pricing"
								>
									Pricing Plans
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
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/careers"
								>
									Careers
								</a>
							</li>
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
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/help"
								>
									Help Center
								</a>
							</li>
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
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/support"
								>
									Customer Support
								</a>
							</li>
							<li>
								<a
									className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
									href="/status"
								>
									System Status
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
