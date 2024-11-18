import { BentoSection } from "@/components/bento-section";
import { BlogSection } from "@/components/blog-section";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { ProjectsSection } from "@/components/projects-section";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ToolsSection } from "@/components/tools-section";
import { HighlightText } from "@/components/typography";
import { config } from "@/lib/config";
import type { Viewport } from "next";
import Image from "next/image";

export const viewport: Viewport = {
	themeColor: "black",
};

export default async function App() {
	return (
		<>
			<HeroSection hero={config.hero} />

			<section className="py-16 md:py-20 lg:py-24 bg-secondary">
				<Container>
					{/* Left Section - Features List */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12">
						<div className="relative md:col-span-1">
							<h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5 md:mb-0">
								I'm your <HighlightText>all-in-one</HighlightText> project
								solution
							</h2>
						</div>

						<div className="md:col-span-1 lg:col-span-2 justify-self-end">
							<p className="text-foreground text-xl leading-normal max-w-2xl">
								Experience the advantage of an all-inclusive project solution,
								where excellence, speed, and responsiveness converge to ensure
								the highest quality outcome.
							</p>
						</div>

						<div className="md:col-span-1 my-8 md:my-0">
							{/* Feature Items */}
							<div className="mt-8 flex flex-col space-y-16">
								<div className="flex items-start space-x-8">
									<div className="w-20 h-20 shadow-sm bg-background aspect-square text-foreground rounded-full flex justify-center items-center">
										{/* Icon Placeholder - Replace with an actual icon */}
										<span className="text-3xl">🏆</span>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-foreground leading-normal">
											Excellence
										</h3>
										<p className="text-foreground text-lg font-normal mt-2 leading-normal">
											I take pride in doing things well. All client work is done
											with the best quality possible.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-8">
									<div className="w-20 h-20 shadow-sm bg-background aspect-square text-foreground rounded-full flex justify-center items-center">
										<span className="text-2xl">⏱</span>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-foreground leading-normal">
											Speed
										</h3>
										<p className="text-foreground text-lg font-normal mt-2 leading-normal">
											I like to work hard and fast. I know how important
											deadlines are to my clients.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-8">
									<div className="w-20 h-20 shadow-sm bg-background aspect-square text-foreground rounded-full flex justify-center items-center">
										<span className="text-2xl">📞</span>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-foreground leading-normal">
											Responsiveness
										</h3>
										<p className="text-foreground text-lg font-normal mt-2 leading-normal">
											You can rely on me to be responsive and clear whenever we
											work together.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right Section - Image with Stats and Download Button */}
						<div className="relative mt-8 lg:my-0 lg:col-span-2 justify-self-end">
							<div className="relative flex flex-col items-center h-auto w-auto">
								{/* Experience and Projects Stats */}
								<div className="flex flex-nowrap text-center lg:text-left -mt-10 text-nowrap items-center gap-x-4 lg:gap-x-8 bg-primary text-primary-foreground py-4 px-8 rounded-xl shadow-xl">
									<div className="w-1/2">
										<p className="text-2xl font-semibold">8</p>
										<p className="text-sm">Years of experience</p>
									</div>
									<div className="h-full w-px bg-primary-foreground opacity-50" />
									<div className="w-1/2">
										<p className="text-2xl font-semibold">150+</p>
										<p className="text-sm">Projects completed</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* <section className="bg-background py-16">
				<div className="container mx-auto">
					<h3 className="text-center text-xl font-semibold mb-8">
						The tools I use on my day-to-day
					</h3>

					<div className="overflow-x-auto">
						<div className="flex space-x-8 justify-center items-center flex-wrap">
							{config.tools.items.map((tool) => (
								<div
									key={tool.name}
									className="flex-shrink-0 w-20 h-20 p-4 rounded-full  flex justify-center items-center  transition m-2"
								>
									<Image
										src={tool.logo}
										alt={`${tool.name} logo`}
										width={24}
										height={24}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section> */}
			<BentoSection />
			<ToolsSection tools={config.tools} />
			<ProjectsSection projects={config.projects} />
			<PricingSection pricing={config.pricing} />
			{/* <TestimonialsSection testimonials={config.testimonials} /> */}
			<FAQSection faqs={config.faqs} />
			<TeamSection />
			<CtaSection />
			{/* <BlogSection posts={config.posts} /> */}
		</>
	);
}
