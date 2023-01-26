import React, { Fragment } from "react";
import Header from "../Header/Header";
import { useState } from "react";

const data = [
  {
    name: "Area 1",
    id: 1,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
  {
    name: "Area 2",
    id: 2,
  },
]
const Statistics = () => {

  //  FILTERING DATA

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });



  return (
    <Fragment>
      <Header />
      <div className=" bg-[#fffdfa] fullpage h-[calc(100vh-4rem)] flex flex-col justify-start items-center ">
        <div className="seatsName mb-8 py-8 w-full flex flex-row justify-center items-center p-4  bg-[#fffdfa] border-b border-[#cbcbcb] ">
          <h4 className="pl-3">Enter the name of of your seat/area</h4>
          <input type="search" onChange={handleChange} placeholder="area name" className="bg-[#c4c4c4] p-2 rounded-3xl placeholder:text-[#444444] outline-none px-4 w-56 mx-3 " />
        </div>
        <div className="seats w-[65%] h-full flex flex-col items-center  ">

          <div className="tags flex flex-wrap justify-center p-2 pt-6 w-[100%] rounded-xl shadow-lg  bg-[#272727] ">
            
            {/* ------------------------FILTERED AREA DATA ----------- */}

            { search.length > 0 && filteredData.length === 0 && (
              <div className="tag1  px-4 py-1 mb-4 mr-3 text-[#ffffff] text-center flex flex-col justify-center items-center" >
                <h1 >No data found</h1>
                </div>
                )}

            {
              filteredData.map((item) =>
              (
                  <a className="tag1 bg-[#ffffff] rounded-3xl px-4 py-1 mb-4 mr-3 text-[#000000] text-center flex flex-col justify-center items-center" 
                  href={`/statistics/${item.id}`}
                  >
                    <h1 >{item.name}</h1>
                  </a>
                )
              
              )
            }
          </div>
          

        </div>
      </div>
    </Fragment>
  );
};

export default Statistics;
