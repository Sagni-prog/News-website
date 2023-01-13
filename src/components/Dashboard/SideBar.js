import React from 'react'
import './dashboard.css'
import './sidebar.css'
import Images from '../../constants/Images'


const SideBar = () => {

  const { mars } = Images;
  return (
    <div className='dashboard-sidebar dashboard-bg-dark h-100'>
      <div className = "sidebar-inside dashboard-bg-dark h-100">
          <div className='container pl-1'>
             <div className = "author flex align-center gap-1 mt-1">
                <div className = "author-img">
                    <img src = {mars} />
                </div>
                <div className = "author-name">
                     <p className = "font-montserrat font-18 color-white">Mike Van</p>
                </div>

                <div className = "menu">
                    menu
                </div>
             </div>
           </div>
        </div>
    </div>
  )
}

export default SideBar
