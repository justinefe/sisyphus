import React from "react";

const Bottom = () => {
  return (
    <div className="flex grow bg-[#20252B] border-[#262932] border rounded-lg p-3 h-[625px] w-full flex-col ">
      <div className="flex bg-[#00000029] h-8 p-[2px] rounded-lg items-center">
        <button className=" shadow shadow-[bb]   h-[28px] w-[112px] bg-[#262932] rounded-lg font-medium text-[12px]">
          Open Orders
        </button>
        <button className=" shadow shadow-[bb] border-[#FCFCFC14] border-r  h-[28px] w-[112px] bg-[#0000001F] font-medium text-[12px] text-[#A7B1BC]">
          Positions
        </button>
        <button className=" shadow shadow-[bb]  border-[#FCFCFC14] border-r h-[28px] w-[112px] bg-[#0000001F] font-medium text-[12px] text-[#A7B1BC]">
          Order History
        </button>{" "}
        <button className=" shadow shadow-[bb]  h-[28px] w-[112px] bg-[#0000001F] font-medium text-[12px] text-[#A7B1BC]">
          Trade History
        </button>
      </div>
      <div className="flex gap-2 items-center justify-center flex-col text-center grow">
        <span className="font-medium text-[24px]"> No Open Orders </span>
        <span className="font-medium  w-full max-w-[400px] text-[15px] text-[#A7B1BC]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
          nullam sit imperdiet pulvinar.
        </span>
      </div>
    </div>
  );
};

export default Bottom;
