import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/provider/RQProvider";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/nav-items";

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
      <body className="bg-slate-600 min-h-screen flex flex-col">
        <header>
          <nav className="p-7">
            <ul className="flex justify-between w-[85vw] gap-2 mx-auto">
              {NAV_ITEMS.map((nav) => (
                <li
                  key={`navigate_to_${nav.path}`}
                  className="text-lg text-zinc-50 hover:font-bold"
                >
                  <Link href={nav.path}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="flex-grow">
          <Providers>{children}</Providers>
        </main>
        <footer className="p-6 text-sm text-stone-500 text-justify">
          LoL 인포 (LOL Info) is not endorsed by Riot Games and does not reflect
          the views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties. Riot Games and all
          associated properties are trademarks or registered trademarks of Riot
          Games, Inc.
        </footer>
      </body>
    </html>
  );
}
