import React, { ReactNode } from "react";

import { main } from "./Section.css";

interface Props {
  children: ReactNode;
}

export const Section: React.FC<Props> = ({ children }) => (
  <section className={main}>{children}</section>
);
