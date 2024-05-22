// components/Navbar.tsx
import Logo from "@/asset/icons/Logo";
import Link from "next/link";
import ForwardArrow from "@/asset/icons/ForwardArrow";
import WordIcon from "@/asset/icons/WordIcon";
import Logout from "@/asset/icons/Logout";
import Harmburger from "@/asset/icons/Harmburger";
import { DropDown, DropDownChildren, DropDownHeader } from "../DropDown";
import MobileLink from "./MobileLink";
import WebLink from "./WebLink";
import Avatar from "./Avatar";

const mobileArr = [
  { title: "Exchange", href: "/dashboard/exchange" },
  { title: "Wallets", href: "/dashboard/wallets" },
  { title: "Roqqu Hub", href: "/dashboard/hub" },
  { title: "Logout", href: "/dashboard/logut" },
];

const Navbar = () => {
  return (
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
          {mobileArr?.slice(0, 3).map(({ title, href }, index) => (
            <WebLink title={title} href={href} key={index} />
          ))}
        </div>
      </div>
      <div className="hidden md:flex rounded-lg bg-[#12171D] px-3 py-2 items-center gap-3">
        <div className="flex items-center gap-2">
          <Avatar />
          <span className="text-[14px] font-medium text-[#A7B1BC]">
            Olakunle Te...
          </span>
          <ForwardArrow />
        </div>
        <WordIcon />
        <Logout />
      </div>
      <div className="flex items-center md:hidden gap-3">
        <Avatar />
        <WordIcon />
        <DropDown
          config={{
            useClick: true,
            autoClose: true,
          }}
          dropPosition="right"
        >
          <DropDownHeader>
            <Harmburger />
          </DropDownHeader>

          <DropDownChildren>
            <div className="flex flex-col grow bg-[#1C2127] border-[#373B3F] rounded-xl border px-3 py-2 w-[214px]">
              {mobileArr?.map(({ title, href }, index) => (
                <MobileLink title={title} href={href} key={index} />
              ))}
            </div>
          </DropDownChildren>
        </DropDown>
      </div>
    </nav>
  );
};

export default Navbar;
