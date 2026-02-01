import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SILA - AI Chat Procurement Platform",
  description: "Revolutionary chat-first interface that connects you to local Saudi and GCC suppliers. Get real-time analytics, automated sourcing, and instant quotes.",
  keywords: ["procurement", "AI", "Saudi Arabia", "GCC", "suppliers", "sourcing"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
