import React from 'react'
import forest from '../assets/images/forest.jpg'

const Videos = () => {
  return (
    <div className='bg-white'>
       <div className='container flex align-center gap-1 mb-2'>
           <div className='dash-gallery'></div>
              <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700'>
                  Videos
              </h1>
          </div>
      <div className='container bg-gray flex flex-col'>
          <div className='thumbnail'>
              <img src={forest} alt=''/>
          </div> 

          <div className='p-1'>
          </div>

      </div>
    </div>
  )
}

export default Videos