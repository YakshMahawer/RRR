import React from "react";
import "./AcceptPopUp.css"
function RejectPopUp(props) {
  const adminUpdatesComplaint = async (event) => {
    event.preventDefault();
    const complaintId = event.target.comp_id.value;
    const status = event.target.comp_sta.value;
    const addInfo = event.target.option.value;
    const category = "other";
  
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

    window.location.reload();
  };
    return(props.trigger) ? (
        <div className="accept_pop_up">
        <form onSubmit={adminUpdatesComplaint}>
        <button className="close" onClick={() => props.setTrigger(false)}>x</button>
        <label>
          Select reason for rejection:
          <br></br>
          <select name="option" id="option">
            <option value="nonsense">Nonsence Message</option>
            <option value="badwords">Bad Words Used</option>
            <option value="otherlanguage">Other Language</option>
            <option value="abuse">Abusive Content</option>
          </select>
        </label>
        <br></br>
        {props.children}
        <input
                type="submit"
                value="Submit"
                className="done bg-[#151515] text-white ease-in-out duration-300 shadow-sm w-[100px] p-1 mt-4 rounded-3xl px-3 hover:cursor-pointer hover:bg-[#aea0e5] "
              />
        </form>
        </div>
    ) : "";
}

export default RejectPopUp;