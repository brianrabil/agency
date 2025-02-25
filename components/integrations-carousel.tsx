"use client";

// import Avatar01 from "@/public/images/avatar-01.jpg";
// import Avatar02 from "@/public/images/avatar-02.jpg";
// import Avatar03 from "@/public/images/avatar-03.jpg";
// import Avatar04 from "@/public/images/avatar-04.jpg";
// import Avatar05 from "@/public/images/avatar-05.jpg";
// import Avatar06 from "@/public/images/avatar-06.jpg";
// import Avatar07 from "@/public/images/avatar-07.jpg";
// import Avatar08 from "@/public/images/avatar-08.jpg";
// import Avatar09 from "@/public/images/avatar-09.jpg";
// import Avatar10 from "@/public/images/avatar-10.jpg";
// import Avatar11 from "@/public/images/avatar-11.jpg";
// import Avatar12 from "@/public/images/avatar-12.jpg";
// import Avatar13 from "@/public/images/avatar-13.jpg";
// import Avatar14 from "@/public/images/avatar-14.jpg";
// import Avatar15 from "@/public/images/avatar-15.jpg";
// import Avatar16 from "@/public/images/avatar-16.jpg";
// import Avatar17 from "@/public/images/avatar-17.jpg";
// import Avatar18 from "@/public/images/avatar-18.jpg";
// import Avatar19 from "@/public/images/avatar-19.jpg";
// import IntegrationImg01 from "@/public/images/integrations-01.svg";
// import IntegrationImg02 from "@/public/images/integrations-02.svg";
// import IntegrationImg03 from "@/public/images/integrations-03.svg";
// import IntegrationImg04 from "@/public/images/integrations-04.svg";
// import IntegrationImg05 from "@/public/images/integrations-05.svg";
import Star from "@/public/images/star.svg";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ClipboardListIcon,
	GithubIcon,
	StarIcon,
	TableIcon,
	WrenchIcon,
	ZapIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IntegrationItem {
	id: string;
	Icon: LucideIcon;
	name: string;
	description: string;
	starCount: string;
}

export default function IntegrationsCarousel() {
	const integrations: IntegrationItem[] = [
		{
			id: "retool",
			Icon: WrenchIcon,
			name: "Retool",
			description:
				"Zendrel integrates with Retool to streamline UI prototyping and internal tool development, boosting your workflow efficiency.",
			starCount: "2.3K",
		},
		{
			id: "zapier",
			Icon: ZapIcon,
			name: "Zapier",
			description:
				"Zendrel connects with Zapier to automate design workflows and AI task triggers, saving you time and effort.",
			starCount: "4.5K",
		},
		{
			id: "airtable",
			Icon: TableIcon,
			name: "Airtable",
			description:
				"Zendrel syncs with Airtable to organize design assets and AI project data, keeping everything in one place.",
			starCount: "4.7K",
		},
		{
			id: "jira",
			Icon: ClipboardListIcon,
			name: "Jira",
			description:
				"Zendrel links with Jira to track design tasks and AI feature development, aligning with your project management.",
			starCount: "4.4K",
		},
		{
			id: "gitlab",
			Icon: GithubIcon,
			name: "GitLab",
			description:
				"Zendrel integrates with GitLab to streamline code handoffs and AI-driven front-end development.",
			starCount: "3.4K",
		},
	];

	return (
		<>
			<div className="stellar-carousel swiper-container group">
				<div className="swiper-wrapper w-fit">
					{integrations.map((integration) => (
						<div
							key={integration.id}
							className="swiper-slide h-auto bg-linear-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"
						>
							<div className="flex flex-col p-5 h-full">
								<div className="flex items-center space-x-3 mb-3">
									<div className="relative">
										<integration.Icon className="w-10 h-10 text-slate-200" />
										<Image
											className="absolute top-0 -right-1"
											src={Star}
											width={16}
											height={16}
											alt="Star"
											aria-hidden="true"
										/>
									</div>
									<Link
										className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0"
										href="/integrations/single-post"
									>
										{integration.name}
									</Link>
								</div>
								<div className="grow mb-4">
									<div className="text-sm text-slate-400">
										{integration.description}
									</div>
								</div>
								<div className="flex justify-between">
									{/* <div className="flex -space-x-3 -ml-0.5">
										{integration.avatars.map((avatar, index) => (
											<Image
												key={`${integration.id}-avatar-${index}`}
												className="rounded-full border-2 border-slate-800 box-content"
												src={avatar}
												width={24}
												height={24}
												alt={`Avatar ${index + 1}`}
											/>
										))}
									</div> */}
									<button
										type="button"
										className="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors"
									>
										<span className="sr-only">Like</span>
										<StarIcon className="fill-slate-500 w-4 h-4" />
										<span>{integration.starCount}</span>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Arrows */}
			<div className="flex py-8 justify-end">
				<button
					type="button"
					className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group"
				>
					<span className="sr-only">Previous</span>
					<ChevronLeftIcon className="w-4 h-4 text-slate-500 group-hover:text-purple-500 transition duration-150 ease-in-out" />
				</button>
				<button
					type="button"
					className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group"
				>
					<span className="sr-only">Next</span>
					<ChevronRightIcon className="w-4 h-4 text-slate-500 group-hover:text-purple-500 transition duration-150 ease-in-out" />
				</button>
			</div>
		</>
	);
}
