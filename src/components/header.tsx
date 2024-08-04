"use client";

import React from "react";

import { Avatar } from "@/components/avatar";
import { Link } from "@/components/link";
import { Sidebar } from "@/components/sidebar";
import ragna from "@/assets/ragna.jpeg";

import { Ellipsis } from "lucide-react";

interface Props {}

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
];

export const Header: React.FC<Props> = () => (
  <header className="flex justify-between">
    <Sidebar
      onOpen={() => { console.log('opening here')}}
      onClose={() => { console.log('closing here')}}
      className=" bg-white"
    >
      <ul>
        <li>Home</li>
        <li>Blog</li>
      </ul>
    </Sidebar>

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
          <Link
            key={navItem.name}
            href={navItem.href}
            style={{
              color: "black",
              padding: "0 5px 20px 5px",
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
