import React, { Fragment } from "react";
import Header from "../Header/Header";
import "./Status.css";

const Status = () => {
  return (
    <Fragment>
      <Header />
      <div className="status">
        <div className="voterId">
          <label for="start"> VOTER ID :</label>
          <input type="text" id="voterId" required />
        </div>
        <div className="dob">
          <label for="dob">DATE OF BIRTH :</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2005-01-01"
            required
          />
        </div>
        <input type="submit" value="Check Your Status" className="submit" />
      </div>
    </Fragment>
  );
};

export default Status;
