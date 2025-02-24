import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata = {
	metadataBase: new URL("https://zendrel.com"),
	title: {
		default: "Zendrel - Unlimited UI/UX Design & Development Partner",
		template: "%s | Zendrel",
	},
	description:
		"Unlimited UI/UX design, Next.js web apps, and React Native mobile development under one subscription. Get expert design and development without the overhead.",
	keywords: [
		"UI/UX design",
		"web development",
		"Next.js",
		"React Native",
		"unlimited design",
		"AI integration",
		"mobile apps",
	],
	authors: [{ name: "Zendrel" }],
	creator: "Zendrel",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://zendrel.com",
		title: "Zendrel - Unlimited UI/UX Design & Development Partner",
		description:
			"Unlimited UI/UX design, Next.js web apps, and React Native mobile development under one subscription. Get expert design and development without the overhead.",
		siteName: "Zendrel",
	},
	twitter: {
		card: "summary_large_image",
		title: "Zendrel - Unlimited UI/UX Design & Development Partner",
		description:
			"Unlimited UI/UX design, Next.js web apps, and React Native mobile development under one subscription.",
		creator: "@zendrel",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}
			>
				<div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
					{children}
				</div>
			</body>
		</html>
	);
}
