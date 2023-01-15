import React from 'react'
import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <div className='w-100 h-4 bg-gray mb-1'>
        <div className ='container grid grid-col-2 h-100'>
           <div className='h-100 flex align-center'>
             <div className='h-100 flex align-center nav-link'>
                <Link className='link color-light-gray font-14 font-montserrat p-8' to=''>Monday, December 5 2022</Link>
             </div>
           </div>
           <div className='h-100 flex align-center justify-end color-white'>
           
            <div className='h-100 border-right flex align-center nav-link'>
                <Link className='link color-light-gray font-14 font-montserrat p-8' to=''>Contact</Link>
            </div>
            <div className='h-100 border-right flex align-center nav-link'>
                <Link className='link color-light-gray font-14 font-montserrat p-8' to=''>Register</Link>
            </div>
            <div className='h-100 flex align-center nav-link'>
                <Link className='link color-light-gray font-14 font-montserrat p-8' to=''>Login</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Top