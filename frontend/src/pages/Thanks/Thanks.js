import React, { Fragment } from 'react'
import "./thank.css"
import Header2 from '../Header/Header2'
import tq from '../../images/thanksImg.svg'

const Thanks = () => {
  return (
    <Fragment>
    <style>@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@1,700&display=swap');</style>
        <Header2 />
          <div className="thanks">
          <img src={tq} className='tqImg'></img>
            <p id='p1'>THANK YOU FOR FILING YOUR COMPLAINT.</p>
            <p id='p2'>YOUR COMPLAINT HAS BEEN REGISTERED.</p>
            <p id='p3'>CLICK ON 'STATUS' TO KNOW STATUS OF YOUR COMPLAINT</p>
          </div>
    </Fragment>
  )
}

export default Thanks