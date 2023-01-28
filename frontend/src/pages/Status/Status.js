import React, { Fragment } from "react";
import Header from "../Header/Header";
import { useState } from "react";

const Status = () => {
  const [ error , setError] = useState(null);
  const [ complaint , setComplaint] = useState(null);

  const complaintStatus = async (e) => {
    e.preventDefault();
    const voterId = e.target.voterId.value;
    const dob = e.target.start.value;

    console.log(voterId, dob);

    const response = await fetch(`http://localhost:7070/complaints/${voterId}/${dob}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }});

    const responseData = await response.json();

    if (responseData.error){
      setError(responseData.error);
    }
    else{
      setComplaint(responseData);
    }
  };

  return (
    <Fragment>
      <Header />

      <div className="status bg-[#ffffff] flex flex-row justify-start items-center w-full h-[calc(100vh-4rem)] ">
        <div className="instatus w-96 h-full leading-8 ">
          <form
            onSubmit={complaintStatus}
           className=" w-full p-6 shadow-md border-[#a4a4a4] ">
            <h1 className="font-bold">Check your Complaint Status</h1>
            <div className="voterId border-b border-[#a1a1a1] pb-4 my-2 mt-4 ">
              <label > VOTER ID :</label>
              <input
                className="shadow-md rounded-2xl w-full text-white px-3 placeholder:text-[#dadada] bg-[#151515] "
                placeholder="VoterID"
                type="text"
                id="voterId"
                required
              />
            </div>
            <div className="dob my-2 border-b border-[#a1a1a1] pb-4 ">
              <label >Verify you Birth date</label>
              <input
                className="date shadow-md rounded-2xl bg-[white] text-[black] w-50  mt-2 px-2"
                type="date"
                id="start"
                name="trip-start"
                max="2005-01-01"
                required
              />
            </div>
            <button
              type="submit"
              value="Check Your Status"
              className="submit bg-[#151515] text-white ease-in-out duration-300 shadow-xl w-[100px] p-1 mt-4 rounded-3xl px-3 hover:cursor-pointer hover:bg-[#aea0e5] "
            >
              Check
            </button>
          </form>
        </div>
        <div className="statuscontent flex flex-col justify-center items-center  w-full h-full bg-[#f1f1f1] ">
          <div className="statusblock bg-[#ffffff] p-8 translate-y-[-250%] rounded-lg shadow-sm ">
            {error? (<h1 className="text-[#ff0000]">{error}</h1>) : 
            complaint ? (
              
            <h1>
              Your Complaint,
              <span> {complaint.category} </span>
              <span>
                 
                <span className=" px-4 py-1 bg-[orange] rounded-full ">
                  {complaint.status}
                </span>
              </span>
            </h1>
            ) : (
              <h1>Enter your details to check your complaint status</h1>
            )
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Status;
