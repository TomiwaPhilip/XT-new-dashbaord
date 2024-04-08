import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "./globals.css";

import { Footer } from "@/components/shared";

export const metadata: Metadata = {
  title: "My Dashboard",
  description: "Start your 3 months software engineering mentorship programme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <script src="https://checkout.flutterwave.com/v3.js"></script>
        </Head>
        <body>
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
