import React from "react";
import { setStatOpen } from "../states/componentState";
import { useDispatch } from "react-redux";


function StatCom({ AreaComplaints, AreaName, Count }) {
const dispatch = useDispatch();

    
  return (
      <div className="top-0 h-full w-full absolute animate-fade-in backdrop-blur-[2px] flex justify-center items-center bg-[#0000004e] ">
      <div className="area-stat p-4 rounded-lg h-[50%] w-[50%] bg-[#ffffff] shadow-lg ">
        <button
          className="tag1 bg-[#000000] rounded-full shadow-sm float-right pb-1.5 pt-1 text-2xl px-4 text-[#ffffff] text-center flex flex-col justify-center items-center"
          onClick={() => {
              dispatch(setStatOpen(false));
            }}
        >
          x
        </button>
        <div className="p-4">
          <h1><span className="font-bold">Area : </span>{AreaName}</h1>
          <p><span className="font-bold">Issues : </span> {Count} </p>
          <div className="  ">
            {AreaComplaints.map((item) => (
                <p><span className="font-bold">Complaint : </span> {item.complaint} </p>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default StatCom;
