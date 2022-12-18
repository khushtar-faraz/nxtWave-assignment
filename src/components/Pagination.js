import React from "react";
import { usePaginationContext } from "../contexts/pagination-context";

const Pagination = ({ postsPerPage, totalPosts }) => {
  const { paginate, toggleState, setToggleState } = usePaginationContext();

  const pageNumbers = [];

  const updateActive = (number) => {
    setToggleState(number);
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="w-full mx-auto">
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="p-4">
            <span
              onClick={() => {
                paginate(number);
                updateActive(number);
              }}
              className={
                toggleState === number
                  ? "text-[black] text-[20px] cursor-pointer"
                  : "text-[#0B69FF] text-[20px] cursor-pointer"
              }
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
