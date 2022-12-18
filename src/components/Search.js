import React, { useState } from "react";
import { useFilters } from "../contexts/filters-context";

const Search = () => {
  const [input, setInput] = useState("");
  const { dispatchOfFilters } = useFilters();

  return (
    <form className="flex bg-[#FFFFFF] items-center border border-solid border-[#D7DFE9] rounded-[3px] relative w-[264px] mx-2 mt-4 sm:left-[10.3rem] md:left-10 lg:mt-[32px] lg:w-[648px] lg:left-[100px] h-[40px] xl:left-[92px]">
      <svg
        className="absolute left-[18px]"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.05888 4.77944C8.05888 6.59063 6.59063 8.05888 4.77944 8.05888C2.96826 8.05888 1.5 6.59063 1.5 4.77944C1.5 2.96826 2.96826 1.5 4.77944 1.5C6.59063 1.5 8.05888 2.96826 8.05888 4.77944ZM7.58708 8.64771C6.79881 9.22083 5.8286 9.55888 4.77944 9.55888C2.13983 9.55888 0 7.41905 0 4.77944C0 2.13983 2.13983 0 4.77944 0C7.41905 0 9.55888 2.13983 9.55888 4.77944C9.55888 5.82859 9.22084 6.79878 8.64773 7.58704L12.001 10.9403L10.9403 12.001L7.58708 8.64771Z"
          fill="#171F46"
        />
      </svg>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          dispatchOfFilters({
            type: "FILTER_BY_SEARCH",
            payload: input,
          });
        }}
        placeholder="Search"
        className="flex-grow outline-none bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 text-center"
      />
      <button type="submit" className="hidden" />
    </form>
  );
};

export default Search;
