import Cta from "@/components/cta";
import Faqs from "@/components/faqs";
import Features from "@/components/features-05";
import PricingSection from "./pricing-section";

export const metadata = {
	title: "Pricing - Stellar",
	description: "Page description",
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
