import DropDown from "@/asset/icons/DropDown";
import React from "react";

const CurrencyDisplay = ({
  mainTitle,
  mainTitleValue,
  subTitle,
  subTitleValue,
  select,
}: {
  mainTitle: string;
  mainTitleValue: number;
  subTitle?: string;
  subTitleValue?: number;
  select?: string;
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-medium text-[12px] text-[#A7B1BC]">
              {mainTitle}
            </span>
          </div>
          <span>{mainTitleValue}</span>
        </div>
        {subTitle && (
          <div className="flex flex-col ">
            <div className="flex items-center gap-1">
              <span className="font-medium text-[12px] text-[#A7B1BC]">
                {subTitle}
              </span>
            </div>
            <span>{subTitleValue}</span>
          </div>
        )}
        {select && (
          <div className="flex items-center gap-1">
            <span className="font-medium text-[12px] text-[#A7B1BC]">
              {select}
            </span>
            <DropDown />
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyDisplay;
