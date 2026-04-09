import type { Metadata } from "next";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "./globals.css";

import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: `${siteContent.seo.description.zh} ${siteContent.seo.description.en}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
