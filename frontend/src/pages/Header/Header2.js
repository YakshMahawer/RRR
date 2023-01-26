// Header for Thank You Page which only includes staistics and status and not complain 

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header w-full h-16 bg-[#151515] text-[18px] font-bold grid grid-flow-col text-center items-center md:px-80 drop-shadow-md">
      <Link className="statsistics text-[#a5a5a5] ease-in-out duration-200 hover:text-white " to="/statistics">
        STATISTICS
      </Link>
      <Link className="status  text-[#a5a5a5] ease-in-out duration-200 hover:text-white border-l border-[#b5b3b3] " to="/status">
        CHECK STATUS
      </Link>
    </div>
  );
};

export default Header;
