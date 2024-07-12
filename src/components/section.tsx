import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const Section: React.FC<Props> = ({ children }) => (
  <section className="mb-10">{children}</section>
);
