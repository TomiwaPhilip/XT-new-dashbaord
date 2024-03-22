import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
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
        <body>
          
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
