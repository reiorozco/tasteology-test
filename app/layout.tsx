import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Container, Theme } from "@radix-ui/themes";

import "./globals.css";
import "@radix-ui/themes/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tasteoloy",
  description: "What does cooking mean?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme appearance="dark">
          <main>
            <Container>{children}</Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
