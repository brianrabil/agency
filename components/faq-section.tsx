import { Container } from "@/components/container";
import { TypographyH2 } from "@/components/typography";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import type { Config } from "@/lib/config";
import { MinusIcon, PlusIcon } from "lucide-react";

interface FAQSectionProps {
	readonly faqs: Config["faqs"];
}

export function FAQSection({ faqs }: FAQSectionProps) {
	return (
		<div className="bg-secondary py-24 sm:py-32 lg:py-40">
			<Container>
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<div className="mb-10 space-y-4">
						<TypographyH2 id="faq">{faqs.header.title}</TypographyH2>
						<p className="text-muted-foreground text-lg font-normal mt-2 leading-normal">
							{faqs.header.description}
						</p>
					</div>
					<Accordion type="multiple">
						{faqs.items.map((faq) => (
							<AccordionItem key={faq.question} value={faq.question}>
								<AccordionTrigger className="no-underline hover:no-underline text-base/7 font-semibold">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent>
									<p className="text-base/7 text-muted-foreground">
										{faq.answer}
									</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
				<p className="text-muted-foreground text-lg font-normal mt-2 leading-normal">
					Still have questions? Email us at support@example.com
				</p>
			</Container>
		</div>
	);
}
