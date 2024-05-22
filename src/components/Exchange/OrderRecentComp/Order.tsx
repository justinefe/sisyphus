import React from "react";
import DropDown from "@/asset/icons/DropDown";
import MenuTop from "@/asset/icons/MenuTop";
import MenuMiddle from "@/asset/icons/MenuMiddle";
import MenuBottom from "@/asset/icons/MenuBottom";
import TableRow from "./TableRow";
import ArrowUp from "@/asset/icons/ArrowUp";

const Order = () => {
  return (
    <div className="flex grow flex-col bg-[#20252B] border-[#262932] border rounded-lg px-2 py-3 h-[561px] w-full ">
      <div className="flex mt-3 justify-between">
        <div className="flex">
          <div className="flex items-center justify-center h-8 w-8 bg-[#353945] rounded">
            <MenuTop />
          </div>
          <div className="flex items-center justify-center h-8 w-8  rounded">
            <MenuBottom />
          </div>{" "}
          <div className="flex items-center justify-center h-8 w-8  rounded">
            <MenuMiddle />
          </div>
        </div>
        <div className="flex items-center justify-center h-8 w-16 bg-[#353945] rounded px-2">
          <span className="font-medium text-[12px] pr-2">10</span>
          <DropDown />
        </div>
      </div>
      <div className="flex mt-3 flex-col gap-1">
        <div className="flex justify-between w-full px-4  efh-[34px]">
          <div className="flex font-medium text-[12px] w-8 text-[#A7B1BC]">
            Price (USDT){" "}
          </div>
          <div className="flex font-medium text-[12px] w-8 text-[#A7B1BC]">
            Amounts (BTC){" "}
          </div>
          <div className="flex font-medium text-[12px] w-8 text-[#A7B1BC]">
            Total
          </div>
        </div>
        {Array.from(Array(5).keys()).map((n: number) => (
          <TableRow key={n} />
        ))}
      </div>
      <div className="flex font-medium text-[16px] my-3 h-[28px]  gap-3 items-center text-[#FFFFFF] justify-center">
        <span className="text-[#25C26E] font-medium text-[16px]">
          36,641.20
        </span>
        <ArrowUp />
        <span className="font-medium text-[16px]">36,641.20</span>
      </div>
      {Array.from(Array(5).keys()).map((n: number) => (
        <TableRow key={n} />
      ))}
    </div>
  );
};

export default Order;
