"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/card";
import { Container } from "@/components/container";
import { TypographyH2, TypographyLead } from "@/components/typography";
import { Button } from "@/components/ui/button";
import type { Config } from "@/lib/config";
import { ArrowRightIcon } from "lucide-react";
import { AppWindowIcon, PaintbrushIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// SECTION - ProjectCard

export interface ProjectCardProps {
	projects: Config["projects"];
}

function getCategoryIcon(
	category: Config["projects"]["items"][number]["category"],
) {
	switch (category) {
		case "Web App":
			return <AppWindowIcon className="w-5 h-5" />;
		case "UI/UX":
			return <PaintbrushIcon className="w-5 h-5" />;
		default:
			throw new Error(`Unknown project category: ${category}`);
	}
}

export function ProjectCard({
	project,
}: { project: Config["projects"]["items"][number] }) {
	return (
		<Card innerClassName="flex flex-col">
			<CardHeader>
				<div className="flex flex-col w-full h-full rounded-xl object-cover overflow-hidden">
					<Image
						src={project.image}
						alt={project.title}
						width={600}
						height={400}
						className="w-full h-full"
					/>
				</div>
			</CardHeader>
			<CardContent className="md:justify-center md:gap-y-4">
				<div className="text-muted-foreground text-sm font-medium inline-flex items-center gap-x-1.5">
					{getCategoryIcon(project.category)} {project.category}
				</div>
				<CardTitle className="text-xl mb-2 md:mb-0 font-bold">
					{project.title}
				</CardTitle>
				<CardDescription className="text-foreground text-base items-center flex">
					{project.description}
				</CardDescription>
			</CardContent>
		</Card>
	);
}

// SECTION - ProjectsSection

export interface ProjectsSectionProps {
	projects: Config["projects"];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
	return (
		<section className="bg-background py-16 md:py-20 lg:py-24">
			<Container>
				<div className="text-center mb-12">
					<TypographyH2 id="projects">Check out my latest work</TypographyH2>
					<TypographyLead className="max-w-2xl">
						My goal is to create effective digital experiences that make
						people's lives easier and better. I hope my work is a reflection of
						this.
					</TypographyLead>
				</div>
				<div className="grid grid-cols-3 gap-8">
					{projects.items.map((work) => (
						<ProjectCard key={work.title} project={work} />
					))}
				</div>
				<div className="flex justify-center mt-16">
					<Button type="button" variant="outline" size="lg" asChild>
						<Link href="/projects">
							View all projects
							<ArrowRightIcon className="w-4 h-4 ml-2" />
						</Link>
					</Button>
				</div>
			</Container>
		</section>
	);
}
