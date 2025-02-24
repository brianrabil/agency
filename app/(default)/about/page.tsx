import Cta from "@/components/cta-02";
import Hero from "@/components/hero-about";
import Story from "@/components/story";

export const metadata = {
	title: "Zendrel | About",
	description:
		"Learn how Zendrel revolutionizes digital product development with unlimited design and development services for startups and established businesses.",
	openGraph: {
		title: "Zendrel | About",
		description:
			"Learn how Zendrel revolutionizes digital product development with unlimited design and development services for startups and established businesses.",
	},
};

export default function About() {
	return (
		<>
			<Hero />
			<Story />
			{/* <Team /> */}
			{/* <Recruitment /> */}
			{/* <Testimonials /> */}
			<Cta />
		</>
	);
}
