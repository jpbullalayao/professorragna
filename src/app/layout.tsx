import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jourdan Bul-lalayao",
  description: "The home page for Jourdan Bul-lalayao",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href={ragna} />
      </Head> */}
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
