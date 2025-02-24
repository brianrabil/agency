export const metadata = {
	title: "Zendrel | Services",
	description:
		"Expert UI/UX design, Next.js web development, React Native mobile apps, AI integration, and more. Discover our comprehensive range of digital services.",
	openGraph: {
		title: "Zendrel | Services",
		description:
			"Expert UI/UX design, Next.js web development, React Native mobile apps, AI integration, and more. Discover our comprehensive range of digital services.",
	},
};

import ServicesList from "./services-list";
import ServicesSection from "./services-section";

export default function Services() {
	return (
		<>
			<ServicesSection />
			<ServicesList />
		</>
	);
}
