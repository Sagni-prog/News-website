import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-gray w-100 h-7 flex mt-2'>
        <div className='container h-100 flex justify-between align-center'>
            <div className='h-100 flex align-center justify-between gap-2'>
              <div className='home'>
                <Link className=' h-100 color-white link font-18 font-montserrat pb-8' to = ''>Home</Link>
                </div>

              
               <div className='nav-link'> 
                   <Link className='link font-18 font-montserrat color-white pb-8' to = ''>Single</Link>
              </div>

                <div className='nav-link'>
                     <Link  Link className='link font-18 font-montserrat color-white pb-8' to = ''>Catagory</Link>
                </div>

                <div className='nav-link'>
                    <Link className='link font-18 font-montserrat color-white pb-8' to = ''>Contact</Link>
                </div>
            </div>
            <div className='h-100 flex align-center'>
                <input className='input h-4 w-100 pl-8 pr-4' placeholder='Keyword' />
                <div className='bg-yellow h-4 w-4'></div>
            </div>
        </div>
    </div>
  )
}

export default Nav