"use client";

import { PricingCard } from "@/components/blocks/pricing-card";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Pricing() {
	const [annual, setAnnual] = useState<boolean>(true);
	const router = useRouter();

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
			<PricingCard
				title="All Access Plan"
				description="Unlimited UI/UX design, Next.js web apps, and React Native mobile apps with seamless AI integrations and expert support."
				price={10000}
				features={[
					{
						title: "What’s Included",
						items: [
							"Unlimited Design & Development",
							"Next.js Web App Development",
							"React Native Mobile App Development",
							"AI Integrations & Analytics",
							"Unlimited Revisions",
							"2 Active Tasks at a Time",
						],
					},
					{
						title: "Additional Perks",
						items: [
							"Expert Team Support",
							"Flexible Subscription (Pause/Resume)",
							"Custom Branding & Strategy",
							"Optional Cloud Hosting & Management",
							"Dedicated Project Dashboard",
						],
					},
				]}
				buttonText="Join The Waitlist"
				onButtonClick={() => router.push("/waitlist")}
			/>
		</div>
	);
}
