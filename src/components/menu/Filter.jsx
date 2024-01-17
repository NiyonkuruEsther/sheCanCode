/* eslint-disable no-unused-vars */
import { useState } from "react";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div onClick={() => setShowFilter(!showFilter)}>
      <div className="flex gap-3 relative select-none">
        <h1 className="text-xl">Filter</h1>
        <svg
          className="w-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          id="Filter"
        >
          <path
            d="M4 10h7.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2H22.91A6 6 0 0 0 11.09 8H4a1 1 0 0 0 0 2zM17 5a4 4 0 1 1-4 4A4 4 0 0 1 17 5zM44 23H36.91a6 6 0 0 0-11.82 0H4a1 1 0 0 0 0 2H25.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2zM31 28a4 4 0 1 1 4-4A4 4 0 0 1 31 28zM44 38H22.91a6 6 0 0 0-11.82 0H4a1 1 0 0 0 0 2h7.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2zM17 43a4 4 0 1 1 4-4A4 4 0 0 1 17 43z"
            data-name="Layer 15"
            fill="#ffffff"
            className="color000000 svgShape"
          ></path>
        </svg>
        {showFilter && (
          <div className="select-none absolute top-16 text-sm bg-white text-gray-950 rounded-lg shadow-md p-4">
            <h3 className="text-nowrap">By continent</h3>
            <hr className="my-2" />
            <div className="cursor-pointer space-y-2 text-nowrap">
              <p className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                Africa
              </p>
              <p className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                North America
              </p>
              <p className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                South America
              </p>
              <p className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                Asia
              </p>
              <p className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                Europe
              </p>
              <p className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                Oceania
              </p>
              <p className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                Antarctica
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
