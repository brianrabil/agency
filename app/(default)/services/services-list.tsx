import ServiceImg01 from "@/public/images/integrations-01.svg"; // Placeholder - replace with UI/UX-specific icons
import ServiceImg02 from "@/public/images/integrations-02.svg";
import ServiceImg03 from "@/public/images/integrations-03.svg";
import ServiceImg04 from "@/public/images/integrations-04.svg";
import ServiceImg05 from "@/public/images/integrations-05.svg";
import ServiceImg06 from "@/public/images/integrations-06.svg";
import ServiceImg07 from "@/public/images/integrations-07.svg";
import ServiceImg08 from "@/public/images/integrations-08.svg";
import Star from "@/public/images/star.svg";
import Image from "next/image";
import Link from "next/link";

export default function ServicesList() {
	const items = [
		{
			id: "ui-ux-design",
			img: ServiceImg01,
			name: "UI/UX Design",
			description:
				"Unlimited requests for web, mobile, and app designs—delivered in 24-48 hours with unlimited revisions.",
			link: "/services/ui-ux-design",
			featured: true,
			category: "Design",
		},
		{
			id: "prototyping",
			img: ServiceImg04,
			name: "Prototyping & Wireframing",
			description:
				"Rapid prototyping and wireframing to bring your ideas to life, refined through iterative feedback.",
			link: "/services/prototyping",
			featured: true,
			category: "Design",
		},
		{
			id: "branding",
			img: ServiceImg05,
			name: "Branding & Graphic Design",
			description:
				"Create a cohesive brand identity with logos, illustrations, and graphics—all under one subscription.",
			link: "/services/branding",
			featured: true,
			category: "Design",
		},
		{
			id: "design-systems",
			img: ServiceImg06,
			name: "Design System Development",
			description:
				"Build scalable design systems to ensure consistency across your digital products.",
			link: "/services/design-systems",
			featured: true,
			category: "Design",
		},
		{
			id: "user-testing",
			img: ServiceImg07,
			name: "User Testing & Research",
			description:
				"Validate your designs with user testing and research to optimize usability and engagement.",
			link: "/services/user-testing",
			featured: true,
			category: "Design",
		},
		{
			id: "motion-design",
			img: ServiceImg08,
			name: "Motion Design & Animation",
			description:
				"Enhance your interfaces with custom animations and micro-interactions for a dynamic user experience.",
			link: "/services/motion-design",
			featured: true,
			category: "Design",
		},
		{
			id: "ai-chatbots",
			img: ServiceImg02,
			name: "AI-Powered Chatbots",
			description:
				"Custom-built chatbots to enhance user engagement, powered by advanced AI for seamless interactions.",
			link: "/services/ai-chatbots",
			featured: true,
			category: "AI Solutions",
		},
		{
			id: "ai-analytics",
			img: ServiceImg03,
			name: "AI Analytics",
			description:
				"Leverage predictive analytics and machine learning to gain insights and optimize your business strategy.",
			link: "/services/ai-analytics",
			featured: true,
			category: "AI Solutions",
		},
	];

	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pb-12 md:pb-20">
					{/* Topbar */}
					<div className="flex justify-between items-center py-6 border-b [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1] space-x-8 overflow-x-scroll no-scrollbar">
						<ul className="flex flex-nowrap text-sm font-medium space-x-8">
							<li>
								<a
									className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
									href="#design"
								>
									<svg
										className="fill-slate-500"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
									>
										<title>Design</title>
										<path d="M7.7 7.3l-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L5.6 8l-4.3 4.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4ZM8 12h7v2H8z" />
									</svg>
									<span>Design</span>
								</a>
							</li>
							<li>
								<a
									className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
									href="#ai-solutions"
								>
									<svg
										className="fill-slate-500"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
									>
										<title>AI Solutions</title>
										<path d="M10 15c-.4 0-.8-.3-.9-.7L5.8 4.6 3.9 8.4c-.2.4-.5.6-.9.6H0V7h2.4l2.7-5.4c.2-.4.6-.6 1-.6s.7.3.9.7l3.2 9.7 1.9-3.8c.2-.4.5-.6.9-.6h3v2h-2.4l-2.7 5.4c-.2.4-.5.6-.9.6Z" />
									</svg>
									<span>AI Solutions</span>
								</a>
							</li>
						</ul>
					</div>

					{/* Cards */}
					<div>
						{/* Section #1 */}
						<div className="mt-12 md:mt-16">
							<h3
								id="design"
								className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8"
							>
								Design Services
							</h3>
							<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
								{items.map((item) =>
									item.category === "Design" ? (
										<ServiceCard item={item} key={item.id} />
									) : null,
								)}
							</div>
						</div>
						{/* Section #2 */}
						<div className="mt-12 md:mt-16">
							<h3
								id="ai-solutions"
								className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8"
							>
								AI Solutions
							</h3>
							<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
								{items.map((item) =>
									item.category === "AI Solutions" ? (
										<ServiceCard item={item} key={item.id} />
									) : null,
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

type CardProps = {
	item: {
		id: string;
		category: string;
		img: string;
		name: string;
		featured: boolean;
		link: string;
		description: string;
	};
};

export function ServiceCard({ item }: CardProps) {
	return (
		<div className="bg-linear-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
			<div className="flex flex-col p-5 h-full">
				<div className="flex items-center space-x-3 mb-3">
					<div className="relative">
						<Image src={item.img} width="40" height="40" alt={item.name} />
						{item.featured && (
							<Image
								className="absolute top-0 -right-1"
								src={Star}
								width={16}
								height={16}
								alt="Star"
								aria-hidden="true"
							/>
						)}
					</div>
					<Link
						className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0"
						href={item.link}
					>
						{item.name}
					</Link>
				</div>
				<div className="grow">
					<div className="text-sm text-slate-400">{item.description}</div>
				</div>
			</div>
		</div>
	);
}
