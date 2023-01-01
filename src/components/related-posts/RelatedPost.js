import React from 'react'
import finalcup from '../../assets/images/final_cup.jpg'
import brazil from '../../assets/images/brazil.jpg'
import africa from '../../assets/images/africa.jpg'
import mars from '../../assets/images/mars.jpg'
import nature from '../../assets/images/nature.jpg'
import festival from '../../assets/images/festival.jpg'
import { Link } from 'react-router-dom'
import { IoIosCamera } from 'react-icons/io'

const RelatedPost = () => {
  return (
    <div className='bg-light-gray py-4 mb-l'>
       <div className='container'>
         <div className='flex align-center gap-1'>
            <div className='dash-gallery'></div>
               <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700'>
                  Related posts
              </h1>
          </div>
          <div className='grid grid-col-3 gap-2'>
            <div className='flex flex-col bg-white card-gallery'>
               <div className='gallery-bottom-img-container  position-relative'>
                    <img src = {mars} alt = ''/>
                </div> 

                <div className='flex flex-col  align-center'>
                     <h3 className='font-montserrat color-black font-18 font-weigh-700 p-1'>
                        Teenegers sunset har shot wins top RSCA prize
                     </h3>
                     <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                          <div className='dash-subcatagory'></div>
                             <div className='side-bar'>
                                 <Link className='link font-16 font-montserrat flex align-center color-dark'>
                                     Science
                                 </Link>
                              </div>
                          </div>
                </div>
             </div>
            <div className='flex flex-col bg-white card-gallery'>
               <div className='gallery-bottom-img-container  position-relative'>
                    <img src = {mars} alt = ''/>
                </div> 

                <div className='flex flex-col  align-center'>
                     <h3 className='font-montserrat color-black font-18 font-weigh-700 p-1'>
                        Teenegers sunset har shot wins top RSCA prize
                     </h3>
                     <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                          <div className='dash-subcatagory'></div>
                             <div className='side-bar'>
                                 <Link className='link font-16 font-montserrat flex align-center color-dark'>
                                     Science
                                 </Link>
                              </div>
                          </div>
                </div>
             </div>
            <div className='flex flex-col bg-white card-gallery'>
               <div className='gallery-bottom-img-container  position-relative'>
                    <img src = {mars} alt = ''/>
                </div> 

                <div className='flex flex-col  align-center'>
                     <h3 className='font-montserrat color-black font-18 font-weigh-700 p-1'>
                        Teenegers sunset har shot wins top RSCA prize
                     </h3>
                     <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                          <div className='dash-subcatagory'></div>
                             <div className='side-bar'>
                                 <Link className='link font-16 font-montserrat flex align-center color-dark'>
                                     Science
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

export default RelatedPost