import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  let buttonDisabled = !(
    title &&
    icon &&
    link &&
    category &&
    tag &&
    description
  );

  const handleCreateResourceItem = () => {};

  return (
    <form className="w-fit h-auto relative top-[45px]  mx-auto" action="">
      <h6 className="font-[600] text-[12px] leading-[16px] text-[#7E858E] mb-[8px]">
        TITLE
      </h6>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-[320px] h-[40px] rounded-[2px] bg-[#ffffff] text-[#171F46] text-center border border-solid border-[#D7DFE9] mb-[20px]"
        type="text"
      />
      <h6 className="font-[600] text-[12px] leading-[16px] text-[#7E858E] mb-[8px]">
        ICON URL
      </h6>
      <input
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        className="w-[320px] h-[40px] rounded-[2px] bg-[#ffffff] text-[#0B69FF] text-center border border-solid border-[#D7DFE9] mb-[20px]"
        type="text"
      />
      <h6 className="font-[600] text-[12px] leading-[16px] text-[#7E858E] mb-[8px]">
        LINK
      </h6>
      <input
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="w-[320px] h-[40px] rounded-[2px] bg-[#ffffff] text-[#0B69FF] text-center border border-solid border-[#D7DFE9] mb-[20px]"
        type="text"
      />
      <h6 className="font-[600] text-[12px] leading-[16px] text-[#7E858E] mb-[8px]">
        CATEGORY
      </h6>
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-[320px] h-[40px] rounded-[2px] bg-[#ffffff] text-[#171F46] text-center border border-solid border-[#D7DFE9] mb-[20px]"
        type="text"
      />
      <h6 className="font-[600] text-[12px] leading-[16px] text-[#7E858E] mb-[8px]">
        TAG
      </h6>
      <input
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="w-[320px] h-[40px] rounded-[2px] bg-[#ffffff] text-[#171F46] text-center border border-solid border-[#D7DFE9] mb-[20px]"
        type="select"
      />
      <h6 className="font-[600] text-[12px] leading-[16px] text-[#7E858E] mb-[8px]">
        DESCRIPTION
      </h6>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="rounded-[2px] bg-[#ffffff] text-[#171F46] text-center border border-solid border-[#D7DFE9] mb-[10px]"
        name=""
        id=""
        cols="42"
        rows="3"
      ></textarea>
      <br />
      <div className="flex justify-center">
        <button
          disabled={buttonDisabled}
          className={`bg-[#0B69FF] w-[107px] h-[40px] rounded-[4px] text-[white] text-center ${
            buttonDisabled && "opacity-[0.5] cursor-not-allowed"
          }`}
          onClick={() => handleCreateResourceItem}
        >
          CREATE
        </button>
      </div>
    </form>
  );
};

export default Form;
