import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quote Generator",
  description: "A simple quote generator app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 