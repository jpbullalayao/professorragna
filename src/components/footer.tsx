import React, { ReactNode } from "react";

import Image from "next/image";

import { Link } from "@/components/link";
import { Text } from "@/components/text";
import githubIcon from "@/assets/icon-github.svg";
import linkedinIcon from "@/assets/icon-linkedin.svg";
import twitterIcon from "@/assets/icon-twitter.svg";
import twitchIcon from "@/assets/icon-twitch.svg";

interface Props {}

export const Footer: React.FC<Props> = () => (
  <footer className="flex items-center justify-between border-t py-5">
    <Text className="text-secondary text-sm">© 2024 Professor Ragna</Text>
    <div className="flex justify-between w-[50%] lg:w-[20%]">
      <Link href="https://twitch.tv/professorragna">
        <Image src={twitchIcon} alt="Twitch" />
      </Link>
      <Link href="https://twitter.com/professorragna">
        <Image src={twitterIcon} alt="Twitter" />
      </Link>
      <Link href="https://github.com/jpbullalayao">
        <Image src={githubIcon} alt="GitHub" />
      </Link>
      <Link href="https://www.linkedin.com/in/jpbullalayao">
        <Image src={linkedinIcon} alt="LinkedIn" />
      </Link>
    </div>
  </footer>
);
