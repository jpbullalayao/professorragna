import React, { ReactNode } from "react";

import Image from "next/image";

import { main, socials } from "./Footer.css";

import { Link } from "@/components/Link";
import githubIcon from "@/assets/icon-github.svg";
import linkedinIcon from "@/assets/icon-linkedin.svg";
import twitterIcon from "@/assets/icon-twitter.svg";
import twitchIcon from "@/assets/icon-twitch.svg";

interface Props {}

export const Footer: React.FC<Props> = () => (
  <footer className={main}>
    <span>© 2023 Professor Ragna</span>
    <div className={socials}>
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
