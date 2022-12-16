import React from "react";

const ResourceCard = ({
  title,
  description,
  icon,
  link,
  category,
  tag,
  id,
}) => {
  return (
    <div className="bg-[#FFFFFF] box-border w-[360px] h-[192px] rounded-[4px] border border-solid border-[#D7DFE9]">
      <div className="m-[24px]">
        <div className="flex">
          <div className="w-[44px] h-[44px] rounded-[4px] border border-solid border-[#D7DFE9]">
            <img src={icon} alt="icon" className="w-full h-full object-cover" />
          </div>
          <div className="ml-[16px]">
            <h5 className="text-[#171F46] text-[16px] font-[500] leading-[24px]">
              {title}
            </h5>
            <h6 className="text-[#7E858E] text-[12px] font[400] leading-[16px]">
              {category}
            </h6>
          </div>
        </div>

        <p className="mt-[20px] text-[#0B69FF] font-[400] text-[14px] leading[24px]">
          <a href={link}>{link}</a>
        </p>
        <p className="mt-[8px] text-[#7E858E] font-[400] text-[14px] leading[24px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ResourceCard;
