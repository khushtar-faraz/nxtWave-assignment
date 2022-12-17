import React, { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [toggleState, setToggleState] = useState(1);

  const pageNumbers = [];

  const updateActive = (number) => {
    setToggleState(number);
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // TODO: FIX THE BUG

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
