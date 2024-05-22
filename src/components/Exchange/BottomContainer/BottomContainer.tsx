"use client";
import React, { useState } from "react";
import OrderHistory from "./OrderHistory";
import Tab from "@/components/chat/ChatsOrderTrade/Tab";
import Positions from "./Positions";
import TradeHistory from "./TradeHistory";

const tabArr = [
  { title: "Positions", type: "position" },
  { title: "Open Orders", type: "order" },
  { title: "Trade History", type: "trade" },
  { title: "Order History", type: "history" },
];
const Bottom = () => {
  const [tab, setTab] = useState<string>("position");

  const renderJSX = () => {
    if (tab === "order") {
      return <OrderHistory />;
    }

    if (tab === "history") {
      return <OrderHistory />;
    }
    if (tab === "position") {
      return <Positions />;
    }
    if (tab === "trade") {
      return <TradeHistory />;
    }
    return null;
  };
  const handleClick = (e: any, type: string) => {
    setTab(type);
  };
  return (
    <div className="flex grow bg-[#20252B] border-[#262932] border rounded-lg p-3 h-[625px] w-full flex-col ">
      <div className="flex bg-[#00000029] w-full h-8 p-[2px] mb-4 rounded-lg items-center md:hidden">
        {tabArr?.map(({ title, type }, id) => (
          <Tab
            title={title}
            tab={tab}
            handleClick={handleClick}
            type={type}
            key={id}
          />
        ))}
      </div>
      {renderJSX()}
    </div>
  );
};

export default Bottom;
