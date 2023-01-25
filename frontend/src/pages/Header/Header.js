// Common header for user page which includes Complain,Statistics and Status 

import React from 'react'
import {Link } from 'react-router-dom'



const Header = () => {
  return (
 <div className="header w-full h-16 bg-[#fdf9f0] text-[18px] font-bold grid grid-flow-col text-center items-center md:px-56 drop-shadow-md ">
    <Link className="complain text-[#696969] ease-in-out duration-200 hover:text-black " to='/'>COMPLAIN</Link>
    <Link className="statsistics text-[#696969] ease-in-out duration-200 hover:text-black border-x border-[#898989] " to='/statistics'>STATISTICS</Link>
    <Link className="status text-[#696969] ease-in-out duration-200 hover:text-black" to='/status'>CHECK STATUS</Link>
 </div>
  )
}

export default Header