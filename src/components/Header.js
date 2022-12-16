import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="w-full h-[72px] bg-[#FFFFFF] top-0 left-0 box-border flex items-center justify-between border-b-[#D7DFE9] border">
      <div>
        <img
          src="https://scontent.fixr4-1.fna.fbcdn.net/v/t39.30808-6/277295615_459119082625053_2253200640363655623_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8aiOb3x6sBIAX8GLfCk&_nc_ht=scontent.fixr4-1.fna&oh=00_AfDRSEkvvyysayOtYf6H2xRnH5BFQoSoXKAbYPsWY486jQ&oe=63A15F2C"
          alt="company logo"
          className=" h-[60px] ml-[48px] object-contain"
        />
      </div>

      {/* TODO: conditional rendering of Button component */}
      <div className="flex items-center gap-[10px]">
        <Button text="ADD ITEM" backgroundColor="#2DCA73" click={()=>{}}/>
        <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=is&k=20&c=I2SanirjQN_dCkpeSoGEvbffSnkGQSwIEwpqQP9AR8I=" alt="avatar" className="h-[32px] mr-4"/>
      </div>
    </div>
  );
};

export default Header;