import React, { Fragment } from "react";
import Header from "../Header/Header";

const Statistics = () => {
  return (
    <Fragment>
      <Header />
      <div className=" bg-[#fffdfa] fullpage h-[calc(100vh-4rem)] flex flex-col justify-start items-center ">
        <div className="seatsName mb-8 py-8 w-full relative flex flex-row justify-center items-center p-4  bg-[#fffdfa] border-b border-[#cbcbcb] ">
          <h4 className="pl-3">Enter the name of of your seat/area</h4>
          <input type="text" placeholder="area name" className="bg-[#c4c4c4] p-2 rounded-3xl placeholder:text-[#000000] outline-none px-4 w-56 mx-3 " />
        </div>
        <div className="seats w-[65%] h-56 bg-[blue] roun ">
          <a href=""></a>
        </div>
      </div>
    </Fragment>
  );
};

export default Statistics;
