import React from "react";
import "./AcceptPopUp.css"
function RejectPopUp(props) {
    return(props.trigger) ? (
        <div className="accept_pop_up">
        <form>
        <button className="close" onClick={() => props.setTrigger(false)}>x</button>
        <label>
          Select reason for rejection:
          <br></br>
          <select>
            <option value="nonsense">Nonsence Message</option>
            <option value="badwords">Bad Words Used</option>
            <option value="otherlanguage">Other Language</option>
            <option value="abuse">Abusive Content</option>
          </select>
        </label>
        <br></br>
        <label>
            Write us about the complaint:
            <br></br>
            <input type="text" value = ""></input>
        </label>
        <br></br>
        <button>Done</button>
        {props.children}
        </form>
        </div>
    ) : "";
}

export default RejectPopUp;