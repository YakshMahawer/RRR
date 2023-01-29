import React from "react";
import "./AcceptPopUp.css"
function AcceptPopUp(props) {
    return(props.trigger) ? (
        <div className="accept_pop_up">
        <form>
        <button className="close" onClick={() => props.setTrigger(false)}>x</button>
        <label>
          What is the generalised category in your view:
          <br></br>
          <select>
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
        <button>Done</button>
        {props.children}
        </form>
        </div>
    ) : "";
}

export default AcceptPopUp;