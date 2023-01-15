import React from 'react'

const Subscribe = () => {
  return (
    <div className='mb-l'>
        <div className='flex align-center border gap-1 mb-2'>
          <div className='dash'></div>
             <h5 className=' font-16 font-montserrat h-5 flex align-center color-dark'>
                Subscribe
            </h5>
        </div>
        <div className='bg-yellow'>
            <div className='p-2'>
            <p className='font-montserrat font-18 line-height-1-5  color-dark text-center'>
                Get all latest content delivered to your email a few times a month.
            </p>
          </div> 

          <div className='flex p-1'>
              <input className='input-subscribe font-montserrat font-16 color-light-gray border-r-none'  placeholder='YOUR EMAIL' />
              <div className='p-14 border-white cursor-pointer'>
                  <h4 className='flex align-center font-montserrat font-14 color-dark '>Sign Up</h4>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Subscribe