import Recruitment01 from "@/public/images/recruitment-01.jpg";
import Recruitment02 from "@/public/images/recruitment-02.jpg";
import Recruitment03 from "@/public/images/recruitment-03.jpg";
import Recruitment04 from "@/public/images/recruitment-04.jpg";
import { ArrowRightIcon, HeartIcon, TargetIcon, ZapIcon } from "lucide-react"; // Lucide icons with "Icon" suffix
import Image from "next/image";

interface Position {
	id: string;
	title: string;
	location: string;
	link: string;
}

interface Item {
	id: string;
	area: string;
	positions: Position[];
}

export default function Recruitment() {
	const items: Item[] = [
		{
			id: "design",
			area: "Design",
			positions: [
				{
					id: "design-intern",
					title: "UI/UX Design Intern",
					location: "Remote / Global",
					link: "#0",
				},
				{
					id: "senior-designer",
					title: "Senior UI/UX Designer",
					location: "Remote / Global",
					link: "#0",
				},
				{
					id: "lead-designer",
					title: "Lead Product Designer",
					location: "Remote / Global",
					link: "#0",
				},
			],
		},
		{
			id: "ai-engineering",
			area: "AI Engineering",
			positions: [
				{
					id: "ai-engineer",
					title: "AI/ML Engineer",
					location: "Remote / Global",
					link: "#0",
				},
				{
					id: "senior-ai-dev",
					title: "Senior AI Developer",
					location: "Remote / Global",
					link: "#0",
				},
			],
		},
		{
			id: "project-management",
			area: "Project Management",
			positions: [
				{
					id: "design-pm",
					title: "Design Project Manager",
					location: "Remote / Global",
					link: "#0",
				},
				{
					id: "ai-workflow",
					title: "AI Workflow Specialist",
					location: "Remote / Global",
					link: "#0",
				},
			],
		},
	];

	return (
		<section className="relative">
			{/* Blurred shape */}
			<div
				className="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10"
				aria-hidden="true"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
					<title>Recruitment illustration</title>
					<defs>
						<linearGradient
							id="bs3-a"
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
						fill="url(#bs3-a)"
						fillRule="evenodd"
						d="m410 0 461 369-284 58z"
						transform="matrix(1 0 0 -1 -410 427)"
					/>
				</svg>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
							Join the Zendrel Team
						</h2>
						<p className="text-lg text-slate-400">
							We're a passionate crew of designers and innovators, crafting
							cutting-edge UI/UX and AI solutions to delight our clients.
						</p>
					</div>

					{/* Icons with text */}
					<div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-xs mx-auto md:max-w-none -m-5">
						{/* Block #1 */}
						<div className="text-center p-5">
							<div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(var(--color-slate-800),var(--color-slate-800))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] mb-3">
								<HeartIcon className="fill-slate-200 w-6 h-6 opacity-80" />
							</div>
							<div className="font-bold text-slate-100 mb-1">Passionate</div>
							<p className="text-sm text-slate-400">
								You love creating digital experiences and thrive on bringing
								ideas to life.
							</p>
						</div>
						{/* Block #2 */}
						<div className="text-center p-5">
							<div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(var(--color-slate-800),var(--color-slate-800))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] mb-3">
								<ZapIcon className="fill-slate-200 w-6 h-6 opacity-80" />
							</div>
							<div className="font-bold text-slate-100 mb-1">Energetic</div>
							<p className="text-sm text-slate-400">
								You bring energy and enthusiasm to every project, pushing
								boundaries with speed.
							</p>
						</div>
						{/* Block #3 */}
						<div className="text-center p-5">
							<div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(var(--color-slate-800),var(--color-slate-800))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] mb-3">
								<TargetIcon className="fill-slate-200 w-6 h-6 opacity-80" />
							</div>
							<div className="font-bold text-slate-100 mb-1">Achiever</div>
							<p className="text-sm text-slate-400">
								You aim high, delivering results that exceed expectations every
								time.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Images */}
			<div className="max-w-[1440px] mx-auto px-4 md:px-0">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 md:-mx-5">
					<Image
						className="w-full aspect-16/10 object-cover rounded-lg"
						src={Recruitment01}
						width={352}
						height={220}
						alt="Recruitment 01"
					/>
					<Image
						className="w-full aspect-16/10 object-cover rounded-lg"
						src={Recruitment02}
						width={352}
						height={220}
						alt="Recruitment 02"
					/>
					<Image
						className="w-full aspect-16/10 object-cover rounded-lg"
						src={Recruitment03}
						width={352}
						height={220}
						alt="Recruitment 03"
					/>
					<Image
						className="w-full aspect-16/10 object-cover rounded-lg"
						src={Recruitment04}
						width={352}
						height={220}
						alt="Recruitment 04"
					/>
				</div>
			</div>

			{/* Positions */}
			<div className="relative px-4 sm:px-6">
				{/* Blurred shape */}
				<div
					className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/3 ml-24 blur-2xl opacity-40 pointer-events-none"
					aria-hidden="true"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
						<title>Recruitment illustration</title>
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

				<div className="max-w-3xl mx-auto py-12 md:py-20">
					<h3 className="h3 inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8 md:pb-16">
						Open Positions
					</h3>
					<div className="space-y-8">
						{items.map((item) => (
							<div key={item.id}>
								<h4 className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
									{item.area}
								</h4>
								<ul className="divide-y divide-slate-800">
									{item.positions.map((position) => (
										<li
											key={position.id}
											className="flex flex-col md:flex-row flex-wrap justify-between py-5"
										>
											<span className="font-medium text-slate-50 mr-2">
												{position.title}
											</span>
											<a
												className="inline-flex text-sm font-medium text-purple-500 group"
												href={position.link}
											>
												{position.location}{" "}
												<ArrowRightIcon className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 w-4 h-4" />
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
