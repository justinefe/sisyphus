import Link from "next/link";
import React from "react";

const WebLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link href={href}>
      <span className="hover:text-gray-300 text-[14px] font-medium text-[#A7B1BC]">
        {title}
      </span>
    </Link>
  );
};

export default WebLink;
