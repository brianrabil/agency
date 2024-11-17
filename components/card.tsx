import { Card as BaseCard } from "@/components/ui/card";
import { MagicCard as BaseMagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";
import type React from "react";

export function Card({
	children,
	className,
	innerClassName,
}: { children: React.ReactNode; className?: string; innerClassName?: string }) {
	return (
		<BaseMagicCard
			className={cn("bg-card shadow-lg flex flex-col", className)}
			gradientColor="hsl(var(--primary) / 0.2)"
			gradientOpacity={0.1}
			gradientSize={200}
		>
			<BaseCard
				className={cn("bg-transparent border-none w-full", innerClassName)}
			>
				{children}
			</BaseCard>
		</BaseMagicCard>
	);
}

export {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
