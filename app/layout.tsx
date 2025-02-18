import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Container, Theme } from "@radix-ui/themes";

import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  display: "swap",
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
    <html lang="en" className={`${openSans.variable}`}>
      <body className={`antialiased`}>
        <Theme appearance="dark">
          <main>
            <Container>{children}</Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
