import Particles from "@/components/particles";
import Icon01 from "@/public/images/pricing-icon-01.svg";
import Icon02 from "@/public/images/pricing-icon-02.svg";
import Icon03 from "@/public/images/pricing-icon-03.svg";
import Icon04 from "@/public/images/pricing-icon-04.svg";
import Icon05 from "@/public/images/pricing-icon-05.svg";
import Icon06 from "@/public/images/pricing-icon-06.svg";
import Icon07 from "@/public/images/pricing-icon-07.svg";
import IllustrationTop from "@/public/images/pricing-illustration-top.svg";
import Illustration from "@/public/images/pricing-illustration.svg";
import { CheckCircleIcon } from "lucide-react";
import Image from "next/image";

export default function Features05() {
	return (
		<section className="relative">
			{/* Particles animation */}
			<div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-64 h-64 -mt-24">
				<Particles
					className="absolute inset-0 -z-10"
					quantity={6}
					staticity={30}
				/>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pb-12 md:pb-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12">
						<h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
							Stop Overpaying for Design & AI
						</h2>
						<p className="text-lg text-slate-400">
							Zendrel offers unlimited UI/UX and AI solutions at a flat rate—no
							hidden fees, no upsells, just results.
						</p>
					</div>

					{/* Rings illustration */}
					<div className="text-center pb-8">
						<div className="inline-flex items-center justify-center relative">
							{/* Particles animation */}
							<Particles className="absolute inset-0 -z-10" quantity={10} />
							<div className="inline-flex">
								<Image
									src={Illustration}
									width="334"
									height="334"
									alt="Features illustration"
								/>
							</div>
							<Image
								className="absolute -mt-[40%]"
								src={IllustrationTop}
								width="396"
								height="328"
								alt="Features illustration top"
								aria-hidden="true"
							/>
							<div className="absolute w-[200%] flex items-center justify-center space-x-5">
								<div className="-rotate-[4deg]">
									<Image
										className="w-11 h-11 drop-shadow-lg animate-[float_2.6s_ease-in-out_infinite] opacity-10"
										src={Icon01}
										width={80}
										height={80}
										alt="Pricing icon 01"
									/>
								</div>
								<div className="rotate-[4deg]">
									<Image
										className="w-14 h-14 drop-shadow-lg animate-[float_2.4s_ease-in-out_infinite] opacity-25"
										src={Icon02}
										width={80}
										height={80}
										alt="Pricing icon 02"
									/>
								</div>
								<div className="-rotate-[4deg]">
									<Image
										className="w-16 h-16 drop-shadow-lg animate-[float_2.2s_ease-in-out_infinite] opacity-60"
										src={Icon03}
										width={80}
										height={80}
										alt="Pricing icon 03"
									/>
								</div>
								<Image
									className="drop-shadow-lg animate-float"
									src={Icon04}
									width={80}
									height={80}
									alt="Pricing icon 04"
								/>
								<div className="rotate-[4deg]">
									<Image
										className="w-16 h-16 drop-shadow-lg animate-[float_2.2s_ease-in-out_infinite] opacity-60"
										src={Icon05}
										width={80}
										height={80}
										alt="Pricing icon 05"
									/>
								</div>
								<div className="-rotate-[4deg]">
									<Image
										className="w-14 h-14 drop-shadow-lg animate-[float_2.4s_ease-in-out_infinite] opacity-25"
										src={Icon06}
										width={80}
										height={80}
										alt="Pricing icon 06"
									/>
								</div>
								<div className="rotate-[4deg]">
									<Image
										className="w-11 h-11 drop-shadow-lg animate-[float_2.6s_ease-in-out_infinite] opacity-10"
										src={Icon07}
										width={80}
										height={80}
										alt="Pricing icon 07"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Features list */}
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{/* Card #1 */}
						<div className="bg-linear-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
							<div className="flex items-center space-x-4 p-4 h-full">
								<CheckCircleIcon className="shrink-0 text-purple-400 w-5 h-5" />
								<p className="text-sm text-slate-400">
									Built for businesses needing more than a{" "}
									<strong className="text-slate-300 font-medium">
										basic design fix
									</strong>
									—unlimited UI/UX and AI in one plan.
								</p>
							</div>
						</div>
						{/* Card #2 */}
						<div className="bg-linear-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
							<div className="flex items-center space-x-4 p-4 h-full">
								<CheckCircleIcon className="shrink-0 text-purple-400 w-5 h-5" />
								<p className="text-sm text-slate-400">
									AI-powered to{" "}
									<strong className="text-slate-300 font-medium">
										eliminate repetitive tasks
									</strong>
									—focus on growth, not grunt work.
								</p>
							</div>
						</div>
						{/* Card #3 */}
						<div className="bg-linear-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
							<div className="flex items-center space-x-4 p-4 h-full">
								<CheckCircleIcon className="shrink-0 text-purple-400 w-5 h-5" />
								<p className="text-sm text-slate-400">
									Fast support via email or chat—hear back in{" "}
									<strong className="text-slate-300 font-medium">
										hours, not days
									</strong>
									.
								</p>
							</div>
						</div>
						{/* Card #4 */}
						<div className="bg-linear-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
							<div className="flex items-center space-x-4 p-4 h-full">
								<CheckCircleIcon className="shrink-0 text-purple-400 w-5 h-5" />
								<p className="text-sm text-slate-400">
									Packed with{" "}
									<strong className="text-slate-300 font-medium">
										guides and resources
									</strong>{" "}
									to maximize your subscription.
								</p>
							</div>
						</div>
						{/* Card #5 */}
						<div className="bg-linear-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
							<div className="flex items-center space-x-4 p-4 h-full">
								<CheckCircleIcon className="shrink-0 text-purple-400 w-5 h-5" />
								<p className="text-sm text-slate-400">
									No upsells or hidden fees—just a{" "}
									<strong className="text-slate-300 font-medium">
										flat rate
									</strong>{" "}
									for unlimited access.
								</p>
							</div>
						</div>
						{/* Card #6 */}
						<div className="bg-linear-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
							<div className="flex items-center space-x-4 p-4 h-full">
								<CheckCircleIcon className="shrink-0 text-purple-400 w-5 h-5" />
								<p className="text-sm text-slate-400">
									Onboarding, resources, and{" "}
									<strong className="text-slate-300 font-medium">
										regular updates
									</strong>{" "}
									for teams of any size.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
