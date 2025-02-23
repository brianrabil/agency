"use client";

import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
	const [annual, setAnnual] = useState<boolean>(true);

	return (
		<div className="relative">
			{/* Blurred shape */}
			<div
				className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none"
				aria-hidden="true"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
					<title>Pricing illustration</title>
					<defs>
						<linearGradient
							id="bs5-a"
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
						fill="url(#bs5-a)"
						fillRule="evenodd"
						d="m661 736 461 369-284 58z"
						transform="matrix(1 0 0 -1 -661 1163)"
					/>
				</svg>
			</div>
			{/* Content */}
			<div className="grid md:grid-cols-4 xl:-mx-6 text-sm [&>div:nth-of-type(-n+4)]:py-6 [&>div:nth-last-of-type(-n+4)]:pb-6 max-md:[&>div:nth-last-of-type(-n+4)]:mb-8 max-md:[&>div:nth-of-type(-n+4):nth-of-type(n+1)]:rounded-t-3xl max-md:[&>div:nth-last-of-type(-n+4)]:rounded-b-3xl md:[&>div:nth-of-type(2)]:rounded-tl-3xl md:[&>div:nth-of-type(4)]:rounded-tr-3xl md:[&>div:nth-last-of-type(3)]:rounded-bl-3xl md:[&>div:nth-last-of-type(1)]:rounded-br-3xl [&>div]:bg-slate-700/20 [&>div:nth-of-type(4n+1)]:bg-transparent max-md:[&>div:nth-of-type(4n+5)]:hidden max-md:[&>div:nth-of-type(4n+2)]:order-1 max-md:[&>div:nth-of-type(4n+3)]:order-2 max-md:[&>div:nth-of-type(4n+4)]:order-3 max-md:md:[&>div:nth-of-type(n)]:mb-0 [&>div:nth-of-type(4n+3)]:relative [&>div:nth-of-type(4n+3)]:before:absolute [&>div:nth-of-type(4n+3)]:before:-inset-px [&>div:nth-of-type(4n+3)]:before:rounded-[inherit] [&>div:nth-of-type(4n+3)]:before:border-x-2 [&>div:nth-of-type(3)]:before:border-t-2 [&>div:nth-last-of-type(2)]:before:border-b-2 [&>div:nth-of-type(4n+3)]:before:border-purple-500 [&>div:nth-of-type(4n+3)]:before:-z-10 [&>div:nth-of-type(4n+3)]:before:pointer-events-none">
				{/* Pricing toggle */}
				<div className="px-6 flex flex-col justify-end">
					<div className="pb-5 md:border-b border-slate-800">
						{/* Toggle switch */}
						<div className="max-md:text-center">
							<div className="inline-flex items-center whitespace-nowrap">
								<div className="text-sm text-slate-500 font-medium mr-2 md:max-lg:hidden">
									Monthly
								</div>
								<div className="relative">
									<input
										type="checkbox"
										id="toggle"
										className="peer sr-only"
										checked={annual}
										onChange={() => setAnnual(!annual)}
									/>
									<label
										htmlFor="toggle"
										className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-xs before:transition-transform before:duration-150 peer-checked:bg-purple-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-focus-visible:peer-checked:outline-purple-500"
									>
										<span className="sr-only">Pay Yearly</span>
									</label>
								</div>
								<div className="text-sm text-slate-500 font-medium ml-2">
									Yearly <span className="text-teal-500">(-20%)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Basic price */}
				<div className="px-6 flex flex-col justify-end">
					<div className="grow pb-4 mb-4 border-b border-slate-800">
						<div className="text-base font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-0.5">
							Basic
						</div>
						<div className="mb-1">
							<span className="text-lg font-medium text-slate-500">$</span>
							<span className="text-3xl font-bold text-slate-50">
								{annual ? "2400" : "3000"}
							</span>
							<span className="text-sm text-slate-600 font-medium">/mo</span>
						</div>
						<div className="text-slate-500">
							Unlimited UI/UX design requests.
						</div>
					</div>
					<div className="pb-4 border-b border-slate-800">
						<a
							className="btn-sm text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
							href="#0"
						>
							Get Started{" "}
							<ArrowRightIcon className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 w-4 h-4" />
						</a>
					</div>
				</div>
				{/* Pro price */}
				<div className="px-6 flex flex-col justify-end">
					<div className="grow pb-4 mb-4 border-b border-slate-800">
						<div className="text-base font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-0.5">
							Pro
						</div>
						<div className="mb-1">
							<span className="text-lg font-medium text-slate-500">$</span>
							<span className="text-3xl font-bold text-slate-50">
								{annual ? "4000" : "5000"}
							</span>
							<span className="text-sm text-slate-600 font-medium">/mo</span>
						</div>
						<div className="text-slate-500">UI/UX + basic AI features.</div>
					</div>
					<div className="pb-4 border-b border-slate-800">
						<a
							className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full transition duration-150 ease-in-out group"
							href="#0"
						>
							Get Started{" "}
							<ArrowRightIcon className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 w-4 h-4" />
						</a>
					</div>
				</div>
				{/* Enterprise price */}
				<div className="px-6 flex flex-col justify-end">
					<div className="grow pb-4 mb-4 border-b border-slate-800">
						<div className="text-base font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-0.5">
							Enterprise
						</div>
						<div className="mb-1">
							<span className="text-lg font-medium text-slate-500">$</span>
							<span className="text-3xl font-bold text-slate-50">
								{annual ? "8000" : "10000"}
							</span>
							<span className="text-sm text-slate-600 font-medium">/mo</span>
						</div>
						<div className="text-slate-500">
							Full UI/UX + advanced AI suite.
						</div>
					</div>
					<div className="pb-4 border-b border-slate-800">
						<a
							className="btn-sm text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
							href="#0"
						>
							Get Started{" "}
							<ArrowRightIcon className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 w-4 h-4" />
						</a>
					</div>
				</div>
				{/* # Usage */}
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-50 font-medium mt-4">Usage</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-50 font-medium mt-4 md:hidden">
						Usage
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-50 font-medium mt-4 md:hidden">
						Usage
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-50 font-medium mt-4 md:hidden">
						Usage
					</div>
				</div>
				{/* Active Tasks */}
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-400 border-b border-slate-800">
						Active Tasks
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							1 <span className="md:hidden">Active Task</span>
						</span>
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							2 <span className="md:hidden">Active Tasks</span>
						</span>
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							3 <span className="md:hidden">Active Tasks</span>
						</span>
					</div>
				</div>
				{/* Turnaround Time */}
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-400 border-b border-slate-800">
						Turnaround Time
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							48 hours <span className="md:hidden">Turnaround</span>
						</span>
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							24-48 hours <span className="md:hidden">Turnaround</span>
						</span>
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							Priority 24 hours <span className="md:hidden">Turnaround</span>
						</span>
					</div>
				</div>
				{/* UI/UX Design Requests */}
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-400 border-b border-slate-800">
						UI/UX Design Requests
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							Unlimited <span className="md:hidden">UI/UX Requests</span>
						</span>
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							Unlimited <span className="md:hidden">UI/UX Requests</span>
						</span>
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							Unlimited <span className="md:hidden">UI/UX Requests</span>
						</span>
					</div>
				</div>
				{/* Basic AI Features */}
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-400 border-b border-slate-800">
						Basic AI Features
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400 max-md:hidden" />
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							<span className="md:hidden">
								Basic AI (Chatbots, Personalization)
							</span>
						</span>
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							<span className="md:hidden">
								Basic AI (Chatbots, Personalization)
							</span>
						</span>
					</div>
				</div>
				{/* Advanced AI Features */}
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-400 border-b border-slate-800">
						Advanced AI Features
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400 max-md:hidden" />
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400 max-md:hidden" />
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							<span className="md:hidden">Advanced AI (Analytics, ML)</span>
						</span>
					</div>
				</div>
				{/* Support */}
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-50 font-medium mt-4">Support</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-50 font-medium mt-4 md:hidden">
						Support
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-50 font-medium mt-4 md:hidden">
						Support
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-50 font-medium mt-4 md:hidden">
						Support
					</div>
				</div>
				{/* Standard Support */}
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-400 border-b border-slate-800">
						Standard Support
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							<span className="md:hidden">Standard Support</span>
						</span>
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							<span className="md:hidden">Standard Support</span>
						</span>
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							<span className="md:hidden">Standard Support</span>
						</span>
					</div>
				</div>
				{/* Priority Support */}
				<div className="px-6 flex flex-col justify-end">
					<div className="py-2 text-slate-400 border-b border-slate-800">
						Priority Support
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400 max-md:hidden" />
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							<span className="md:hidden">Priority Support</span>
						</span>
					</div>
				</div>
				<div className="px-6 flex flex-col justify-end">
					<div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
						<CheckIcon className="shrink-0 fill-purple-500 mr-3 w-4 h-4" />
						<span>
							<span className="md:hidden">Priority Support</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
