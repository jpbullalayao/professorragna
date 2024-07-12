import React, { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export const Text: React.FC<Props> = ({ className, children }) => (
  <p className={`text-primary text-base ${className}`}>{children}</p>
);
