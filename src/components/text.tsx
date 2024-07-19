import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface Props extends PropsWithChildren {
	className?: string;
}

export const Text: React.FC<Props> = ({ className, children }) => (
	<p className={cn(`text-primary text-base ${className}`)}>{children}</p>
);
