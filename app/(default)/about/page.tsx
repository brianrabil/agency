import Cta from "@/components/cta-02";
import Hero from "@/components/hero-about";
import Story from "@/components/story";

export const metadata = {
	title: "About - Stellar",
	description: "Page description",
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
