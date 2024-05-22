"use client";
import React, { useState } from "react";
import Order from "./Order";
import Recent from "./Recent";

const OrderRecent = () => {
  const [tab, setTab] = useState<string>("order");
  const renderJSX = () => {
    if (tab == "order") {
      return <Order />;
    }
    return <Recent />;
  };

  const handleClick = (e: any, type: string) => {
    e.preventDefault();
    setTab(type);
  };
  return (
    <div className="flex grow flex-col bg-[#20252B] border-[#262932] border rounded-lg px-2 py-3 h-[561px] w-full max-w-[245px]">
      <div className="flex bg-[#00000029] h-8 p-[2px] rounded-lg items-center">
        <button
          onClick={(e) => handleClick(e, "order")}
          className={`shadow shadow-[bb]  h-[28px] w-[112px] ${
            tab === "order"
              ? "bg-[#262932] text-[#FFFFFF] rounded-lg "
              : "bg-[#0000001F] text-[#A7B1BC]"
          } font-medium text-[12px]`}
        >
          Order Book
        </button>
        <button
          onClick={(e) => handleClick(e, "recent")}
          className={`shadow shadow-[bb]  ${
            tab !== "order"
              ? "bg-[#262932] text-[#FFFFFF] rounded-lg"
              : "bg-[#0000001F] text-[#A7B1BC]"
          }  h-[28px] w-[112px] bg-[#0000001F] font-medium text-[12px] `}
        >
          Recent Trades
        </button>
      </div>
      {renderJSX()}
    </div>
  );
};

export default OrderRecent;
