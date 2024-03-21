import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { Nav, Footer } from "@/components/shared";

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
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
