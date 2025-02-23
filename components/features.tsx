"use client";

import Illustration from "@/public/images/glow-top.svg";
import { Transition } from "@headlessui/react";
import { MessageSquareIcon, PencilRulerIcon, RocketIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import Particles from "./particles";

export default function HowItWorks() {
	const [tab, setTab] = useState<number>(1);

	return (
		<section>
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				{/* Illustration */}
				<div
					className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
					aria-hidden="true"
				>
					<div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
						<Image
							src={Illustration}
							className="max-w-none"
							width={1404}
							height={658}
							alt="How It Works Illustration"
						/>
					</div>
				</div>

				<div className="pt-16 pb-12 md:pt-52 md:pb-20">
					<div>
						{/* Section content */}
						<div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
							{/* Content */}
							<div
								className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center"
								data-aos="fade-down"
							>
								<div>
									<div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
										How It Works
									</div>
								</div>
								<h3 className="h3 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
									From Idea to App in Three Simple Steps
								</h3>
								<p className="text-lg text-slate-400 mb-8">
									With Zendrel, launching your app is fast and easy. Subscribe
									for unlimited design and development requests with quick
									turnaround times.
								</p>
								<div className="mt-8 max-w-xs max-md:mx-auto space-y-2">
									<button
										type="button"
										className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${
											tab !== 1
												? "border-slate-700 opacity-50"
												: "border-purple-700 shadow-sm shadow-purple-500/25"
										}`}
										onClick={() => setTab(1)}
										aria-selected={tab === 1}
									>
										<PencilRulerIcon className="shrink-0 fill-slate-300 mr-3 w-4 h-4" />
										<span>Step 1: Subscribe & Request</span>
									</button>
									<button
										type="button"
										className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${
											tab !== 2
												? "border-slate-700 opacity-50"
												: "border-purple-700 shadow-sm shadow-purple-500/25"
										}`}
										onClick={() => setTab(2)}
										aria-selected={tab === 2}
									>
										<MessageSquareIcon className="shrink-0 fill-slate-300 mr-3 w-4 h-4" />
										<span>Step 2: Review & Revise</span>
									</button>
									<button
										type="button"
										className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${
											tab !== 3
												? "border-slate-700 opacity-50"
												: "border-purple-700 shadow-sm shadow-purple-500/25"
										}`}
										onClick={() => setTab(3)}
										aria-selected={tab === 3}
									>
										<RocketIcon className="shrink-0 fill-slate-300 mr-3 w-4 h-4" />
										<span>Step 3: Receive & Launch</span>
									</button>
								</div>
								{/* Descriptions with Framer Motion */}
								<div className="mt-8 relative h-20 overflow-hidden">
									<div className="absolute inset-0">
										<AnimatePresence mode="wait">
											{tab === 1 && (
												<motion.div
													key="step1"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{
														opacity: 0,
														transition: { duration: 0.3, ease: "easeOut" },
													}}
													transition={{ duration: 0.5, ease: "easeOut" }}
													style={{
														position: "absolute",
														top: 0,
														left: 0,
														right: 0,
													}}
												>
													<p className="text-slate-400">
														Subscribe to our service and submit your design or
														development requests through our streamlined
														dashboard. Make unlimited requests, one at a time.
													</p>
												</motion.div>
											)}
											{tab === 2 && (
												<motion.div
													key="step2"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{
														opacity: 0,
														transition: { duration: 0.3, ease: "easeOut" },
													}}
													transition={{ duration: 0.5, ease: "easeOut" }}
													style={{
														position: "absolute",
														top: 0,
														left: 0,
														right: 0,
													}}
												>
													<p className="text-slate-400">
														Receive your first draft within 24-48 hours. Request
														revisions until you're completely satisfied with the
														results.
													</p>
												</motion.div>
											)}
											{tab === 3 && (
												<motion.div
													key="step3"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{
														opacity: 0,
														transition: { duration: 0.3, ease: "easeOut" },
													}}
													transition={{ duration: 0.5, ease: "easeOut" }}
													style={{
														position: "absolute",
														top: 0,
														left: 0,
														right: 0,
													}}
												>
													<p className="text-slate-400">
														Get your finalized designs or development work
														delivered and ready for launch. Start your next
														request whenever you're ready.
													</p>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</div>
							</div>

							{/* Image */}
							<div
								className="md:w-5/12 lg:w-1/2"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<div className="relative py-24 -mt-12">
									{/* Particles animation */}
									<Particles
										className="absolute inset-0 -z-10"
										quantity={8}
										staticity={30}
									/>

									<div className="flex items-center justify-center">
										<div className="relative w-48 h-48 flex justify-center items-center">
											{/* Halo effect */}
											<svg
												className="absolute inset-0 -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
												width="480"
												height="480"
												viewBox="0 0 480 480"
												xmlns="http://www.w3.org/2000/svg"
											>
												<title>Halo effect</title>
												<defs>
													<linearGradient
														id="pulse-a"
														x1="50%"
														x2="50%"
														y1="100%"
														y2="0%"
													>
														<stop offset="0%" stopColor="#A855F7" />
														<stop offset="76.382%" stopColor="#FAF5FF" />
														<stop offset="100%" stopColor="#6366F1" />
													</linearGradient>
												</defs>
												<g fillRule="evenodd">
													<path
														className="pulse"
														fill="url(#pulse-a)"
														fillRule="evenodd"
														d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
													/>
													<path
														className="pulse pulse-1"
														fill="url(#pulse-a)"
														fillRule="evenodd"
														d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
													/>
													<path
														className="pulse pulse-2"
														fill="url(#pulse-a)"
														fillRule="evenodd"
														d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
													/>
												</g>
											</svg>
											{/* Grid */}
											<div className="absolute inset-0 -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
												<div className="h-[200%] animate-endless">
													<div className="absolute inset-0 [background:repeating-linear-gradient(transparent,transparent_48px,var(--color-white)_48px,var(--color-white)_49px)] blur-[2px] opacity-20" />
													<div className="absolute inset-0 [background:repeating-linear-gradient(transparent,transparent_48px,var(--color-purple-500)_48px,var(--color-purple-500)_49px)]" />
													<div className="absolute inset-0 [background:repeating-linear-gradient(90deg,transparent,transparent_48px,var(--color-white)_48px,var(--color-white)_49px)] blur-[2px] opacity-20" />
													<div className="absolute inset-0 [background:repeating-linear-gradient(90deg,transparent,transparent_48px,var(--color-purple-500)_48px,var(--color-purple-500)_49px)]" />
												</div>
											</div>
											{/* Icons */}
											<Transition
												as="div"
												show={tab === 1}
												className="transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-rotate-[60deg] data-leave:data-closed:rotate-[60deg] data-closed:opacity-0 duration-700"
												unmount={false}
												appear={true}
											>
												<div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
													<PencilRulerIcon className="relative fill-slate-200 w-6 h-6" />
												</div>
											</Transition>
											<Transition
												as="div"
												show={tab === 2}
												className="transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-rotate-[60deg] data-leave:data-closed:rotate-[60deg] data-closed:opacity-0 duration-700"
												unmount={false}
												appear={true}
											>
												<div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
													<MessageSquareIcon className="relative fill-slate-200 w-6 h-6" />
												</div>
											</Transition>
											<Transition
												as="div"
												show={tab === 3}
												className="transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-rotate-[60deg] data-leave:data-closed:rotate-[60deg] data-closed:opacity-0 duration-700"
												unmount={false}
												appear={true}
											>
												<div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
													<RocketIcon className="relative fill-slate-200 w-6 h-6" />
												</div>
											</Transition>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
