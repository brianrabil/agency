import Cta from "@/components/cta";
import Faqs from "@/components/faqs";
import Features from "@/components/features-05";
import PricingSection from "./pricing-section";

export const metadata = {
	title: "Zendrel | Pricing",
	description:
		"Simple, transparent pricing for unlimited design and development services. One flat monthly fee for unlimited requests and two active tasks at a time.",
	openGraph: {
		title: "Zendrel | Pricing",
		description:
			"Simple, transparent pricing for unlimited design and development services. One flat monthly fee for unlimited requests and two active tasks at a time.",
	},
};

export default function Pricing() {
	return (
		<>
			<PricingSection />
			<Features />
			<Faqs />
			<Cta />
		</>
	);
}
