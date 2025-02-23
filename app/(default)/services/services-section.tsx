import Particles from "@/components/particles";
import Illustration02 from "@/public/images/page-illustration-02.svg";
import Illustration from "@/public/images/page-illustration.svg";
import Image from "next/image";

export default function ServicesSection() {
	return (
		<section className="relative">
			{/* Illustration 02 */}
			<div
				className="md:block absolute left-1/2 -translate-x-1/2 bottom-0 -mb-16 blur-2xl opacity-90 pointer-events-none -z-10"
				aria-hidden="true"
			>
				<Image
					src={Illustration02}
					className="max-w-none"
					width={1440}
					height={427}
					alt="Page Illustration 02"
				/>
			</div>

			{/* Opacity layer */}
			<div
				className="absolute inset-0 bg-slate-900 opacity-60 -z-10"
				aria-hidden="true"
			/>

			{/* Radial gradient */}
			<div
				className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
				aria-hidden="true"
			>
				<div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30" />
				<div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70" />
			</div>

			{/* Particles animation */}
			<Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

			{/* Illustration */}
			<div
				className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10"
				aria-hidden="true"
			>
				<Image
					src={Illustration}
					className="max-w-none"
					width={1440}
					height={427}
					alt="Page Illustration"
				/>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-32 md:pt-40">
					{/* Section header */}
					<div className="text-center pb-12 md:pb-20">
						<div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
							Unlimited Possibilities
						</div>
						<h1 className="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
							Services Built for You
						</h1>
						<div className="max-w-3xl mx-auto">
							<p className="text-lg text-slate-400">
								From stunning UI/UX design to powerful AI solutions, Zendrel
								delivers everything you need under one subscription—fast,
								flexible, and tailored to your vision.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
