import React, { Fragment } from "react";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatCom from "../../Components/StatCom";
import { setStatOpen } from "../../states/componentState";

// DATA IMPORT DUMMY DATA

// import data from "../../data/data";
import complaints from "../../data/complaints";
const aarea = [{
  area_name: "vadodara",
  total: 10,
  problems: [
    {
      category: "water",
      count: 6,
    },
    {
      category: "drainage",
      count: 1,
    },
    {
      category: "electricity",
      count: 3,
    },
  ],
},{
  area_name: "vadodaradd",
  total: 10,
  problems: [
    {
      category: "water",
      count: 6,
    },
    {
      category: "drainage",
      count: 1,
    },
    {
      category: "electricity",
      count: 3,
    },
  ],
}
];

const Statistics = () => {
  const [search, setSearch] = useState("");
  const [areaData, setAreaData] = useState();
  const [areaStat, setAreaStat] = useState("");
  const dispatch = useDispatch();
  const statPop = useSelector((state) => state.open);

  // FETCHING AREA DATA

  // const fetchArea = async () => {
  //   const res = await fetch("http://localhost:7070/area");
  //   const data = await res.json();
  //   // setAreaData(data);
  // };

  // useEffect(() => {
  //   fetchArea();
  // }, []);

  // setAreaData(aarea);

  //  FILTERING DATA

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = aarea.filter((item) => {
    return item.area_name.toLowerCase().includes(search.toLowerCase());
  });


  return (
    <Fragment>
      <Header />
      <div className=" bg-[#fffdfa] fullpage h-[calc(100vh-4rem)] flex flex-col justify-start items-center ">
        <div className="seatsName mb-8 py-8 w-full flex flex-row justify-center items-center p-4  bg-[#fffdfa] border-b border-[#cbcbcb] ">
          <h4 className="pl-3">Enter the name of of your seat/area</h4>
          <input
            type="search"
            onChange={handleChange}
            placeholder="area name"
            className="bg-[#c4c4c4] p-2 rounded-3xl placeholder:text-[#444444] outline-none px-4 w-56 mx-3 "
          />
        </div>
        <div className="seats w-[65%] h-full flex flex-col items-center  ">
          <div className="tags flex flex-wrap justify-center p-2 pt-6 w-[100%] rounded-xl shadow-lg  bg-[#272727] ">

            {/* ------------------------FILTERED AREA DATA ----------- */}

            {search.length > 0 && filteredData.length === 0  && (
              <div className="tag1  px-4 py-1 mb-4 mr-3 text-[#ffffff] text-center flex flex-col justify-center items-center">
                <h1>No data found</h1>
              </div>
            )}

            {/* ---------------FILTERED AREA TAGS ---------------------------- */}
            
            {filteredData.map((item) => (
              <button
                className="tag1 bg-[#ffffff] rounded-3xl px-4 py-1 mb-4 mr-3 text-[#000000] text-center flex flex-col justify-center items-center"
                onClick={() => {
                  setAreaStat(item);
                  console.log(item);
                  dispatch(setStatOpen(true));
                }}
              >
                <h1>
                  {item.area_name} <span className=" bg-[#bbdbf4] rounded-full p-1 "> {item.total}</span>
                </h1>
              </button>
            ))}
          </div>

          {/* --------------STATS POP-UP ----------------------- */}

          {statPop && (
            <StatCom
              Area={areaStat}
              AreaProblems={areaStat.problems}
            />
          )}

        </div>
      </div>
    </Fragment>
  );
};

export default Statistics;
