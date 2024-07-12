import React, { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  href: string;
  [key: string]: any;
}

export const Link: React.FC<Props> = ({ children, href, ...props }) => (
  <a href={href} target="_blank" className="text-interactive" {...props}>
    {children}
  </a>
);
