// components/Layout.tsx
import Chatbar from "@/components/chat/Chatbar";
import Navbar from "@/components/nav/Navbar";
import { ReactNode } from "react";
// import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[#1C2127]">
      <Navbar />
      <Chatbar />
      <main className="grow p-2">{children}</main>
    </div>
  );
};

export default Layout;
