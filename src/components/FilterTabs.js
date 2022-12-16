import React, { useState } from "react";

const FilterTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

//   TODO: Implement filter functionality
  return (
    <div className="w-[600px] h-[40px] mt-[46px] mx-auto">
      <div className="flex justify-evenly box-border w-full h-full">
        <button
          className={
            toggleState === 1
              ? "bg-[#0B69FF] font-bold-600 text-white w-[200px] border border-solid border-[#D7DFE9] "
              : "text-black font-bold-600 w-[200px] bg-[#f2f4f7] border border-solid border-[#D7DFE9] "
          }
          onClick={() => toggleTab(1)}
        >
          Resources
        </button>
        <button
          className={
            toggleState === 2 ? "bg-[#0B69FF] font-bold-600 text-white w-[200px] border border-solid border-[#D7DFE9] " : "text-black font-bold-600 w-[200px] bg-[#f2f4f7] border border-solid border-[#D7DFE9] "
          }
          onClick={() => toggleTab(2)}
        >
          Requests
        </button>
        <button
          className={
            toggleState === 3 ? "bg-[#0B69FF] font-bold-600 text-white w-[200px] border border-solid border-[#D7DFE9] " : "text-black font-bold-600 w-[200px] bg-[#f2f4f7] border border-solid border-[#D7DFE9] "
          }
          onClick={() => toggleTab(3)}
        >
          Users
        </button>
      </div>
    </div>
  );
};

export default FilterTabs;
