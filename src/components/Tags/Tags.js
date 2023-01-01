import React from 'react'
import { Link } from 'react-router-dom'

const Tags = () => {
  return (
    <div>
        <div className='flex align-center border gap-1 mb-2'>
          <div className='dash'></div>
             <h5 className=' font-16 font-montserrat h-5 flex align-center color-dark'>
                Subscribe
            </h5>
        </div>

        <div className='flex justfy-center flex-wrap gap-1'>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
             </div>
              <div className='flex align-center bg-light-dark border-dark mb-1'>
                <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
             </div>
        </div>
    </div>
  )
}

export default Tags