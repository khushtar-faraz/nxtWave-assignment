import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  let location = useLocation();
  let navigate = useNavigate();
  return (
    <div className="w-[100vw] bg-[#FFFFFF] top-0 left-0 box-border flex items-center justify-between border-b-[#D7DFE9] border xs:h-[30px] sm:h-[50px] md:h-[60px] xl:h-[72px]">
      <div>
        <Link to={"/"}>
          <img
            src="https://scontent.fixr4-1.fna.fbcdn.net/v/t39.30808-6/277295615_459119082625053_2253200640363655623_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8aiOb3x6sBIAX8GLfCk&_nc_ht=scontent.fixr4-1.fna&oh=00_AfDRSEkvvyysayOtYf6H2xRnH5BFQoSoXKAbYPsWY486jQ&oe=63A15F2C"
            alt="company logo"
            className="xs:h-10 w-10 ml-2 sm:h-12 sm:w-12 sm:ml-4 md:ml-6 lg:h-14 md:w-14 lg:ml-8 xl:ml-[48px] object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center gap-[10px]">
        {location.pathname === "/" && (
          <button
            className={"bg-[#2DCA73] rounded-[4px] text-[white] sm: w-20 sm: h-6 md:w-[100px] md:h-[30px] lg:w-[107px] lg:h-[40px]"}
            onClick={() => navigate("/addItem")}
          >
            ADD ITEM
          </button>
        )}
        <img
          src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=is&k=20&c=I2SanirjQN_dCkpeSoGEvbffSnkGQSwIEwpqQP9AR8I="
          alt="avatar"
          className="h-[32px] mr-4"
        />
      </div>
    </div>
  );
};

export default Header;
