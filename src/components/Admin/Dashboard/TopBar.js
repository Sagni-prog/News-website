import React from 'react'
import './topBar.css'
import { MdOutlineMenu } from 'react-icons/md'
import Images from '../../../constants/Images'

const TopBar = () => {

  const { mars } = Images;
  return (
    <div className='dashboard-topbar'>
      <div className='inside inside flex dashboard-bg-dark mb-sm'>

           <div className='dashboard-container flex justify-between h-100'>
              <div className='left-content flex align-center gap-3 h-100'>
                   <MdOutlineMenu className='color-light-gray font-16' />

                   <div className='search'>
                      <input className='search-field' placeholder='Search here'  />
                   </div>
              </div>

                
                    <div className='right-content flex align-center gap-1 h-100'>
                       <div className = "topbar-author-img">
                           <img src = {mars} />
                       </div>
                     <div className = "topbar-author-name">
                        <p className = "font-montserrat font-18 color-white">Mike Van</p>
                    </div>
                  </div>  
              
            </div>
       </div>
    </div>
  )
}

export default TopBar
