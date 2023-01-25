// Common header for user page which includes Complain,Statistics and Status 

import React from 'react'
import {Link } from 'react-router-dom'



const Header = () => {
  return (
 <div className="header">
    <Link className="complain" to='/'>COMPLAIN</Link>
    <Link className="statsistics" to='/statistics'>STATISTICS</Link>
    <Link className="status" to='/status'>CHECK STATUS</Link>
 </div>
  )
}

export default Header