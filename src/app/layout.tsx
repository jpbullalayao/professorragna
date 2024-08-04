import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <body>
        <div className="p-5">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
