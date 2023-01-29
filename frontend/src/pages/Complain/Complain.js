import React, { Fragment, useState } from "react";
// import logo from "../../images/RRR_Netflix_logo.webp";
import Header from "../Header/Header";
import bgsvg2 from "../../images/bgsvg2.svg";
import { useNavigate } from "react-router-dom";

const Complain = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const registercomplaint = async (event) => {
    event.preventDefault();

    const voterId = event.target.voterId.value;
    const dob = event.target.date.value;
    const option = event.target.option.value;
    const other = option === "other" ? event.target.others.value : "null";

    // console.log(voterId, dob, option, other);

    if (voterId === "" || dob === "" || option === "") {
      alert("Please fill all the fields");
      return;
    }

    const response = await fetch(
      "http://localhost:7070/complaint/registercomplaint",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          voterId,
          dob,
          option,
          other,
        }),
      }
    );

    const responseData = await response.json();

    if (responseData.status === "Accepted" || responseData.status === "Pending") {
      navigate("/thanks");
      // window.location.href = "/thankyou";
    } else if(responseData.error === 'Complaint already registered'){
      alert('Complaint already registerd')
    } else if(responseData.error === 'Invalid Voter Id'){
      alert('Invalid Details')
    }
  };

  const handleDisabled = (event) => {
    setDisabled(event.target.value);
  };

  return (
    <Fragment>
      <Header />
      <div className="info bg-[lightgray] h-[calc(100vh-4rem)] w-full flex justify-center items-center ">
        {/* <img src={logo} alt="RRR" className="logo w-24" />  */}
        <div className=" w-[85%] min-w-[350px] flex flex-row justify-around items-center p-8 bg-[#ffffff] rounded-2xl shadow-md ">
          <div className="form flex flex-col justify-center items-center">
            <h1 className="heading text-[23px] font-black mb-1 tracking-widest ">
              Enter Your Complain
            </h1>

            <form
              onSubmit={registercomplaint}
              className=" w-full leading-[40px] flex flex-col "
            >
            <div className="dob border-b border-[#afafaf] pb-1"></div>
              <p className=" font-bold mt-2 mb-2 tracking-wider">Enter Your Details :</p>
              <div className="voterId border-b border-[#afafaf] pb-4  ">
                {/* <label> VOTER ID :</label> */}
                <input
                  type="text"
                  id="voterId"
                  className=" shadow-md rounded-2xl w-full text-white px-3 placeholder:text-[#dadada] bg-[white] "
                  placeholder="Enter your VoterID"
                  
                />
              </div>

              <div className="dob border-b border-[#afafaf] pb-3">
                <label>D.O.B :</label>
                <input
                  type="date"
                  id="date"
                  name="trip-start"
                  max="2005-01-01"
                  className=" shadow-md rounded-2xl bg-[white] text-[#dadada] w-50 mx-2 mt-2 px-2 "
                />
              </div>
              <div className="problems border-b border-[#afafaf] pb-3">
                <h5 class="tracking-wider">Select your problem below</h5>
                <label class="tracking-wide">Option: </label>

                <select
                  onChange={(e) => handleDisabled(e)}
                  className=" px-6 mx-2 rounded-2xl shadow-md bg-[white] text-[black] "
                  name="option"
                  id="option"
                >
                  <option value="" className="tracking-wide">--Please choose an option--</option>
                  <option value="water" class="tracking-wide">Water Problem</option>
                  <option value="electricity" class="tracking-wide">Electricity Problem</option>
                  <option value="road" class="tracking-wide">Road Problem</option>
                  <option value="other" class="tracking-wide">Other Problems</option>
                </select>
              </div>

              {disabled === "other" && (
                <div className="others">
                  <div className="others grid grid-flow-row">
                    <h5>Write your problem if not in the options</h5>
                    {/* <label ="others">OTHERS :</label> */}

                    <textarea
                      id="others"
                      name="others"
                      rows="3"
                      cols="40"
                      placeholder="Write your problem here"
                      // disabled="true"
                      className="display-none border placeholder:px-3 rounded-sm bg-transparent border-[#afafaf] "
                    />
                  </div>
                </div>
              )}

              <input
                type="submit"
                value="Submit"
                className="submit bg-[#151515] text-white ease-in-out duration-300 shadow-sm w-[100px] p-0 mt-4 rounded-3xl px-3 hover:cursor-pointer hover:bg-[#aea0e5] tracking-wider "
              />
            </form>
          </div>
          <img
            src={bgsvg2}
            className="w-[50%] mx-2 max-[1000px]:hidden "
            alt="bg"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Complain;