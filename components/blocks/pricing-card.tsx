"use client";

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "framer-motion";
import { ArrowRightIcon, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PricingFeature {
	title: string;
	items: string[];
}

interface PricingCardProps {
	title: string;
	description: string;
	price: number;
	originalPrice?: number;
	features: PricingFeature[];
	buttonText?: string;
	onButtonClick?: () => void;
}

export function PricingCard({
	title,
	description,
	price,
	originalPrice,
	features,
	buttonText = "Get Started",
	onButtonClick,
}: PricingCardProps) {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true, amount: 0.2 });
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (isInView && !hasAnimated) {
			setHasAnimated(true);
		}
	}, [isInView, hasAnimated]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20,
			},
		},
	};

	const listItemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10,
			},
		},
	};

	return (
		<motion.section
			ref={containerRef}
			className="container"
			initial="hidden"
			animate={hasAnimated ? "visible" : "hidden"}
			variants={containerVariants}
		>
			<Card className="relative mx-auto w-full max-w-6xl overflow-hidden">
				<div className="flex flex-col lg:flex-row">
					<motion.div
						className="flex flex-col justify-between p-6 lg:w-2/5 lg:p-10"
						variants={itemVariants}
					>
						<div>
							<CardHeader className="p-0">
								<div className="flex items-start justify-between">
									<div>
										<CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-0.5">
											{title}
										</CardTitle>
										<CardDescription className="mt-2">
											{description}
										</CardDescription>
									</div>
								</div>
							</CardHeader>
							<motion.div className="mt-6 space-y-4" variants={itemVariants}>
								<div className="flex items-baseline">
									<span className="text-2xl font-medium text-slate-500">$</span>
									<span className="text-5xl font-bold text-slate-50">
										{price.toLocaleString()}
									</span>
									<span className="text-2xl text-slate-500">/mo</span>
									{originalPrice && (
										<span className="ml-2 text-xl text-muted-foreground line-through">
											${originalPrice}
										</span>
									)}
								</div>
								{/* <span className="block text-sm text-muted-foreground">
									Cancel or pause anytime
								</span> */}
							</motion.div>
						</div>
						<motion.div className="mt-8" variants={itemVariants}>
							<a
								className="btn-sm text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
								href="/waitlist"
							>
								Get Started{" "}
								<ArrowRightIcon className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 w-4 h-4" />
							</a>
						</motion.div>
					</motion.div>
					<Separator className="lg:my-6 lg:hidden" />
					<motion.div
						className="bg-muted/50 p-6 lg:w-3/5 lg:p-10"
						variants={itemVariants}
					>
						<div className="space-y-6">
							{features.map((feature) => (
								<div key={feature.title}>
									<h3 className="mb-4 text-lg font-semibold">
										{feature.title}:
									</h3>
									<ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
										{feature.items.map((item) => (
											<motion.li
												key={item}
												className="flex items-center"
												variants={listItemVariants}
												custom={
													feature.items.indexOf(item) +
													features.indexOf(feature) * feature.items.length
												}
											>
												<Check className="mr-2 h-4 w-4 text-slate-400" />
												<span className="text-sm">{item}</span>
											</motion.li>
										))}
									</ul>
									{features.indexOf(feature) < features.length - 1 && (
										<Separator className="my-6" />
									)}
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</Card>
		</motion.section>
	);
}
