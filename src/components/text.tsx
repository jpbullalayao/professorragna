import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface Props extends PropsWithChildren {
  className?: string;
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Text: React.FC<Props> = ({ className, children, tag = "p" }) => {
  const Component = tag;

  return (
    <Component className={cn(`text-primary text-base ${className}`)}>{children}</Component>
  );
};
