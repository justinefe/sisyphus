"use client";
import React, { useState } from "react";
import Limit from "./Limit";
import Market from "./Market";
import StopLimit from "./StopLimit";
import Link from "next/link";

const Buy = () => {
  const [tab, setTab] = useState("limit");

  const handleTab = (e: any, comp: string) => {
    e.preventDefault(e);
    setTab(comp);
  };
  const renderIcon = () => {
    if (tab == "limit") {
      return <Limit />;
    }

    if (tab == "market") {
      return <Market />;
    }

    return <StopLimit />;
  };

  return (
    <>
      <div className="flex">
        <button
          onClick={(e) => handleTab(e, "limit")}
          className={`rounded-[100px] py-[6px] px-[12px]  ${
            tab === "limit" ? "bg-[#353945]" : ""
          } font-bold text-[14px]`}
        >
          Limit
        </button>
        <button
          onClick={(e) => handleTab(e, "market")}
          className={`rounded-[100px] py-[6px] px-[12px]  ${
            tab === "market" ? "bg-[#353945]" : ""
          } font-bold text-[14px]`}
        >
          Market
        </button>
        <button
          onClick={(e) => handleTab(e, "stopLimit")}
          className={`rounded-[100px] py-[6px] px-[12px]   ${
            tab === "stopLimit" ? "bg-[#353945]" : ""
          } font-bold text-[14px]`}
        >
          Stop-Limit
        </button>
      </div>
      {renderIcon()}
    </>
  );
};

export default Buy;
