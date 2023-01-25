import React, { Fragment } from 'react'
import Header from '../Header/Header'

const Statistics = () => {
 
  return (
    <Fragment>
      <Header />
      <div className="seatsName">
        <h4>Enter the name of of your seat/area</h4>
        <input type="text" />
      </div>
      <div className="seats">
        
      </div>
    </Fragment>
  );
}

export default Statistics