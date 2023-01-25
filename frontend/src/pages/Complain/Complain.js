import React, { Fragment } from "react";
import logo from "../../images/RRR_Netflix_logo.webp";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
// import { useNavigate } from "react-router-dom";

const Complain = () => {
  // const navigate = useNavigate();

  return (
    <Fragment>
      <Header />
      <div className="info bg-[#fffdfa] h-[calc(100vh-4rem)] w-full flex flex- justify-center items-center " >
        {/* <img src={logo} alt="RRR" className="logo w-24" />  */}
        <div className="container w-[45%] flex flex-col justify-center items-center p-4 border-y border-[#a6a6a6] ">
          <h1 className="heading text-[18px] font-black mb-2 ">Enter your complain</h1>

          <form className=" w-full leading-[40px] flex flex-col ">
            <p className=" font-bold mb-4 ">Enter your details</p>
            <div clasName="voterId">
              {/* <label htmlFor="start"> VOTER ID :</label> */}
              <input type="text" id="voterId" className="border rounded-sm border-[#afafaf] w-full placeholder:p-3 bg-transparent " placeholder="Enter your VoterID" />
            </div>
            <div className="dob">
              <label htmlFor="dob">DATE OF BIRTH :</label>
              <input
                type="date"
                id="start"
                name="trip-start"
                min="2005-01-01"
                className="border rounded-sm bg-transparent border-[#afafaf] w-50 mx-2 mt-2 px-2 "
              />
            </div>
            <div className="problems">
              <h5>Select your problem below</h5>
              <label htmlFor="problems">Option: </label>

              <select className="border px-4 mx-2 rounded-sm border-[#afafaf] bg-transparent" name="problems" id="problems">
                <option value="" disabled="true" >--Please choose an option--</option>
                <option value="water">Water Problem</option>
                <option value="electricity">Electricity Problem</option>
                <option value="road">Road Problem</option>
                <option value="others">Other Problems</option>
              </select>
            </div>
            <div className="others grid grid-flow-row">
              <h5>Write your problem if not in the options</h5>
              {/* <label htmlFor="others">OTHERS :</label> */}

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
              <button type="submit" value="Submit"  className="submit bg-[#ebcea8] w-24 mt-4 rounded-3xl px-3 " >
            <Link className="w-full " to="/thanks">
              Submit
            </Link>
              </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Complain;
