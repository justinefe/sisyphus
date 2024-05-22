import React from "react";

const Button = ({ title, full }: { title: string; full?: boolean }) => {
  return (
    <button
      className={`font-medium text-[14px] h-10 rounded-lg text-[#FFFFFF] ${
        !full
          ? " bg-[#2764FF] w-[80px]"
          : "bg-gradient-to-r from-[#483BEB] via-[#7847E1] to-[#DD568D]"
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
