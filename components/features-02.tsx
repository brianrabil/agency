import {
	ArrowRightIcon,
	BoxIcon,
	InfinityIcon,
	LayersIcon,
	RocketIcon,
	SettingsIcon,
	ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Highlighter, { HighlighterItem } from "./highlighter";
import Particles from "./particles";

import FeatureImg01 from "@/public/images/feature-image-01.png";
import FeatureImg02 from "@/public/images/feature-image-02.png";
import FeatureImg03 from "@/public/images/feature-image-03.png";

export default function Features02() {
	return (
		<section className="relative">
			{/* Particles animation */}
			<div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
				<Particles
					className="absolute inset-0 -z-10"
					quantity={6}
					staticity={30}
				/>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-16 md:pt-32">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
							Launch Apps Faster, Smarter, Limitlessly
						</h2>
						<p className="text-lg text-slate-400">
							Zendrel combines unlimited UI/UX design and rapid app development
							in one subscription—everything you need to bring your ideas to
							life, fast.
						</p>
					</div>

					{/* Highlighted boxes */}
					<div className="relative pb-12 md:pb-20">
						{/* Blurred shape */}
						<div
							className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
							aria-hidden="true"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
								<title>Blurred shape</title>
								<defs>
									<linearGradient
										id="bs2-a"
										x1="19.609%"
										x2="50%"
										y1="14.544%"
										y2="100%"
									>
										<stop offset="0%" stopColor="#6366F1" />
										<stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
									</linearGradient>
								</defs>
								<path
									fill="url(#bs2-a)"
									fillRule="evenodd"
									d="m346 898 461 369-284 58z"
									transform="translate(-346 -898)"
								/>
							</svg>
						</div>
						{/* Grid */}
						<Highlighter className="grid md:grid-cols-12 gap-6 group">
							{/* Box #1 */}
							<div className="md:col-span-12" data-aos="fade-down">
								<HighlighterItem>
									<div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between">
											{/* Blurred shape */}
											<div
												className="absolute right-0 top-0 blur-2xl"
												aria-hidden="true"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="342"
													height="393"
												>
													<title>Blurred shape</title>
													<defs>
														<linearGradient
															id="bs-a"
															x1="19.609%"
															x2="50%"
															y1="14.544%"
															y2="100%"
														>
															<stop offset="0%" stopColor="#6366F1" />
															<stop
																offset="100%"
																stopColor="#6366F1"
																stopOpacity="0"
															/>
														</linearGradient>
													</defs>
													<path
														fill="url(#bs-a)"
														fillRule="evenodd"
														d="m104 .827 461 369-284 58z"
														transform="translate(0 -112.827)"
														opacity=".7"
													/>
												</svg>
											</div>
											{/* Radial gradient */}
											<div
												className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
												aria-hidden="true"
											>
												<div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70" />
												<div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]" />
											</div>
											{/* Text */}
											<div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
												<div className="mb-5">
													<div>
														<h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
															Lightning-Fast Delivery
														</h3>
														<p className="text-slate-400">
															Ship your app in 24-48 hours with expert UI/UX
															designs and MVP builds—speed that drives results.
														</p>
													</div>
												</div>
												<div>
													<a
														className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
														href="#0"
													>
														<span className="relative inline-flex items-center">
															Learn More{" "}
															<ArrowRightIcon className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 w-4 h-4" />
														</span>
													</a>
												</div>
											</div>
											{/* Image */}
											<div className="relative w-full h-64 md:h-auto overflow-hidden">
												{/* <Image
													className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0 md:translate-x-0"
													src={FeatureImg01}
													width="504"
													height="400"
													alt="Feature 01"
												/> */}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="446"
													height="446"
												>
													<title>Blurred shape</title>
													<defs>
														<filter
															id="b2"
															width="123.7%"
															height="123.7%"
															x="-11.9%"
															y="-11.9%"
															filterUnits="objectBoundingBox"
														>
															<feGaussianBlur
																in="SourceGraphic"
																stdDeviation="7"
															/>
														</filter>
														<filter
															id="c2"
															width="114.9%"
															height="114.9%"
															x="-7.5%"
															y="-7.5%"
															filterUnits="objectBoundingBox"
														>
															<feGaussianBlur
																in="SourceGraphic"
																stdDeviation="8"
															/>
														</filter>
														<filter
															id="e2"
															width="118.4%"
															height="118.4%"
															x="-9.2%"
															y="-9.2%"
															filterUnits="objectBoundingBox"
														>
															<feGaussianBlur
																in="SourceGraphic"
																stdDeviation="12"
															/>
														</filter>
														<linearGradient
															id="a2"
															x1="50%"
															x2="50%"
															y1="7.644%"
															y2="100%"
														>
															<stop offset="0%" stop-color="#E9D5FF" />
															<stop offset="31.441%" stop-color="#A855F7" />
															<stop offset="100%" stop-color="#A855F7" />
														</linearGradient>
													</defs>
													<g fill="none" fill-rule="nonzero">
														<path
															fill="url(#a2)"
															fill-opacity=".64"
															d="M223 110.243C160.726 110.243 110.243 160.726 110.243 223s50.483 112.757 112.757 112.757 112.757-50.483 112.757-112.757S285.274 110.243 223 110.243Zm0-12c68.901 0 124.757 55.856 124.757 124.757 0 68.901-55.856 124.757-124.757 124.757-68.901 0-124.757-55.856-124.757-124.757C99.243 154.099 155.1 98.243 223 98.243Z"
															filter="url(#b2)"
														/>
														<path
															fill="url(#a2)"
															fill-opacity=".48"
															d="M223 74C140.71 74 74 140.71 74 223s66.71 149 149 149 149-66.71 149-149S305.29 74 223 74Zm0-12c88.918 0 161 72.082 161 161s-72.082 161-161 161S62 311.918 62 223 134.082 62 223 62Z"
															filter="url(#c2)"
														/>
														<path
															fill="url(#a2)"
															fill-opacity=".24"
															d="M223 39C121.38 39 39 121.38 39 223s82.38 184 184 184 184-82.38 184-184S324.62 39 223 39Zm0-12c108.248 0 196 87.752 196 196s-87.752 196-196 196S27 331.248 27 223 114.752 27 223 27Z"
															filter="url(#e2)"
														/>
														<path
															fill="#A855F7"
															d="M223 146.486c-42.257 0-76.514 34.257-76.514 76.514s34.257 76.514 76.514 76.514 76.514-34.257 76.514-76.514-34.257-76.514-76.514-76.514Zm0-12c48.885 0 88.514 39.63 88.514 88.514 0 48.885-39.63 88.514-88.514 88.514-48.885 0-88.514-39.63-88.514-88.514 0-48.885 39.63-88.514 88.514-88.514Z"
														/>{" "}
														{/* Infinity Symbol */}
														<path
															fill="#E9D5FF"
															fill-opacity="0.3"
															d="M180 223c0-20 16.514-36.514 36.514-36.514 20 0 36.514 16.514 36.514 36.514s-16.514 36.514-36.514 36.514C196.514 259.514 180 243 180 223Zm36.514-12c24.442 0 44.514 20.072 44.514 44.514 0 24.442-20.072 44.514-44.514 44.514S172 280.956 172 256.514 192.072 244.514 216.514 244.514Z"
														/>{" "}
														{/* Orbiting Design Elements */}
													</g>
												</svg>
											</div>
										</div>
									</div>
								</HighlighterItem>
							</div>
							{/* Box #2 */}
							<div className="md:col-span-7" data-aos="fade-down">
								<HighlighterItem>
									<div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
										<div className="flex flex-col">
											{/* Radial gradient */}
											<div
												className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
												aria-hidden="true"
											>
												<div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
											</div>
											{/* Text */}
											<div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
												<div>
													<h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
														Infinite Creativity
													</h3>
													<p className="text-slate-400">
														Request endless designs and app prototypes—no cap on
														ideas, all crafted to fit your vision.
													</p>
												</div>
											</div>
											{/* Image */}
											<div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
												<Image
													className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
													src={FeatureImg02}
													width={536}
													height={230}
													alt="Feature 02"
												/>
											</div>
										</div>
									</div>
								</HighlighterItem>
							</div>
							{/* Box #3 */}
							<div className="md:col-span-5" data-aos="fade-down">
								<HighlighterItem>
									<div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
										<div className="flex flex-col">
											{/* Radial gradient */}
											<div
												className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
												aria-hidden="true"
											>
												<div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
											</div>
											{/* Text */}
											<div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
												<div>
													<h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
														Precision Prototyping
													</h3>
													<p className="text-slate-400">
														Build functional app MVPs fast—tailored solutions
														that hit the mark every time.
													</p>
												</div>
											</div>
											{/* Image */}
											<div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
												<Image
													className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
													src={FeatureImg03}
													width={230}
													height={230}
													alt="Feature 03"
												/>
											</div>
										</div>
									</div>
								</HighlighterItem>
							</div>
						</Highlighter>
					</div>

					{/* Features list */}
					<div className="grid md:grid-cols-3 gap-8 md:gap-12">
						{/* Feature */}
						<div>
							<div className="flex items-center space-x-2 mb-1">
								<ZapIcon className="shrink-0 fill-slate-300 w-4 h-4" />
								<h4 className="font-medium text-slate-50">Scalable</h4>
							</div>
							<p className="text-sm text-slate-400">
								Grows with your business—from startups to giants, Zendrel scales
								effortlessly.
							</p>
						</div>
						{/* Feature */}
						<div>
							<div className="flex items-center space-x-2 mb-1">
								<InfinityIcon className="shrink-0 fill-slate-300 w-4 h-4" />
								<h4 className="font-medium text-slate-50">Flexible</h4>
							</div>
							<p className="text-sm text-slate-400">
								Pause or stop anytime—your schedule, your rules.
							</p>
						</div>
						{/* Feature */}
						<div>
							<div className="flex items-center space-x-2 mb-1">
								<SettingsIcon className="shrink-0 fill-slate-300 w-4 h-4" />
								<h4 className="font-medium text-slate-50">Customizable</h4>
							</div>
							<p className="text-sm text-slate-400">
								Shape every design and app to your needs—revisions included, no
								limits.
							</p>
						</div>
						{/* Feature */}
						<div>
							<div className="flex items-center space-x-2 mb-1">
								<LayersIcon className="shrink-0 fill-slate-300 w-4 h-4" />
								<h4 className="font-medium text-slate-50">Integrated</h4>
							</div>
							<p className="text-sm text-slate-400">
								Design and development in sync—no vendor headaches.
							</p>
						</div>
						{/* Feature */}
						<div>
							<div className="flex items-center space-x-2 mb-1">
								<RocketIcon className="shrink-0 fill-slate-300 w-4 h-4" />
								<h4 className="font-medium text-slate-50">Efficient</h4>
							</div>
							<p className="text-sm text-slate-400">
								Boost productivity with rapid prototyping workflows.
							</p>
						</div>
						{/* Feature */}
						<div>
							<div className="flex items-center space-x-2 mb-1">
								<BoxIcon className="shrink-0 fill-slate-300 w-4 h-4" />
								<h4 className="font-medium text-slate-50">Versatile</h4>
							</div>
							<p className="text-sm text-slate-400">
								Powers apps for any industry—e-commerce, healthcare, and beyond.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
