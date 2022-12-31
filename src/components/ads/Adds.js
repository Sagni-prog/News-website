import React from 'react'
import logo from '../../assets/images/ads-728x90.png'
import { Link } from 'react-router-dom'

const Adds = () => {
  return (
    <div className='container h-8 grid grid-col-3-1-2 '>
        <div className='h-100 flex align-center'>
             <h1 className='font-32 font-montserrat'>
                <span className='color-yellow'>
                    News
                </span>
                <span className='color-dark'>
                    Portal
                </span>
             </h1>
        </div>
        <div className= 'h-100'></div>
        <div className='h-100 bg-white'>
            <Link to = ''>
               {/* <img src = {logo} alt = 'alt' /> */}
            </Link>
        </div>
    </div>
  )
}

export default Adds