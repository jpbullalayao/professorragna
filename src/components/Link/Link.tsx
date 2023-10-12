import React, { ReactNode } from "react";

import { main } from "./Link.css";

interface Props {
  children: ReactNode;
  href: string;
}

export const Link: React.FC<Props> = ({ children, href, ...props }) => (
  <a href={href} target="_blank" className={main} {...props}>
    {children}
  </a>
);
