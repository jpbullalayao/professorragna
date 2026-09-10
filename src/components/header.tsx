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
  <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
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

    <nav aria-label="Primary">
      <ul className="flex items-center gap-5">
        {NAV_ITEMS.map((navItem) => (
          <li key={navItem.name}>
            <NextLink
              href={navItem.href}
              style={{
                color: "black",
                padding: "0 5px 20px 5px",
                borderBottom: "3px solid #6e58b1",
              }}
            >
              {navItem.name}
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
