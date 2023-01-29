import React, { Fragment } from "react";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatCom from "../../Admin/StatCom";
import { setAreaData } from "../../states/componentState";


const Statistics = () => {
  const dispatch = useDispatch();
  const areaData = useSelector((state) => state.areaData);
  const [search, setSearch] = useState("");
  const [statopen, setStatOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState();
  const [error, setError] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  // FETCHING AREA DATA

  const fetchArea = async () => {
    const res = await fetch("http://localhost:7070/area");
    const data = await res.json();
    console.log(data);
    if (!data) {
      setError(true);
    }else{
      setError(false);
      dispatch(setAreaData(data));
      console.log(areaData);
    }

  };

  useEffect(() => {
    fetchArea();
  }, []);

  //  FILTERING DATA

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredData(
      areaData.filter((item) => {
        return item.area_name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, areaData]);


  return (
    <Fragment>
      <Header />
      <div className=" bg-[#fffdfa] fullpage h-[calc(100vh-4rem)] flex flex-col justify-start items-center ">
        <div className="seatsName mb-8 py-8 w-full flex flex-row justify-center items-center p-4  bg-[#fffdfa] border-b border-[#cbcbcb] ">
          <h4 className="pl-3 tracking-wide text-[20px]">Enter the name of of your seat/area</h4>
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

            {search.length > 0 && filteredData.length === 0 && (
              <div className="tag1  px-4 py-1 mb-4 mr-3 text-[#ffffff] text-center flex flex-col justify-center items-center">
                <h1
                  className=" font-bold bg-gradient-to-r bg-clip-text  text-transparent 
            from-[#891cd6] via-[#ff0000] to-[#6338c8]
            animate-text"
                >
                  No data found
                </h1>
              </div>
            )}
            {!areaData.length && (
              <div className="tag1  px-4 py-1 mb-4 mr-3 text-[#ffffff] text-center flex flex-col justify-center items-center">
                <h1
                  className=" font-bold bg-gradient-to-r bg-clip-text  text-transparent 
            from-[indigo] via-[#d60000] to-[#513496]
            animate-text"
                >
                  Loading{" "}
                </h1>
              </div>
            )}

            {/* ---------------FILTERED AREA TAGS ---------------------------- */}

            {filteredData.map((item) => (
              <button
                className="tag1 bg-[#ffffff] rounded-3xl px-4 py-1 mb-4 mr-3 text-[#000000] text-center flex flex-col justify-center items-center"
                onClick={() => {
                  setSelectedArea(item);
                  setStatOpen(true);
                }}
                key={item}
              >
                <h1>
                  {item.area_name}{" "}
                  <span className=" bg-[#bbdbf4] rounded-full p-1 bg-gradient-to-r bg-clip-text text-transparent from-[indigo] via-[#d60000] to-[#513496] animate-text ">
                    {" "}
                    {item.total_problems}
                  </span>
                </h1>
              </button>
            ))}
          </div>

          {/* --------------STATS POP-UP ----------------------- */}

          {statopen && (
            <div  className="top-0 h-full w-full absolute animate-fade-in backdrop-blur-[2px] flex flex-col justify-center items-center bg-[#0000004e] ">
              <StatCom
                area_name={selectedArea.area_name}
                total={selectedArea.total_problems}
                problems={selectedArea.problems}
              />

              <button
                className="tag1 bg-[#000000] rounded-full shadow-md right-[23%] top-[23%] lg:right-[26%] absolute
                 py-3 px-6 text-2xl text-[#ffffff] text-center flex flex-col justify-center items-center"
                onClick={() => {
                  setStatOpen(false);
                }}
              >
                x
              </button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Statistics;
