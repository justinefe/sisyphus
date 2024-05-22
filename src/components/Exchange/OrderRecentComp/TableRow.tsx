import React from "react";

const TableRow = () => {
  return (
    <div className="flex justify-between gap-4 px-4  h-[28px] items-center">
      <div className="flex font-medium text-[12px]  text-[#FF6838]">
        36920.12
      </div>
      <div className="flex font-medium text-[12px] text-[#FFFFFF]">
        0.758965
      </div>{" "}
      <div className="flex font-medium text-[12px] text-[#FFFFFF]">
        28,020.98
      </div>
    </div>
  );
};

export default TableRow;
