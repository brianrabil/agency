import appConfig from "@/lib/app-config";
import LogoImg from "@/public/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link
			className="inline-flex items-center gap-2"
			href="/"
			aria-label={appConfig.siteName}
		>
			<Image
				className="max-w-none"
				src={LogoImg}
				width={20}
				height={20}
				priority
				alt={appConfig.siteName}
			/>
			<span className="text-white text-xl font-bold">Zendrel</span>
		</Link>
	);
}
