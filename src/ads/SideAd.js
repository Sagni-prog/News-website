import React from 'react'
import ad1 from '../assets/images/news-800x500-1.jpg'

const SideAd = () => {
  return (
    <div className='mb-l'>
        <div className='flex align-center border gap-1 mb-1'>
          <div className='dash'></div>
             <h5 className=' font-16 font-montserrat h-5 flex align-center color-dark'>
                Advertisment
            </h5>
        </div>
        
        <div className='w-100 h-100'>
            <img className='img-profile' src = { ad1 } alt = 'hello'/>
        </div>
    </div>
  )
}

export default SideAd