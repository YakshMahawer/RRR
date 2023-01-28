// Common header for user page which includes Complain,Statistics and Status 

import React from 'react'
import {Link } from 'react-router-dom'



const Header = () => {
  return (
 <div className="header w-full h-16 bg-[#151515] text-[18px] font-bold grid grid-flow-col text-center items-center md:px-56 drop-shadow-md ">
    <Link className="complain text-[#a5a5a5] ease-in-out duration-200 hover:text-white " to='/'>COMPLAIN</Link>
    <Link className="statsistics text-[#a5a5a5] ease-in-out duration-200 hover:text-white border-x border-[#898989] " to='/statistics'>STATISTICS</Link>
    <Link className="status text-[#a5a5a5] ease-in-out duration-200 hover:text-white" to='/status'>CHECK STATUS</Link>
 </div>
  )
}

export default Header