import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Professor Ragna",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          padding: "0 10px",
        }}
      >
        {children}
      </body>
    </html>
  );
}
