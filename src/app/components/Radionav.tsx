import React from "react";
interface ILabelProps {
    label?: string;

  }
export const RadioNav = (props: ILabelProps) => {
    const { label } = props;
  return (
    <div className=" w-[582px] left-16 h-[136px] top-[424px] flex flex-col items-start bg-white rounded-[10px]">
      {/* Radio Button Section */}
      <div className="relative w-[92px] top-6 left-12 h-5 flex items-center gap-2 justify-center">
            <input
            type="radio"
            id="pick-up"
            name="trip-type"
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
            />
            <label
            htmlFor="pick-up"
            className="font-semibold text-base text-[#1A202C]"
            >
            {label}
            </label>
      </div>

      {/* Options */}
      <div className="relative w-[486px] h-[48px] top-[60px] left-12 gap-6 flex">
            {/* Locations Dropdown */}
            <div className="w-[126px] h-12 flex gap-2 flex-col">
                <label className="font-semibold text-sm text-gray-900 mb-1">
                    Locations
                </label>
                <select className="border border-gray-300  w-[126px] h-[20px] text-xs tracking-[-2%] text-gray-500 leading-[15.12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your city</option>
                    <option>New York</option>
                    <option>Los Angeles</option>
                    <option>Chicago</option>
                </select>
            </div>
            {/* Line */}
            <div className="w-12 bg-[#C3D4E966] h-0 gap-0 border-t border-opacity-0 -rotate-90"></div>
            {/* Date Dropdown */}
            <div className="w-[134px] h-12 flex gap-2 flex-col">
                <label className="font-semibold text-sm text-gray-900 mb-1">
                    Date
                </label>
                <select className="border border-gray-300  w-[126px] h-[20px] text-xs tracking-[-2%] text-gray-500 leading-[15.12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your date</option>
                    <option>12/12/2024</option>
                    <option>13/12/2024</option>
                    <option>14/12/2024</option>
                </select>
            </div>
             {/* Line */}
            <div className="w-12 bg-[#C3D4E966] h-0 gap-0 border-t border-opacity-0 -rotate-90"></div>

            {/* Time Dropdown */}
            <div className="w-[134px] h-12 flex gap-2  flex-col">
                <label className="font-semibold text-sm text-gray-900 mb-1">
                    Time
                </label>
                <select className="border border-gray-300  w-[126px] h-[20px] text-xs tracking-[-2%] text-gray-500 leading-[15.12px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your time</option>
                    <option>10:00 AM</option>
                    <option>12:00 PM</option>
                    <option>2:00 PM</option>
                </select>
            </div>
      </div>
    </div>
  );
};
