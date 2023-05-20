import Image from "next/image";
import React from "react";

function HomeHead() {
  return (
    <div className="bg-[#F3F3F3] mt-[1px] py-[75px] px-[20px]">
      <div className="w-[1200px] mx-[auto] flex justify-between items-center">
        <div className="w-[675px]">
          <div
            className="text-[#0E75BD] text-[48px] leading-[36px] font-bold
          pb-[30px]"
          >
            A Refreshing Approach . . .
          </div>
          <div className="text-[#4C5167] text-[16px] font-normal leading-[20px] pb-[60px]">
            At JMFS, we endeavor to develop and provide unique, niche investment
            solutions that are either not commonly available or are developed in
            response to market gaps and needs. We consciously choose to take the
            path less traveled.
          </div>
          <div
            className="w-fit text-white rounded-md
        px-[20px] py-[8px] cursor-pointer
        transition ease-in
        bg-[#EB2F2A] opacity-90	hover:opacity-100"
          >
            Contact Us
          </div>
        </div>
        <div>
          <Image src={"/images/bro.png"} alt="Bro" width={430} height={430} />
        </div>
      </div>
    </div>
  );
}

export default HomeHead;
