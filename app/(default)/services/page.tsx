export const metadata = {
	title: "Services - Zendrel",
	description:
		"Discover Zendrel’s unlimited UI/UX design and AI-powered solutions tailored to your business needs.",
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
