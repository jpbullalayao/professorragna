import React from "react";
import NextLink from "next/link";

import { Avatar } from "@/components/avatar";
import { Link } from "@/components/link";
import ragna from "@/assets/ragna.jpeg";

interface Props {}

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Resume",
    href: "/resume",
  },
];

export const Header: React.FC<Props> = () => (
  <header className="flex justify-between">
    <div className="flex items-center">
      <Link href="/">
        <Avatar src={ragna} alt="Professor Ragna" width={50} height={50} />
      </Link>
      <Link
        href="/"
        style={{
          color: "#6e58b1",
          marginLeft: "15px",
          fontSize: "30px",
          fontFamily: "Verdana",
        }}
      >
        professorragna.com
      </Link>
    </div>

    <nav className="hidden sm:block">
      <ul>
        {NAV_ITEMS.map((navItem) => (
          <NextLink
            key={navItem.name}
            href={navItem.href}
            style={{
              color: "black",
              padding: "0 5px 20px 5px",
              borderBottom: "3px solid #6e58b1",
            }}
          >
            {navItem.name}
          </NextLink>
        ))}
      </ul>
    </nav>
  </header>
);
