import React from "react";
import RefreshIcon from "../icons/RefreshIcon";

const Refresh = ({ length }) => {
  return (
    <div
      className={`${
        length == 0 ? "container w-full mx-auto" : "container w-full mr-auto"
      } mt-4`}
    >
      <div
        className={`${
          length == 0
            ? "w-fit p-1 mx-auto text-gray-500 flex gap-2 border border-gray-300 rounded-md"
            : "w-fit ml-auto font-semibold text-gray-500 flex gap-2"
        }`}
      >
        <span>
          <RefreshIcon />
        </span>
        <span>refresh</span>
      </div>
    </div>
  );
};

export default Refresh;
