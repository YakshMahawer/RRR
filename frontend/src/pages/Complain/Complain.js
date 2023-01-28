import React, { Fragment, useState } from "react";
// import logo from "../../images/RRR_Netflix_logo.webp";
import Header from "../Header/Header";
import bgsvg from "../../images/bgsvg.svg";
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

    console.log(voterId, dob, option, other);

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
    console.log(responseData);

    if (responseData.status === "success") {
      navigate("/thanks");
      // window.location.href = "/thankyou";
    }
  };

  const handleDisabled = (event) => {
    setDisabled(event.target.value);
  };

  return (
    <Fragment>
      <Header />
      <div className="info bg-[#f1f1f1] h-[calc(100vh-4rem)] w-full flex flex- justify-center items-center ">
        {/* <img src={logo} alt="RRR" className="logo w-24" />  */}
        <div className="container w-[55%] min-w-[350px] flex flex-row justify-around items-center p-4 bg-[#ffffff] rounded-3xl shadow-md ">
          <div className="form flex flex-col justify-center items-center">
            <h1 className="heading text-[18px] font-black mb-2 ">
              Enter your complaint
            </h1>

            <form
              onSubmit={registercomplaint}
              className=" w-full leading-[40px] flex flex-col "
            >
              <p className=" font-bold mb-4 ">Enter your details</p>
              <div className="voterId border-b border-[#afafaf] pb-4  ">
                {/* <label> VOTER ID :</label> */}
                <input
                  type="text"
                  id="voterId"
                  className=" shadow-md rounded-2xl w-full text-white px-3 placeholder:text-[#dadada] bg-[#151515] "
                  placeholder="Enter your VoterID"
                />
              </div>

              <div className="dob border-b border-[#afafaf] pb-3">
                <label>DATE OF BIRTH :</label>
                <input
                  type="date"
                  id="date"
                  name="trip-start"
                  max="2005-01-01"
                  className=" shadow-md rounded-2xl bg-[white] text-[black] w-50 mx-2 mt-2 px-2 "
                />
              </div>
              <div className="problems border-b border-[#afafaf] pb-3">
                <h5>Select your problem below</h5>
                <label >Option: </label>

                <select
                  onChange={(e) => handleDisabled(e)}
                  className=" px-4 mx-2 rounded-2xl shadow-md bg-[#151515] text-[#dddddd] "
                  name="option"
                  id="option"
                >
                  <option value="">--Please choose an option--</option>
                  <option value="water">Water Problem</option>
                  <option value="electricity">Electricity Problem</option>
                  <option value="road">Road Problem</option>
                  <option value="other">Other Problems</option>
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
                className="submit bg-[#151515] text-white ease-in-out duration-300 shadow-sm w-[100px] p-1 mt-4 rounded-3xl px-3 hover:cursor-pointer hover:bg-[#aea0e5] "
              />
            </form>
          </div>
          <img
            src={bgsvg}
            className="w-[50%] mx-2 max-[1000px]:hidden "
            alt="bg"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Complain;
