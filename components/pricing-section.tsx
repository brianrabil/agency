"use client";

import { Container } from "@/components/container";
import { TypographyH2, TypographyLead } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import type { config } from "@/lib/config";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface PricingSectionProps {
	pricing: typeof config.pricing;
}

export function PricingSection({ pricing }: PricingSectionProps) {
	return (
		<section className="bg-white py-24 sm:py-32">
			<Container>
				<div className="mx-auto max-w-4xl text-center">
					<TypographyH2 id="pricing">{pricing.header.title}</TypographyH2>
					<TypographyLead>{pricing.header.description}</TypographyLead>
				</div>
				<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
					{pricing.tiers.map((tier) => (
						<div
							key={tier.id}
							className={cn(
								tier.mostPopular ? "ring-2 ring-primary" : "ring-1 ring-border",
								"rounded-3xl p-8",
							)}
						>
							<h3
								id={tier.id}
								className={cn(
									tier.mostPopular ? "text-indigo-600" : "text-gray-900",
									"text-lg/8 font-semibold",
								)}
							>
								{tier.name}
							</h3>
							<p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
							<p className="mt-6 flex items-baseline gap-x-1">
								<span className="text-4xl font-semibold tracking-tight text-gray-900">
									{tier.price}
								</span>
								<span className="text-sm/6 font-semibold text-gray-600">
									{tier.frequency}
								</span>
							</p>
							<Link href={tier.href} passHref>
								<Button
									variant={tier.mostPopular ? "default" : "outline"}
									className={cn("mt-6 w-full")}
								>
									Buy plan
								</Button>
							</Link>

							<ul className="mt-8 space-y-3 text-sm/6 text-gray-600">
								{tier.features.map((feature) => (
									<li key={feature} className="flex gap-x-3">
										<CheckIcon
											aria-hidden="true"
											className="h-5 w-5 flex-none text-primary"
										/>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
