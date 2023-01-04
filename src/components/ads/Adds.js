import React from 'react'
import logo from '../../assets/images/ads-728x90.png'
import { Link } from 'react-router-dom'

const Adds = () => {
  return (
    <div className='resp-add container h-8 flex justify-between gap-2  mb-sm'>
        <div className='logo h-100 flex align-center '>
             <h1 className='font-32 font-montserrat'>
                <span className='color-yellow'>
                    News
                </span>
                <span className='color-dark'>
                    Portal
                </span>
             </h1>
        </div>
   
        <div className='ad'>
            <a  href= 'https://www.youtube.com/watch?v=fQpFJY0sU4A'>
               <img src = {logo} alt = 'alt' />
            </a>
        </div>
    </div>
  )
}

export default Adds