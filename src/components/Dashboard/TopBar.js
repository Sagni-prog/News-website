import React from 'react'
import './topBar.css'
import { MdOutlineMenu } from 'react-icons/md'

const TopBar = () => {
  return (
    <div className='dashboard-topbar w-100 '>
      <div className='w-100 inside flex dashboard-bg-dark'>
       <div className='title-bar container'>
          <h1 className='font-montserrat font-24 color-white pl-3 pt-3'>Admin</h1>
       </div>
       <div className='leftBar w-100'>
            <MdOutlineMenu className='color-light-gray font-16 mt-2 ml-2' />
       </div>
       </div>
    </div>
  )
}

export default TopBar
