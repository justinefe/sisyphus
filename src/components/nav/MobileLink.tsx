import Link from "next/link";
import React from "react";

const MobileLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link href={href}>
      <span className="hover:text-gray-300 text-[14px] active:bg-[#00000029]  hover:bg-[#00000029] hover:-mx-3 hover:px-3  flex items-center h-[58px] font-medium text-[#A7B1BC]">
        {title}
      </span>
    </Link>
  );
};

export default MobileLink;
