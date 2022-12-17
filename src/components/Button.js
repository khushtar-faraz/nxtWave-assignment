import React from "react";

const Button = ({ text, backgroundColor, click }) => {
  // TODO: Implement onClick

  return (
    <button
      onClick={(e) => click(e)}
      className={`bg-[${backgroundColor}] w-[107px] h-[40px] rounded-[4px] text-[white]`}
    >
      {text}
    </button>
  );
};

export default Button;
