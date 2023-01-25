import React , { Fragment , useState }from 'react'
import logo from "../../images/RRR_Netflix_logo.webp";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

 const Complain = () => {

  const [disabled , setDisabled ] = useState(true);

  const handleDisabled = (event) =>{
    const getProblem = event.target.value;
    setDisabled(getProblem);
  }

  return (
    <Fragment>
      <Header />
      <div className="info">
        <img src={logo} alt="RRR" className="logo w-24" /> 
        <form>
          <div clasName="voterId">
            <label htmlFor="start"> VOTER ID :</label>
            <input type="text" id="voterId" />
          </div>
          <div className="dob">
            <label htmlFor="dob">DATE OF BIRTH :</label>
            <input type="date" id="start" name="trip-start" min="2005-01-01" />
          </div>
          <div className="problems">
            <h5>Choose your problem from options given below</h5>
            <label htmlFor="problems">PROBLEMS :</label>

            <select name="problems" id="problems" onChange={(e) => (handleDisabled(e))}>
              <option value="">--Please choose an option--</option>
              <option value="water">Water Problem</option>
              <option value="electricity">Electricity Problem</option>
              <option value="road">Road Problem</option>
              <option value="others" >
                Other Problems
              </option>
            </select>
          
          </div>

         {
         disabled==="others" && ( 
         <div className="others">
            <h5>Write your problem if not in the options</h5>
            <label htmlFor="others">
              OTHERS :
            </label>

            <textarea
              id="others"
              name="others"
              rows="3"
              cols="40"
            />
          </div>    
          )
          }
          <Link to="/thanks">
            <input type="submit" value="Submit" className="submit" />
          </Link>
        </form>
      </div>
    </Fragment>
  );
}

export default Complain;