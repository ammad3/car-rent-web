"use client";
import Image from "next/image";
import SearchBar from "./Searchbar";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#ffffff] w-[1440px] h-[91px]  border-[1px] border-[#C3D4E966] flex justify-between items-center">
        <span className=" relative w-[148px] h-[44px] top- left-[60px] flex gap-[10px] font-bold text-[32px] leading-[48px] tracking-[0.2px] text-[#3563E9]">
          MORENT
        </span>
        <div>
          <SearchBar />
        </div>
        <div className="w-[236px] h-[44px]">
          <ul className=" flex gap-5 items-center">
            <li>
            <div className="border-[#C3D4E966] border-[1px] border-solid w-11 h-11 gap-0  rounded-full opacity-80 flex justify-center">
              <Image
                src="/icon/nav/heart-filled.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
            </li>
            <li>
            <div className="border-[#C3D4E966] border-[1px] border-solid w-11 h-11 gap-0  rounded-full opacity-80 flex justify-center">
              <Image
                src="/icon/nav/notification.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
            </li>
            <li>
              <div className="border-[#C3D4E966] border-[1px] border-solid w-11 h-11 gap-0  rounded-full opacity-80 flex justify-center">
              <Image
                src="/icon/nav/setting-2.svg"
                alt=""
                width={24}
                height={24}
              />
              </div>
            </li>
            <li>
              <Image
                className="w-[44px] h-[44px] rounded-full"
                src="/profilepic.png"
                alt=""
                width={44}
                height={44}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
