import React, { ReactNode } from "react";
import { Twitch, Linkedin, Twitter, Github } from 'lucide-react';

import { Link } from "@/components/link";
import { Text } from "@/components/text";

interface Props {}

export const Footer: React.FC<Props> = () => (
  <footer className="flex items-center justify-between border-t py-5">
    <Text className="text-secondary text-sm">© 2024 Professor Ragna</Text>
    <div className="flex justify-between w-[50%] lg:w-[20%]">
      <Link href="https://twitch.tv/professorragna">
        <Twitch />
      </Link>
      <Link href="https://twitter.com/professorragna">
        <Twitter />
      </Link>
      <Link href="https://github.com/jpbullalayao">
        <Github />
      </Link>
      <Link href="https://www.linkedin.com/in/jpbullalayao">
        <Linkedin />
      </Link>
    </div>
  </footer>
);
