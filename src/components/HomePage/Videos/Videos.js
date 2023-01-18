import React from 'react'
import forest from '../../../assets/images/africa.jpg'
import { Link } from 'react-router-dom'
import { MdPlayArrow } from 'react-icons/md'
import RelatedVideos from './RelatedVideos'

const Videos = () => {
  return (
    <div className='bg-white mb-l'>
       <div className='container flex align-center gap-1 mb-2'>
           <div className='dash-gallery'></div>
              <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700'>
                  Videos
              </h1>
              
          </div>
      <div className='container bg-gray flex flex-col'>
          <div className='thumbnail position-relative'>
              <img src={forest} alt=''/>
              <div className='dark-overlay'></div>
              <div className='gallery-overlay flex align-end'>
                <div className='flex flex-col p-2 w-80'>
                   <h4 className='font-montserrat color-white font-24 video-font-responsive'>
                         Argentina win 2022 World Cup final-in pictur Argentina win 2022 world cup final-in pictureses
                     </h4>
                          <div className='flex gap-1 mt-1'>
                             <div className='dash-subcatagory'></div>
                                <div className='text-underline-white'>
                                   <Link className='link font-14 font-montserrat flex align-center color-light-gray'>
                                       Football
                                   </Link>
                                </div>
                           </div>
                      </div>
                  </div>
                  <div className='flex justfy-center align-center play-icon '>
                     <MdPlayArrow className='color-white font-52 viddeo-play-icon-responsive'/>
                  </div>
          </div> 

      <RelatedVideos />

      </div>
    </div>
  )
}

export default Videos