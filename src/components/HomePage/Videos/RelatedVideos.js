import React from 'react'
import {Link } from 'react-router-dom'
import forest from '../../../assets/images/africa.jpg'
import rally from '../../../assets/images/rally.jpg'
import { IoIosCamera } from 'react-icons/io'
import { MdPlayArrow } from 'react-icons/md'


const RelatedVideos = () => {
  return (
    <div className='related-videos'>
         <div className='related-videos'>
            <div className='flex gap-2 border-bottom2 pl-3'>
              <Link className='link font-montserrat font-18 font-weight-700 color-white p-2 border-bottom3'>Recommanded</Link>
              <Link className='link font-montserrat font-18 font-weight-700 color-white p-2'>Latest</Link>
            </div>
               <div className = 'flex align-center pl-3 pb-2 pr-1 pt-2'>
                
                <div className='related-videos w-40'>
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

                <div className='related-videos w-40'>
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

                <div className='related-videos w-40'>
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

          {/* related photos for minimum screen views starts */}
          <div className='resp-related-videos bg-white'>
            <div className=' mt-2 flex flex-col gap-2 bg-white'>
               <div className = "flex align-center gap-1">
               <div className='flex justfy-center align-center play-icon2'>
                     <MdPlayArrow className='color-white font-32'/>
                  </div>

                <div className='flex flex-col bg-white border-bottom pb-1'>
                    <h4 className= 'color-black font-weight-700 font-montserrat font-14 text-uppercase'>
                        Lorem ipsum dolor sit amet elit  sit amet elit...
                    </h4>

                <div className='flex justify-start gap-1 mt-1 w-100'>
                    <div className='dash-subcatagory'></div>
                        <div className='side-bar'>
                            <Link className='link font-16 font-montserrat flex align-center color-dark'>
                                News
                            </Link>
                         </div>
                    </div>
                </div>
            </div>
       <div className = "flex align-center gap-1">
         <div className='flex justfy-center align-center play-icon2'>
            <MdPlayArrow className='color-white font-32'/>
        </div>
        <div className='flex flex-col bg-white py-1 border-bottom'>
            <h4 className= 'color-black font-weight-700 font-montserrat font-14 text-uppercase'>
                Lorem ipsum dolor sit amet elit  sit amet elit...
            </h4>

        <div className='flex justify-start gap-1 mt-1 w-100'>
            <div className='dash-subcatagory'></div>
                 <div className='side-bar'>
                    <Link className='link font-16 font-montserrat flex align-center color-dark'>
                         News
                    </Link>
               </div>
             </div>
          </div>
          </div>

   <div className = "flex align-center gap-1">
      <div className='flex justfy-center align-center play-icon2'>
            <MdPlayArrow className='color-white font-32'/>
        </div>
        <div className='flex flex-col bg-white py-1'>
            <h4 className= 'color-black font-weight-700 font-montserrat font-14 text-uppercase'>
                Lorem ipsum dolor sit amet elit  sit amet elit...
            </h4>

        <div className='flex justify-start gap-1 mt-1 w-100'>
            <div className='dash-subcatagory'></div>
                 <div className='side-bar'>
                    <Link className='link font-16 font-montserrat flex align-center color-dark'>
                         News
                    </Link>
               </div>
             </div>
          </div>
          </div>
       </div> 
       
     </div>
            {/* related photos for minimum screen views ends*/}

    </div>
  )
}

export default RelatedVideos