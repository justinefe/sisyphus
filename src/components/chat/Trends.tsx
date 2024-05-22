import React from "react";

const Trends = ({ Icon, title, text1, text2, color }: any) => {
  return (
    <div className="border-[#FCFCFC14] md:border-l md:px-6">
      <div className="flex items-center gap-1">
        <Icon />
        <span className="text-[#A7B1BC] font-medium text-[12px]">{title}</span>
      </div>
      <span
        className={`font-medium text-[14px] ${
          color ? `text-[${color}]` : "text-[#FFFFFF]"
        }`}
      >
        {text1} {text2 && `+${text2}`}
      </span>
    </div>
  );
};

export default Trends;
