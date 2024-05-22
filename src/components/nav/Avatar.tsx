import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    // <div className="w-[32px] h-[32px] rounded-full object-cover blue-red-300">
    <Image
      alt="any"
      style={{ objectFit: "cover", borderRadius: 50 }}
      width={32}
      height={32}
      src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/384710247_1565667267600935_976458637629248501_n.jpg?ccb=11-4&oh=01_Q5AaIG4yr82N8TRAn8d6i61YXMTH2ENmzDyZwfBQosgPccY1&oe=66587DF7&_nc_sid=e6ed6c&_nc_cat=102"
    />
    // </div>
  );
};

export default Avatar;
