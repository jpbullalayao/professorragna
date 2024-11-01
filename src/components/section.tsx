import { cn } from "@/lib/utils";

import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export const Section: React.FC<Props> = ({ children, className }) => (
  <section className={cn(className, "mb-10")}>{children}</section>
);
