import React from "react";

import { main, homeUrlContainer } from "./Header.css";

import { Avatar } from "@/components/Avatar";
import { Link } from "@/components/Link";
import ragna from "@/assets/ragna.jpeg";

interface Props {
  name: string;
}

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
];

export const Header: React.FC<Props> = ({ name }) => (
  <header className={main}>
    <div className={homeUrlContainer}>
      <Link>
        <Avatar src={ragna} width={50} height={50} />
      </Link>
      <Link
        href="/"
        style={{
          color: "#6e58b1",
          marginLeft: "15px",
          fontSize: "30px",
        }}
      >
        {name}
      </Link>
    </div>

    <nav>
      <ul>
        {NAV_ITEMS.map((navItem) => (
          <Link
            href={navItem.href}
            style={{
              color: "black",
              padding: "0 5px 20px 5px",
              // paddingBottom: "20px",
              borderBottom: "3px solid #6e58b1",
            }}
          >
            {navItem.name}
          </Link>
        ))}
      </ul>
    </nav>
  </header>
);
