import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="w-[492px] h-11 flex justify-center items-center py-4">
      <div className="flex items-center border border-[#C3D4E966] rounded-full px-4 py-2 w-full max-w-lg bg-[#FFFFFF] shadow-sm">
        {/* Search Icon */}
        <div className="text-gray-400 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1112 4.5a7.5 7.5 0 014.65 12.15z"
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search something here"
          className=" flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
        />

        {/* Filter Icon */}
        <div className="text-gray-400 ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4h18M8 11h8m-10 7h12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
