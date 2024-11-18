import { HighlightText } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Config } from "@/lib/config";
import {
	ArrowRightIcon,
	AwardIcon,
	CalendarIcon,
	ClockIcon,
	MapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface BlogSectionProps {
	readonly posts: Config["posts"];
}

export function BlogSection({ posts }: BlogSectionProps) {
	return (
		<section className="bg-background py-16 md:py-20 lg:py-24">
			<div className="container mx-auto">
				<div className="text-center mb-12">
					<h2 className="max-w-2xl mx-auto text-4xl md:text-5xl font-bold leading-tight text-foreground">
						<HighlightText>Thoughts</HighlightText> on design, business, and
						indie-hacking on design, business, and indie-hacking
					</h2>
				</div>
				<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					{posts.items.map((post) => (
						<div
							key={post.title}
							className="bg-card border rounded-xl overflow-hidden p-6 flex flex-col gap-y-4"
						>
							<div className="w-full h-[240px] object-cover rounded-xl overflow-hidden">
								<Image
									src={post.imageUrl}
									alt={post.title}
									width={600}
									height={400}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<Badge
									variant="outline"
									className="inline-flex items-center gap-x-0.5"
								>
									{post.category === "Review" && (
										<AwardIcon className="w-4 h-4" />
									)}
									{post.category === "Guide" && <MapIcon className="w-4 h-4" />}
									{post.category}
								</Badge>
								<h3 className="text-xl font-bold text-foreground mt-2">
									{post.title}
								</h3>
								<p className="mt-2 text-muted-foreground">{post.description}</p>
								<div className="mt-4 flex justify-start text-sm text-muted-foreground gap-x-4">
									<div className="flex items-center gap-x-2 flex-nowrap">
										<CalendarIcon className="w-4 h-4" />
										{new Date(post.date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "short",
											day: "numeric",
										})}
									</div>
									<div className="flex items-center space-x-2 gap-2 flex-nowrap">
										<ClockIcon className="w-4 h-4" />
										{post.readTime}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-center mt-16">
				<Button type="button" variant="outline" size="lg" asChild>
					<Link href="/posts">
						View all posts
						<ArrowRightIcon className="w-4 h-4 ml-2" />
					</Link>
				</Button>
			</div>
		</section>
	);
}
