import React from 'react'
import logo from '../../../assets/images/ads-728x90.png'
import { Link } from 'react-router-dom'

const Adds = () => {
  return (
    <div className='resp-add container h-8 flex justify-between gap-2  mb-sm'>
        <div className='logo h-100 flex align-center '>
              <Link to='/' className='link font-32 font-montserrat font-weight-700'>
                <span className='color-yellow'>
                    Zena
                </span>
                <span className='color-dark'>
                    Log
                </span>
                </Link>
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