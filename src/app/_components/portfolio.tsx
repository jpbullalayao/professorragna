import Image, { type StaticImageData } from "next/image";

import { Text } from "@/components/text";

import soloFounders from "@/assets/portfolio/solo-founders.png";
import volantis from "@/assets/portfolio/volantis.png";
import yc from "@/assets/portfolio/yc.png";

const items: {
  name: string;
  alt: string;
  src: StaticImageData;
}[] = [
  {
    name: "YC Demo Day Funds",
    alt: "YC",
    src: yc,
  },
  {
    name: "Solo Founders Fund",
    alt: "Solo Founders Fund",
    src: soloFounders,
  },
  {
    name: "Volantis",
    alt: "Volantis",
    src: volantis,
  },
];

export const Portfolio = () => (
  <div className="flex flex-col gap-4">
    <Text variant="header" tag="h3">
      Portfolio
    </Text>

    <div className="grid grid-cols-[repeat(auto-fill,4.5rem)] gap-2">
      {items.map(({ name, alt, src }) => (
        <div
          key={name}
          title={name}
          className="relative aspect-square p-1.5"
        >
          <div className="relative h-full w-full overflow-hidden rounded-md">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="4.5rem"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);
