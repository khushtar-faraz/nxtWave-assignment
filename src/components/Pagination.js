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

  return (
    <nav className="w-full mx-auto">
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="p-4">
            <a
              onClick={() => {
                paginate(number);
                updateActive(number);
              }}
              href="!#"
              className={toggleState===number?"text-[black] text-[20px]":"text-[#0B69FF] text-[20px]"}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
