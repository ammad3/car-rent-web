"use client";
import Image from "next/image";
import SearchBar from "./Searchbar";
import { Button3 } from "./Button";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#ffffff]  w-[375px] h-[288px] sm:w-[1440px] sm:h-[124px] border-[1px] border-[#C3D4E966] flex sm:justify-between sm:items-center gap-[191px]">
        <div className="flex relative items-center justify-between sm:top-0 top-8 left-[25px] w-[327px] h-7">
          <span className="sm:relative w-[108px] h-[28px] sm:w-[148px] sm:h-[44px]  sm:left-[60px] sm:flex sm:gap-[10px] font-bold text-[24px] sm:text-[32px] leading-[28px] sm:leading-[48px] tracking-[0.2px] text-[#3563E9]">
            MORENT
          </span>
          <div className="sm:hidden">
            <Image
              className="rounded-full"
              src="/profilepic.png"
              alt="Profile Image"
              width={28}
              height={28}
            />
          </div>
        </div>
        <div className="absolute top-[92px] left-[25px] sm:left-[272px] sm:top-10 sm:flex">
          <SearchBar />
        </div>
        <div className="sm:hidden absolute top-[104px] left-[316px]">
        <Button3
          bgcolor="bg-white"
          positionLeft=" sm:left-[690px] sm:top-[520px]"
        />
      </div>
        <div className="hidden sm:block sm:w-[236px] sm:h-[44px]">
          <ul className=" flex gap-5 items-center">
            <li>
              <div className="border-[#C3D4E966] border-[1px] border-solid w-11 h-11 gap-0  rounded-full opacity-80 sm:flex justify-center">
                <Image
                  src="/icon/menu/heart-filled.svg"
                  alt="Heart Image"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className=" border-[#C3D4E966] border-[1px] border-solid w-11 h-11 gap-0  rounded-full opacity-80 sm:flex justify-center">
                <Image
                  src="/icon/menu/notification.svg"
                  alt="Notification Image"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div className=" border-[#C3D4E966] border-[1px] border-solid w-11 h-11 gap-0  rounded-full opacity-80 sm:flex justify-center">
                <Image
                  src="/icon/menu/setting-2.svg"
                  alt="Setting Image"
                  width={24}
                  height={24}
                />
              </div>
            </li>
            <li>
              <div>
                <Image
                  className="w-[44px] h-[44px] rounded-full"
                  src="/profilepic.png"
                  alt="Profile Image"
                  width={44}
                  height={44}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
