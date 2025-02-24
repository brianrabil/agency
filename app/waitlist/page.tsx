import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";

export const metadata = {
	title: "Zendrel | Unlimited Design & Development Services",
	description:
		"Transform your digital presence with Zendrel's unlimited UI/UX design, Next.js web apps, and React Native mobile development. Launch faster and iterate endlessly.",
};

export default function Home() {
	return (
		<section>
			<div className="pt-32 pb-12 md:pt-44 md:pb-20">
				<div className="px-4 sm:px-6">
					<PageHeader
						className="mb-12"
						title="The software that sparks your imagination"
						description="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
					>
						Waitlist v1 <span className="text-gray-300 mx-1">·</span> Coming
						Soon
					</PageHeader>

					<SubscribeForm />
				</div>
			</div>
		</section>
	);
}
