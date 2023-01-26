import React, { Fragment } from "react";
import Header from "../Header/Header";

const Status = () => {
  return (
    <Fragment>
      <Header />

      <div className="status bg-[#fffdfa] flex flex-row justify-start items-center w-full h-[calc(100vh-4rem)] ">
        <div className="instatus w-96 h-full leading-8 ">
          <form className=" w-full p-8 border-r h-full border-[#a4a4a4] ">
            <div className="voterId">
              <label for="start"> VOTER ID :</label>
              <input
                className="shadow-md rounded-2xl w-full text-white px-3 placeholder:text-[#dadada] bg-[#151515] "
                placeholder="VoterID"
                type="text"
                id="voterId"
                required
              />
            </div>
            <div className="dob">
              <label for="dob">DATE OF BIRTH :</label>
              <input
                className="date shadow-md rounded-2xl bg-[white] text-[black] w-50 mx-2 mt-2 px-2"
                type="date"
                id="start"
                name="trip-start"
                min="2005-01-01"
                required
              />
            </div>
            <button
              type="submit"
              value="Check Your Status"
              className="submit bg-[#151515] text-white ease-in-out duration-300 shadow-sm w-[100px] p-1 mt-4 rounded-3xl px-3 hover:cursor-pointer hover:bg-[#aea0e5] "
            >
              Check
            </button>
          </form>
        </div>
        <div className="statuscontent  w-full bg-[black] ">
dd
        </div>
      </div>
    </Fragment>
  );
};

export default Status;
