// components/Navbar.tsx
"use client";
import Logo from "@/asset/icons/Logo";
import Link from "next/link";
import WordIcon from "@/asset/icons/WordIcon";
import Harmburger from "@/asset/icons/Harmburger";
import MobileLink from "./MobileLink";
import WebLink from "./WebLink";
import Avatar from "./Avatar";
import { useRef, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ForwardArrow from "@/asset/icons/ForwardArrow";
import Logout from "@/asset/icons/Logout";

const mobileArr = [
  { title: "Exchange", href: "/dashboard/exchange" },
  { title: "Wallets", href: "/" },
  { title: "Roqqu Hub", href: "/" },
  { title: "Logout", href: "/" },
];

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClickAway = () => {
    setShow(false);
  };

  const handleMenu = (e: any) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <nav className="border-[#262932] bg-[#20252B] border-b h-[72px] text-white sticky top-0 z-50 flex p-4 justify-between items-center">
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
      <div className="flex md:hidden items-center gap-3 ">
        <Avatar />
        <WordIcon />
        <div className="relative">
          <button onClick={handleMenu}>
            <Harmburger />
          </button>
          {show && (
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className="absolute right-0 top-[60px] ">
                <div className="flex flex-col grow bg-[#1C2127] border-[#373B3F] rounded-xl border px-3 py-2 w-[214px] ">
                  {mobileArr?.map(({ title, href }, index) => (
                    <MobileLink title={title} href={href} key={index} />
                  ))}
                </div>
              </div>
            </ClickAwayListener>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
