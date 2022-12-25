import React from 'react'
import forest from '../assets/images/africa.jpg'
import rally from '../assets/images/rally.jpg'
import { Link } from 'react-router-dom'
import { IoIosCamera } from 'react-icons/io'
import { MdPlayArrow } from 'react-icons/md'

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
              <div className='flex justfy-center align-center play-icon'>
                        <MdPlayArrow className='color-white font-52'/>
                    </div>
          </div> 

          <div className=''>
            <div className='flex gap-2 border-bottom2 pl-3'>
              <Link className='link font-montserrat font-18 font-weight-700 color-white p-2 border-bottom3'>Recommanded</Link>
              <Link className='link font-montserrat font-18 font-weight-700 color-white p-2'>Latest</Link>
            </div>
               <div className = 'flex align-center pl-3 pb-2 pr-1 pt-2'>
                
                <div className='w-40'>
                    <div className='flex gap-2 w-100'>
                      
                        <div className='thumb-container'>
                            <img src = {rally} alt = '' />
                        </div>
                        
                        <div className='flex flex-col video-title '>
                             <h4 className='font-montserrat font-18 color-white'>
                                Venezeweulans ignore the 
                             </h4>
                        
                          <div className=''>
                             <div className='flex gap-1 mt-1'>
                               <div className='dash-subcatagory'></div>
                                 <div className='text-underline-white'>
                                   <Link className='link font-14 font-montserrat flex align-center color-light-gray'>
                                      Latin America
                                   </Link>
                                </div>
                             </div>
                           </div>
                        
                        </div>
                    </div>
                </div>

                <div className='w-40'>
                    <div className='flex gap-2 w-100'>
                      
                        <div className='thumb-container'>
                            <img src = {rally} alt = '' />
                        </div>
                        
                        <div className='flex flex-col video-title '>
                             <h4 className='font-montserrat font-18 color-white'>
                                Venezeweulans ignore the 
                             </h4>
                        
                          <div className=''>
                             <div className='flex gap-1 mt-1'>
                               <div className='dash-subcatagory'></div>
                                 <div className='text-underline-white'>
                                   <Link className='link font-14 font-montserrat flex align-center color-light-gray'>
                                      Latin America
                                   </Link>
                                </div>
                             </div>
                           </div>
                        
                        </div>
                    </div>
                </div>

                <div className='w-40'>
                    <div className='flex gap-2 w-100'>
                      
                        <div className='thumb-container'>
                            <img src = {rally} alt = '' />
                        </div>
                        
                        <div className='flex flex-col video-title '>
                             <h4 className='font-montserrat font-18 color-white'>
                                Venezeweulans ignore the 
                             </h4>
                        
                          <div className=''>
                             <div className='flex gap-1 mt-1'>
                               <div className='dash-subcatagory'></div>
                                 <div className='text-underline-white'>
                                   <Link className='link font-14 font-montserrat flex align-center color-light-gray'>
                                      Latin America
                                   </Link>
                                </div>
                             </div>
                           </div>
                        
                        </div>
                    </div>
                </div>
                 

               </div>
          </div>

      </div>
    </div>
  )
}

export default Videos