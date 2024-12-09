"use client";
import SearchBar from "./Searchbar";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#ffffff] w-[1440px] h-[91px]  border-[1px] border-[#C3D4E966] flex justify-between items-center">
      <span className=" relative w-[148px] h-[44px] top- left-[60px] flex gap-[10px] font-bold text-[32px] leading-[48px] tracking-[0.2px] text-[#3563E9]">
            MORENT
          </span>
        <div>
          <SearchBar  />
        </div>
        <div className="w-[236px] h-[44px]">
          <ul className=" flex gap-5 items-center">
            <li><img src="/icon/nav/heart-filled.svg" alt="" /></li>
            <li><img src="/icon/nav/notification.svg" alt="" /></li>
            <li><img src="/icon/nav/setting-2.svg" alt="" /></li>
            <li><img className="w-[44px] h-[44px] rounded-full" src="profilepic.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  );
}