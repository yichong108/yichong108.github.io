import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Yichong | 软件作品集",
  description:
    "全栈开发者软件作品集 — 展示 Web、移动端、工具与开源项目。未来感界面，聚焦工程质量与用户体验。",
  keywords: ["作品集", "软件开发", "全栈", "Next.js", "开源"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
