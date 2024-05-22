import React from "react";

const Recent = () => {
  return (
    <div className="flex grow flex-col bg-[#20252B] border-[#262932] border rounded-lg px-2 py-3 h-[561px] w-full">
      <div className="flex gap-2 items-center justify-center flex-col text-center grow">
        <span className="font-medium text-[24px]"> No Recent Orders </span>
        <span className="font-medium  w-full max-w-[400px] text-[15px] text-[#A7B1BC]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
          nullam sit imperdiet pulvinar.
        </span>
      </div>
    </div>
  );
};

export default Recent;
