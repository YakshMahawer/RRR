import React from "react";
import { useState } from "react";



function StatCom({area_name, total, problems}) {
  const [showMore, setShowMore] = useState(false);

console.log(area_name)
console.log(problems[0].category)
// const sorted = problems.sort((a, b) => b.count - a.count);

const problemswithpercent = problems.map((item) => {
  return {
    ...item,
    percent: (item.count / total) * 100,
  };
});

problemswithpercent.sort((a, b) => b.percent - a.percent);

  return (
      <div className="area-stat p-4 rounded-lg h-[50%] w-[50%] lg:w-[45%] bg-[#ffffff] shadow-lg ">
        <div className="p-4 w-full h-full ">
          <h1 className="font-bold text-xl pb-4 px-3 "> {area_name}<span className=" ml-4 text-base font-thin ">Total Complaints - {total}</span></h1>
          <div className=" overflow-y-auto h-[90%] scrollbar-thin scrollbar-thumb-[black] scrollbar-track-[grey] scrollbar-thumb-rounded-full scrollbar-track-rounded-full  ">
            <div>
            {problemswithpercent.map((item) => (
                <p className="my-3 w-full px-3 "><span className="font-bold"> </span> {item.category} <span className=" float-right mr-3 "> {item.percent}% </span> </p>
            ))}
            </div>
          </div>
        </div>
      </div>
  );
}


export default StatCom;