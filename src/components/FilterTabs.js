import React, { useState } from "react";
import { useFilters } from "../contexts/filters-context";
import { usePaginationContext } from "../contexts/pagination-context";

const FilterTabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const { dispatchOfFilters } = useFilters();
  const { paginate, setToggleState: setPageNumberColorToggle } =
    usePaginationContext();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="mt-4 mx-2 sm:mx-auto sm:mt-[46px] sm:w-[300px] md:w-[450px] lg:w-[600px]">
      <div className="flex justify-evenly box-border w-full h-full">
        <button
          className={
            toggleState === 1
              ? "bg-[#0B69FF] font-bold-600 text-white w-[200px] border border-solid border-[#D7DFE9] "
              : "text-black font-bold-600 w-[200px] bg-[#f2f4f7] border border-solid border-[#D7DFE9] "
          }
          onClick={() => {
            toggleTab(1);
            paginate(1);
            setPageNumberColorToggle(1);
            dispatchOfFilters({ type: "CLEAR_ALL" });
          }}
        >
          Resources
        </button>
        <button
          className={
            toggleState === 2
              ? "bg-[#0B69FF] font-bold-600 text-white w-[200px] border border-solid border-[#D7DFE9] "
              : "text-black font-bold-600 w-[200px] bg-[#f2f4f7] border border-solid border-[#D7DFE9] "
          }
          onClick={() => {
            toggleTab(2);
            paginate(1);
            setPageNumberColorToggle(1);
            dispatchOfFilters({
              type: "FILTER_BY_CATEGORY",
              payload: "request",
            });
          }}
        >
          Requests
        </button>
        <button
          className={
            toggleState === 3
              ? "bg-[#0B69FF] font-bold-600 text-white w-[200px] border border-solid border-[#D7DFE9] "
              : "text-black font-bold-600 w-[200px] bg-[#f2f4f7] border border-solid border-[#D7DFE9] "
          }
          onClick={() => {
            toggleTab(3);
            paginate(1);
            setPageNumberColorToggle(1);
            dispatchOfFilters({ type: "FILTER_BY_CATEGORY", payload: "user" });
          }}
        >
          Users
        </button>
      </div>
    </div>
  );
};

export default FilterTabs;
