import React from "react";

const DisplayBetween = ({
  firstTitle,
  secondTitle,
}: {
  firstTitle: string;
  secondTitle: string | number;
}) => {
  return (
    <div className="flex justify-between">
      <span className="font-medium text-[12px] text-[#A7B1BC]">
        {firstTitle}
      </span>
      <span className="font-medium text-[12px] text-[#A7B1BC]">
        {secondTitle}
      </span>
    </div>
  );
};

export default DisplayBetween;
