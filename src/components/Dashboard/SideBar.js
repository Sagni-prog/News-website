/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './dashboard.css'
import './sidebar.css'
import Images from '../../constants/Images'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { AiFillDashboard } from 'react-icons/ai'
import { IoNewspaperOutline } from 'react-icons/io5'
import { FaTasks } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const SideBar = () => {

  const { mars } = Images;
  return (
    <div className='dashboard-sidebar dashboard-bg-dark h-100'>
      <div className = "sidebar-inside dashboard-bg-dark h-100">
          <div className='container pl-1'>
             <div className = "author flex align-center gap-4 mt-2">
              <div className='flex align-center gap-1'>
                <div className = "author-img">
                    <img src = {mars} />
                </div>
                <div className = "author-name">
                     <p className = "font-montserrat font-18 color-white">Mike Van</p>
                 </div>
               </div>  
              
                     <BiDotsVerticalRounded className = "menu-icon color-light-gray font-24 " />
             </div>
           </div>
 
           <ul className='mt-3 flex flex-col gap-2'>
                <li>
                    <Link className='link flex align-center gap-1 font-montserrat font-18 color-white pl-3'>
                         <span className='icon-bg'>
                           <AiFillDashboard className='font-24 color-light-gray '/>
                         </span>
                         Dashboard
                    </Link>
                </li>
                <li>
                    <Link className='link flex align-center gap-1 font-montserrat font-18 color-light-gray pl-3'>
                         <span className='icon-bg'>
                           <IoNewspaperOutline className='font-24 color-light-gray '/>
                         </span>
                         Post
                    </Link>
                </li>
                <li>
                    <Link className='link flex align-center gap-1 font-montserrat font-18 color-light-gray pl-3'>
                         <span className='icon-bg'>
                           <FaTasks className='font-24 color-light-gray '/>
                         </span>
                         Catagory
                    </Link>
                </li>
                <li>
                    <Link className='link flex align-center gap-1 font-montserrat font-18 color-light-gray pl-3'>
                         <span className='icon-bg'>
                           <FaTasks className='font-24 color-light-gray '/>
                         </span>
                         Subcatagory
                    </Link>
                </li>
                <li>
                    <Link className='link flex align-center gap-1 font-montserrat font-18 color-light-gray pl-3'>
                         <span className='icon-bg'>
                           <AiFillSetting className='font-24 color-light-gray '/>
                         </span>
                         Settings
                    </Link>
                </li>
               
           </ul>

        </div>
    </div>
  )
}

export default SideBar
