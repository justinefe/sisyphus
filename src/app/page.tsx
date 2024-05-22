// components/Navbar.tsx
import Logo from "@/asset/icons/Logo";
import WebLink from "@/components/nav/WebLink";
import Link from "next/link";

const mobileArr = [
  { title: "Exchange", href: "/dashboard/exchange" },
  { title: "Wallets", href: "/dashboard/wallets" },
  { title: "Roqqu Hub", href: "/dashboard/hub" },
  { title: "Logout", href: "/dashboard/logut" },
];

export default function Home() {
  return (
    <>
      <nav className="border-[#262932] border-b h-[72px] text-white sticky top-0 z-50 flex p-4 justify-between items-center">
        <div className="flex items-center gap-12">
          <Link href="/">
            <div className="flex  gap-2 items-center pr-12 border-[#FCFCFC14] md:border-r">
              <Logo />
              <span className="text-[#FFFFFF] ">Sisyphus</span>
            </div>
          </Link>
          {/* <div className="flex border-[#FCFCFC14] border-r bg-[#A7B1BC] h-[40px]" /> */}
          <div className="space-x-1 hidden md:flex gap-12">
            {mobileArr?.slice(0, 1).map(({ title, href }, index) => (
              <WebLink title={title} href={href} key={index} />
            ))}
          </div>
        </div>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Link href="/dashboard/exchange">
          <div
            className="flex flex-col gap-8 w-52  font-medium text-[14px] items-center justify-center h-10 rounded-lg text-[#FFFFFF] 
     bg-gradient-to-r from-[#483BEB] via-[#7847E1] to-[#DD568D]"
          >
            <span>Click to continue</span>
          </div>
        </Link>
      </main>
    </>
  );
}
