import React from 'react'
import finalcup from '../../assets/images/final_cup.jpg'
import brazil from '../../assets/images/brazil.jpg'
import africa from '../../assets/images/africa.jpg'
import mars from '../../assets/images/mars.jpg'
import nature from '../../assets/images/nature.jpg'
import festival from '../../assets/images/festival.jpg'
import { Link } from 'react-router-dom'
import { IoIosCamera } from 'react-icons/io'

const Photogallery = () => {
  return (
    <div className='shadow bg-white-resp w-100 py-2'>
      <div className='container flex align-center gap-1'>
          <div className='dash-gallery'></div>
              <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700'>
                  World in picture
              </h1>
          </div>

        <div className='container flex flex-col gap-2 top-gallery for-responsive'>
            <div className='photos for-responsive flex gap-2 w-100'>
             <div className='resp-photo col-span-3-1 w-100'>
              <div className='gallery-top-img-container'>
                  <img src = {finalcup} alt = ''/>
                    <div className='dark-overlay'></div>
                    <div className='flex justfy-center align-center camera-icon'>
                        <IoIosCamera className='color-white font-32'/>
                    </div>
                       <div className='gallery-overlay flex align-end'>
                           <div className='flex flex-col  p-2'>
                              <h4 className='font-montserrat color-white font-18'>
                                  Argentina win 2022 World Cup final-in pictur Argentina win 2022 world cup final-in pictureses
                              </h4>
                         </div>
                     </div>
                 </div>
             </div>

             <div className='resp-photo col-span-3-2 w-100'>
                <div className='gallery-top-img-container'>
                    <img src = {brazil} alt = ''/>
                    <div className='dark-overlay'></div>
                    <div className='flex justfy-center align-center camera-icon'>
                        <IoIosCamera className='color-white font-32'/>
                    </div>
                    <div className='gallery-overlay flex align-end'>
                     <div className='flex flex-col  p-2'>
                          <h4 className='font-montserrat color-white font-18'>
                            Great image from every mens World Cup final
                          </h4>
                     </div>
                  </div>
                </div>
             </div>
             </div>
            
              {/* related photos for minimum screen views starts */}
          <div className='resp-photo-disp bg-white'>
            <div className=' mt-2 flex flex-col gap-2 bg-white'>
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
            {/* related photos for minimum screen views ends*/}

        <div className='photos flex gap-2'>
             <div className='flex flex-col bg-white card-gallery'>
               <div className='gallery-bottom-img-container  position-relative'>
                    <img src = {mars} alt = ''/>
                    <div className='flex justfy-center align-center camera-icon'>
                        <IoIosCamera className='color-white font-32'/>
                    </div>
                </div> 

                <div className='flex flex-col  align-center'>
                     <h3 className='font-montserrat color-black font-18 font-weigh-700 p-1'>
                        Teenegers sunset har shot wins top RSCA prize
                     </h3>
                </div>
             </div>

             <div className='bg-white card-gallery'>
                <div className='gallery-bottom-img-container position-relative'>
                    <img src = {africa} alt = ''/>
                    <div className='flex justfy-center align-center camera-icon'>
                        <IoIosCamera className='color-white font-32'/>
                    </div>
                </div>
                <div className='flex flex-col  align-center'>
                     <h3 className='font-montserrat color-black font-18 font-weigh-700 p-1'>
                        Africas top shot: Puppies, pageants and paddles
                     </h3>
                 </div>
             </div>

             <div className='bg-white card-gallery none'>
                <div className='gallery-bottom-img-container position-relative'>
                    <img src = {festival} alt = ''/>
                    <div className='flex justfy-center align-center camera-icon'>
                        <IoIosCamera className='color-white font-32'/>
                    </div>
                </div>
                <div className='flex flex-col  align-center'>
                     <h3 className='font-montserrat color-black font-18 font-weigh-700 p-1'>
                       Row over festivity divides Afro-Colombian town
                     </h3>
                     <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
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
    </div>
  )
}

export default Photogallery