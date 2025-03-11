import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/provider/RQProvider";

export const metadata: Metadata = {
  title: "LoL 인포 (LOL Info)",
  description: "리그 오브 레전드 챔피언, 아이템, 로테이션 정보를 한눈에!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
