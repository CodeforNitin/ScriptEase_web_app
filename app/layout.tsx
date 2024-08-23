import { Inter as FontSans } from "next/font/google";
import {dark, neobrutalism } from "@clerk/themes"

import { cn } from "@/lib/utils";
import "./globals.css";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./Provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ScriptEase",
  description: "Best collabrative editor in the market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider 
    appearance={{
      baseTheme: [neobrutalism],
    }}>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>
          {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
