import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/card";
import { Container } from "@/components/container";
import { HighlightText } from "@/components/typography";
import type { Config } from "@/lib/config";
import Image from "next/image";
import type React from "react";

export interface ToolsSectionProps {
	readonly tools: Config["tools"];
}

export function ToolsSection({ tools }: ToolsSectionProps) {
	return (
		<section className="bg-background py-24">
			<Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				{/* Left Section: Image and Badge */}
				<div className="relative col-span-1">
					<Image
						src="https://placehold.co/743x1048"
						alt="Placeholder profile image"
						width={743}
						height={1048}
						className="h-full w-full object-cover rounded-lg overflow-hidden"
					/>
					{/* Badge */}
					<div className="absolute bottom-4 left-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
						<p className="font-semibold">55+ Clients have loved my work</p>
						<div className="flex mt-2">
							{/* Avatars Placeholder */}
							<img
								src="/path-to-avatar1.jpg"
								alt="Client 1"
								className="w-8 h-8 rounded-full border-2 border-white -ml-2"
							/>
							<img
								src="/path-to-avatar2.jpg"
								alt="Client 2"
								className="w-8 h-8 rounded-full border-2 border-white -ml-2"
							/>
							<img
								src="/path-to-avatar3.jpg"
								alt="Client 3"
								className="w-8 h-8 rounded-full border-2 border-white -ml-2"
							/>
							<img
								src="/path-to-avatar4.jpg"
								alt="Client 4"
								className="w-8 h-8 rounded-full border-2 border-white -ml-2"
							/>
						</div>
					</div>
				</div>

				{/* Right Section: Tech Stack */}
				<div className="col-span-1">
					<h2 className="text-4xl font-bold text-gray-900">
						A simple stack that you can{" "}
						<HighlightText>always trust</HighlightText>
					</h2>
					<p className="mt-4 text-foreground">
						I've been a software developer for over 13 years, and while my stack
						has shifted over the years, I kept coming back to the same
						technologies. The following is the stack that I've developed & honed
						over the years as a software developer.
					</p>

					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{tools.items
							.filter((tech) => tech.featured)
							.map((tech) => (
								<Card key={tech.name}>
									<CardHeader>
										<div className="flex items-center gap-4">
											<Image
												src={tech.logo}
												alt={`${tech.name} logo`}
												width={28}
												height={28}
											/>
											<div>
												<CardTitle>{tech.name}</CardTitle>
												<CardDescription>{tech.description}</CardDescription>
											</div>
										</div>
									</CardHeader>
								</Card>
							))}
					</div>
				</div>
			</Container>
		</section>
	);
}
