import CheckIcon from "@/asset/icons/CheckIcon";
import QuestionmarkIcon from "@/asset/icons/QuestionmarkIcon";
import React from "react";

const CheckBox = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2 ">
      <div className="flex w-[16px] bg-[#2764FF] rounded h-[16px]">
        <CheckIcon />
      </div>
      <span className="font-medium text-[12px] text-[#A7B1BC]">{title}</span>
      <QuestionmarkIcon />
    </div>
  );
};

export default CheckBox;
