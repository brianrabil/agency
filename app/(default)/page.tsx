import Cta from "@/components/cta";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Features03 from "@/components/features-03";
import Hero from "@/components/hero";
import Pricing from "./pricing-section";

export const metadata = {
	title: "Home - Stellar",
	description: "Page description",
};

export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<Features02 />
			<Features03 />
			<Pricing />
			<Cta />
		</>
	);
}
