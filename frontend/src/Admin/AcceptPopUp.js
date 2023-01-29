import React from "react";
import "./AcceptPopUp.css"

function AcceptPopUp(props) {
  const adminUpdatesComplaint = async (event) => {
    event.preventDefault();
    const complaintId = event.target.compId.value;
    const status = event.target.compSta.value;
    const category = event.target.option.value;
    const addInfo = "null";
  
    console.log(complaintId, status, category, addInfo);
    
  
    const response = await fetch(
      "http://localhost:7070/admin/adminUpdatesComplaint",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          complaintId,
          status,
          category,
          addInfo,
        }),
      }
    );
  
    const responseData = await response.json();
    console.log(responseData);
    if (responseData.status === "Accepted") {
      console.log(responseData);
      window.location.reload();
    }
  };
    return(props.trigger) ? (
        <div className="accept_pop_up">
        <form onSubmit={adminUpdatesComplaint}>
        <button className="close" onClick={() => props.setTrigger(false)}>x</button>
        <label>
          What is the generalised category in your view:
          <br></br>
          <select name="option" id="option">
            <option value="road">Road Problem</option>
            <option value="water">Water Problem</option>
            <option value="electricity">Electricity Problem</option>
            <option value="gas">Gas Problem</option>
            <option value="unemployment">Unemployment Problem</option>
            <option value="medical">Medical Problem</option>
            <option value="hooliganism">Hooliganism Problem</option>
            <option value="poverty">Poverty Problem</option>
          </select>
        </label>
        <br></br>
        {props.children}
        <input
                type="submit"
                value="Submit"
                className="submit bg-[#151515] text-white ease-in-out duration-300 shadow-sm w-[100px] p-1 mt-4 rounded-3xl px-3 hover:cursor-pointer hover:bg-[#aea0e5] "
              />
        </form>
        </div>
    ) : "";
}

export default AcceptPopUp;