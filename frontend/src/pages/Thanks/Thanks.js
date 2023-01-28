import React, { Fragment } from 'react'
import Header2 from '../Header/Header2'

const Thanks = () => {
  return (
    <Fragment>
        <Header2 />
        <div className="thanks bg-[#fffdfa] h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center ">
          <div className="thanks mb-[200px] ">
            <h1>THANK YOU FOR FILING YOUR COMPLAINT.</h1>
            <h2>YOUR COMPLAINT HAS BEEN REGISTERED.</h2>
            <h3>PLEASE CHECK BACK ON LATER DATE.</h3>
          </div>
        </div>
    </Fragment>
  )
}

export default Thanks