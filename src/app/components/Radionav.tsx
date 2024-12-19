import React from "react";
interface ILabelProps {
  label?: string;
}
export const RadioNav = (props: ILabelProps) => {
  const { label } = props;
  return (
    <div className=" relative sm:w-[582px] w-[327px] h-[120px] sm:h-[136px] flex flex-col bg-white rounded-[10px]">
      <div className=" absolute left-4 w-[259px] sm:left-0 sm:w-[582px] sm:h-[136px] h-[88px] flex gap-6">
        {/* Radio Button Section */}
        <div className="sm:absolute sm:w-[92px] sm:top-6 sm:left-12 sm:h-5 flex items-center gap-2 justify-center">
          <input
            type="radio"
            id="pick-up"
            name="trip-type"
            className="hidden peer"
          />

          <label
            htmlFor="pick-up"
            className="flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full peer-checked:bg-blue-600 peer-checked:ring-2 peer-checked:ring-[#3563E94D]"
          >
            <span className=" w-2 h-2 bg-white rounded-full"></span>
          </label>

          <label
            htmlFor="pick-up"
            className="font-semibold text-base text-[#1A202C]"
          >
            {label}
          </label>
        </div>
        c{/* Options */}
        <div className="absolute sm:w-[486px] w-[295px] h-11 sm:h-[48px] top-[60px] sm:left-12 gap-5 sm:gap-6 flex">
          {/* Locations Dropdown */}
          <div className="sm:w-[126px] sm:h-12 w-[76px] h-11 flex gap-2 flex-col">
            <label className="font-semibold text-sm text-gray-900 mb-1">
              Locations
            </label>
            <select className="border border-gray-300 w-[76px] sm:w-[126px] h-4 sm:h-[20px] text-xs tracking-[-2%] text-gray-500 leading-[15.12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select your city</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
          </div>
          {/* Line */}
          <div className="border-l border-[#C3D4E966] h-auto"></div>
          {/* Date Dropdown */}
          <div className="w-[87px] sm:w-[134px] h-11 sm:h-12 flex gap-2 flex-col">
            <label className="font-semibold text-sm text-gray-900 mb-1">
              Date
            </label>
            <select className="border border-gray-300 w-[87px] sm:w-[126px] h-4 sm:h-[20px] text-xs tracking-[-2%] text-gray-500 leading-[15.12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select your date</option>
              <option>12/12/2024</option>
              <option>13/12/2024</option>
              <option>14/12/2024</option>
            </select>
          </div>
          {/* Line */}
          <div className="border-l border-[#C3D4E966] h-auto"></div>

          {/* Time Dropdown */}
          <div className="sm:w-[130px] w-[52px] h-11 sm:h-12 flex gap-2  flex-col">
            <label className="font-semibold text-sm text-gray-900 mb-1">
              Time
            </label>
            <select className="border border-gray-300 w-[52px] sm:w-[126px] h-4 sm:h-[20px] text-xs tracking-[-2%] text-gray-500 leading-[15.12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select your time</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>2:00 PM</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
