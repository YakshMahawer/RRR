import React from 'react'
import welcomeSVG from "../images/adminwelcome.svg"

const Mainbar = () => {
  return (
    <div>
      <div class="p-4 sm:ml-64 mt-20">
        <span>
            <img src={welcomeSVG} class="h-72 ml-1 mr-20"></img>
        </span>
        <div class="flex items-center justify-center h-35 mb-4 mt-7 rounded bg-gray-50 dark:bg-gray-900" style={{background:"lightgray"}}>
         <p class="text-4xl text-gray-400 dark:text-gray-500">Welcome To Admin Area !</p>
      </div>
      </div>
    </div>
  )
}

export default Mainbar
