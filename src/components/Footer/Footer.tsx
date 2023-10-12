import React, { ReactNode } from "react";

import { main } from "./Footer.css";

interface Props {
  children: ReactNode;
}

export const Footer: React.FC<Props> = ({ children }) => (
  <footer className={main}>{children}</footer>
);
