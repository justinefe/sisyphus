import Bottom from "@/components/Exchange/BottomContainer/BottomContainer";
import OrderRecent from "@/components/Exchange/OrderRecentComp/OrderRecent";
import ChatsOrderTrade from "@/components/chat/ChatsOrderTrade/ChatsOrderTrade";
import React from "react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-full gap-2  grow">
        <div className="flex w-full gap-2">
          <ChatsOrderTrade />
          <div className="hidden md:flex">
            <OrderRecent />
          </div>
          <div className="hidden md:flex flex-col grow bg-[#20252B] border-[#262932] border rounded-lg px-2 py-3  w-full  max-w-[255px]">
            {children}
          </div>
        </div>
        <Bottom />
      </div>
    </div>
  );
};

export default Layout;
