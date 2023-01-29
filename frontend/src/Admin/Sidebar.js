import React, { Fragment } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Fragment>
      <style>@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');</style>
      <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar" style={{background:"black"}}>
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800"  style={{background:"black"}}>
      <ul class="space-y-2">
      <Link to="/admin/myComplaints">
               <p className='myComp'>All Complains</p>
      </Link>
      <Link to="/admin/checkedComplaints">
               <p className='chkComp'>Checked Complains</p>
      </Link>
      <Link to="/admin/allComplaints">
               <p className='allComp'>My Complains</p>
      </Link>
      </ul>
   </div>
</aside>
    </Fragment>
  );
}

export default Sidebar