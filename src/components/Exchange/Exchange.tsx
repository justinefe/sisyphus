"use client";
import Buy from "@/components/Exchange/Buy/Buy";
import Sell from "@/components/Exchange/Sell/Sell";
import React, { useState } from "react";

const Exchange = ({
  type,
  setType,
}: {
  type: string;
  setType: (type: string) => any;
}) => {
  const renderJSX = () => {
    if (type == "buy") {
      return <Buy />;
    }
    return <Sell />;
  };

  const handleClick = (e: any, type: string) => {
    e.preventDefault();
    setType(type);
  };
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex bg-[#00000029] gap-4 h-8 p-[2px] rounded-lg items-center justify-between">
        <button
          onClick={(e) => handleClick(e, "buy")}
          className={`shadow shadow-[bb] flex justify-center items-center grow  h-[28px]  rounded-lg font-medium text-[12px] ${
            type === "buy" ? "border-[#25C26E] border-[2px] bg-[#262932]" : ""
          }`}
        >
          Buy
        </button>
        <button
          onClick={(e) => handleClick(e, "sell")}
          className={`shadow shadow-[bb]  h-[28px] flex justify-center items-center font-medium text-[12px] rounded-lg  text-[#A7B1BC] grow  ${
            type !== "buy" ? "border-[#FF554A] bg-[#262932] border f" : ""
          }`}
        >
          Sell
        </button>
      </div>
      {renderJSX()}
    </div>
  );
};

export default Exchange;
