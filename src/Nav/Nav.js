import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-gray w-100 h-7 flex mt-2'>
        <div className='container h-100 flex justify-between align-center'>
            <div className='h-100 flex align-center justify-between gap-2'>
                <Link className='bg-yellow h-100 color-dark-gray flex align-center link font-18 font-montserrat px-1' to = ''>Home</Link>
                <Link className='link font-18 font-montserrat color-white' to = ''>Single</Link>
                <Link className='link font-18 font-montserrat color-white' to = ''>Catagory</Link>
                <Link className='link font-18 font-montserrat color-white' to = ''>Contact</Link>
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