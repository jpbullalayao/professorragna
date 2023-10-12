import React, { ReactNode } from "react";

import { main } from "./Text.css";

interface Props {
  children: ReactNode;
}

export const Text: React.FC<Props> = ({ children }) => (
  <p className={main}>{children}</p>
);
