import React from "react";

import Image, { StaticImageData } from "next/image";

import { main } from "./Avatar.css";

interface Props {
  alt: string;
  src: StaticImageData;
  height: number;
  width: number;
}

export const Avatar: React.FC<Props> = ({ src, alt, height, width }) => (
  <Image src={src} className={main} alt={alt} height={height} width={width} />
);
