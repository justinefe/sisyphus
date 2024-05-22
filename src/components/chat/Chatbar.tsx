import React from "react";
import Time from "@/asset/icons/Time";
import ArrowDown from "@/asset/icons/ArrowDown";
import ArrowUp from "@/asset/icons/ArrowUp";
import Map from "@/asset/icons/Map";
import Trends from "./Trends";
const Chatbar = () => {
  return (
    <div className="p-4 gap-2 mx-2 mt-2 rounded-lg bg-[#20252B] border-[#262932] border flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-3 pr-5">
        <svg
          width="52"
          height="32"
          viewBox="0 0 52 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2094_2289)">
            <path
              d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
              fill="#F7931A"
            />
            <path
              d="M23.032 14.02C23.346 11.924 21.749 10.797 19.567 10.045L20.275 7.205L18.547 6.775L17.857 9.54C17.403 9.426 16.937 9.32 16.472 9.214L17.167 6.431L15.439 6L14.731 8.839C14.355 8.753 13.985 8.669 13.627 8.579L13.629 8.57L11.245 7.975L10.785 9.821C10.785 9.821 12.068 10.115 12.041 10.133C12.741 10.308 12.867 10.771 12.846 11.139L12.04 14.374C12.088 14.386 12.15 14.404 12.22 14.431L12.037 14.386L10.907 18.918C10.821 19.13 10.604 19.449 10.114 19.328C10.132 19.353 8.858 19.015 8.858 19.015L8 20.993L10.25 21.554C10.668 21.659 11.078 21.769 11.481 21.872L10.766 24.744L12.493 25.174L13.201 22.334C13.673 22.461 14.131 22.579 14.579 22.691L13.873 25.519L15.601 25.949L16.316 23.083C19.264 23.641 21.48 23.416 22.413 20.75C23.165 18.604 22.376 17.365 20.825 16.558C21.955 16.298 22.805 15.555 23.032 14.02ZM19.082 19.558C18.549 21.705 14.934 20.544 13.762 20.253L14.712 16.448C15.884 16.741 19.641 17.32 19.082 19.558ZM19.617 13.989C19.13 15.942 16.122 14.949 15.147 14.706L16.007 11.256C16.982 11.499 20.125 11.952 19.617 13.989Z"
              fill="white"
            />
          </g>
          <g clip-path="url(#clip1_2094_2289)">
            <path
              d="M51.5 16C51.5 24.5604 44.5604 31.5 36 31.5C27.4396 31.5 20.5 24.5604 20.5 16C20.5 7.43959 27.4396 0.5 36 0.5C44.5604 0.5 51.5 7.43959 51.5 16Z"
              fill="#6CDE07"
              stroke="#20252B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43 19.154C43 21.724 40.914 23.43 37.834 23.687V26H35.724V23.664C33.6407 23.4291 31.6613 22.6289 30 21.35L31.552 19.224C32.935 20.299 34.244 21 35.821 21.234V16.654C32.28 15.766 30.631 14.481 30.631 11.841C30.631 9.318 32.692 7.589 35.724 7.355V6H37.834V7.402C39.4831 7.58518 41.0554 8.19754 42.394 9.178L41.035 11.374C39.968 10.603 38.877 10.112 37.737 9.879V14.318C41.424 15.206 43 16.631 43 19.154ZM35.82 13.827V9.715C34.293 9.832 33.493 10.65 33.493 11.678C33.493 12.658 33.953 13.29 35.821 13.828L35.82 13.827ZM40.138 19.317C40.138 18.267 39.628 17.636 37.737 17.098V21.328C39.265 21.21 40.138 20.439 40.138 19.318V19.317Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2094_2289">
              <rect width="32" height="32" fill="white" />
            </clipPath>
            <clipPath id="clip1_2094_2289">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(20)"
              />
            </clipPath>
          </defs>
        </svg>
        <span>BTC/USDT</span>
        <svg
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.51885 7.07904C3.01371 5.9363 1.50514 4.79735 -1.19484e-07 3.65461C0.0102853 2.74345 0.0239915 1.8323 0.034277 0.921142L4.69081 4.46826L8.99314 0.932543C8.99314 1.39571 8.99314 1.8551 8.99657 2.31827C8.99657 2.78144 8.99657 3.24079 9 3.70396C7.50171 4.82772 6.01028 5.95148 4.51885 7.07904Z"
            fill="white"
          />
        </svg>

        <span className="text-[#00C076] font-medium text-[18px]">$20,634</span>
      </div>
      <div className="flex gap-4">
        <Trends
          Icon={Time}
          title="24h change"
          text1="520.80"
          text2="1.25%"
          color="#00C076"
        />
        <Trends
          Icon={ArrowUp}
          title="24h high"
          text1="520.80"
          text2="1.25%"
          color="#00C076"
        />{" "}
        <Trends
          Icon={Time}
          title="24h low"
          text1="520.80"
          text2="1.25%"
          color="#00C076"
        />{" "}
        <Trends
          Icon={Time}
          title="24h volume"
          text1="520.80"
          // text2="1.25%"
          color="#00C076"
        />
      </div>
    </div>
  );
};

export default Chatbar;
