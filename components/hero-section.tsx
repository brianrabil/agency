"use client";

import { Container } from "@/components/container";
import { HighlightText } from "@/components/typography";
import { GradientText } from "@/components/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import { RainbowButton } from "@/components/ui/rainbow-button";
import type { Config } from "@/lib/config";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

export interface HeroSectionProps {
	readonly hero: Config["hero"];
}

export function HeroSection({ hero }: HeroSectionProps) {
	const { theme } = useTheme();
	const [color, setColor] = useState("#ffffff");

	useEffect(() => {
		setColor(theme === "dark" ? "#ffffff" : "#000000");
	}, [theme]);

	return (
		<section className="bg-background py-16 md:py-20 lg:py-24 relative">
			{/* Main Content */}
			<Container className="grid grid-cols-1 md:gap-8 lg:gap-16">
				{/* Text Section */}
				<div className="flex flex-col gap-y-12 md:gap-y-8 my-auto z-10 max-w-5xl justify-center items-center mx-auto">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						{hero.badge && (
							<div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
								{hero.badge}
							</div>
						)}
					</div>
					<h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl text-foreground text-center">
						<GradientText>{hero.heading}</GradientText>
					</h1>
					<p className="mt-8 text-center text-pretty text-lg font-medium text-foreground sm:text-xl/8">
						{hero.description}
					</p>

					<div className="flex flex-col items-center justify-center md:flex-row md:justify-start gap-x-8 gap-y-12">
						<RainbowButton>
							<Avatar className="mr-2 h-5 w-5">
								<AvatarImage
									className="h-5 w-5"
									src="https://github.com/shadcn.png"
								/>
								<AvatarFallback>BR</AvatarFallback>
							</Avatar>
							Book a 30-minute call
						</RainbowButton>
						<div className="flex gap-x-4">
							{/* Social Media Icons */}
							{/* <Button
								asChild
								type="button"
								variant="outline"
								size="icon"
								className="h-10 w-10"
							>
								<SocialIcon
									fgColor="currentColor"
									bgColor="transparent"
									className="max-h-10 max-w-10"
									url={config.social.x.href}
								/>
							</Button> */}
							{/* <Button
								type="button"
								variant="outline"
								size="icon"
								asChild
								className="h-10 w-10"
							>
								<SocialIcon
									fgColor="currentColor"
									bgColor="transparent"
									className="max-h-10 max-w-10"
									url={config.social.github.href}
								/>
							</Button> */}
						</div>
					</div>
				</div>
			</Container>
			<Particles
				className="absolute inset-0"
				quantity={100}
				ease={80}
				color={color}
				refresh
			/>
		</section>
	);
}
