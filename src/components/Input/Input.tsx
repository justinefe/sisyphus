import ArrowDown from "@/asset/icons/ArrowDown";
import DropDown from "@/asset/icons/DropDown";
import QuestionmarkIcon from "@/asset/icons/QuestionmarkIcon";
import React from "react";

const Input = ({
  title,
  amount,
  selectTitle,
}: {
  title: string;
  amount?: number;
  selectTitle?: string;
}) => {
  return (
    <div className="flex items-center justify-between border-[#373B3F] border rounded-lg px-3 py-4 h-[40px] ">
      <div className="flex items-center gap-2">
        <span className="flex text-[12px] font-medium">{title}</span>
        <QuestionmarkIcon />
      </div>
      {amount && (
        <span className="flex text-[12px] font-medium">{amount} USD</span>
      )}
      {selectTitle && (
        <div className="flex items-center gap-2">
          <span className="flex text-[12px] font-medium">
            Good till cancelled
          </span>
          <DropDown />
        </div>
      )}
    </div>
  );
};

export default Input;
