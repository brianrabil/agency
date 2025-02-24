import Cta from "@/components/cta";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Features03 from "@/components/features-03";
import Hero from "@/components/hero";
import Pricing from "./pricing-section";

export const metadata = {
	title: "Zendrel | Unlimited Design & Development Services",
	description:
		"Transform your digital presence with Zendrel's unlimited UI/UX design, Next.js web apps, and React Native mobile development. Launch faster and iterate endlessly.",
	openGraph: {
		title: "Unlimited Design & Development Services | Zendrel",
		description:
			"Transform your digital presence with Zendrel's unlimited UI/UX design, Next.js web apps, and React Native mobile development. Launch faster and iterate endlessly.",
	},
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
