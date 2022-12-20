import React from 'react'
import im1 from '../assets/images/news-800x500-1.jpg'
import im3 from '../assets/images/news-700x435-1.jpg'
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'

const Featured = () => {

  return (
    <div className='mb-md bg-white pb-3'>
       <div className='mb-lt'>

       <div className = 'container flex align-center justify-between  mb-1'>
                <div className='flex align-center gap-1'>
                    <div className='dash-catagory'></div>
                    <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700'>
                        Featured News
                    </h1>
                    </div>

                    <div className='flex align-center gap-1'>
                      <div className='p-1 border-featured'>
                        <IoIosArrowBack />
                      </div>
                      <div className='p-1 border-featured'>
                        <IoIosArrowForward />
                      </div>
                    </div>
                    
               </div>
     

        <div className='container'>
             <div className='grid grid-col-4 gap-3'>

                 <div className='bg-yellow h-300'>  
                    <div className='h-100 custum position-relative'>
                      <img className='h-100 w-100 img' src = {im3} alt = "" />
                      <div className='overlay-gradient'></div>

                     <div className  = "overlay h-100 w-100 flex flex-col justify-end p-30" >
                         <div className='flex align-center gap-2 mb-1'>
                              <Link className='link p-8 bg-yellow font-montserrat font-14 color-dark-2' href='#' >
                                   Business
                              </Link>
                              <Link className='link color-white font-montserrat font-12' href='' >
                                   Dec 5,2022
                              </Link>
                         </div>
                              <h1 className='font-montserrat font-16 text-uppercase'>
                                   Lorem ipsum dolor sit amet elit...
                              </h1>
                         </div>
                    </div>
                 </div>

                 <div className='bg-yellow h-300'>  
                    <div className='h-100 custum position-relative'>
                      <img className='h-100 w-100 img' src = {im3} alt = "" />
                      <div className='overlay-gradient'></div>

                         <div className  = "overlay h-100 w-100 flex flex-col justify-end  p-30" >
                         <div className='flex align-center gap-2 mb-1'>
                              <Link className='link p-8 bg-yellow font-montserrat font-14 color-dark-2' href='#' >
                                   Business
                              </Link>
                              <Link className='link color-white font-montserrat font-12' href='' >
                                   Dec 5,2022
                              </Link>
                         </div>
                              <h1 className='font-montserrat font-16 text-uppercase'>
                                   Lorem ipsum dolor sit amet elit...
                              </h1>
                         </div>
                    </div>
                 </div>

                 <div className='bg-yellow h-300'>  
                    <div className='h-100 custum position-relative'>
                      <img className='h-100 w-100 img' src = {im3} alt = "" />
                      <div className='overlay-gradient'></div>

                         <div className  = "overlay h-100 w-100 flex flex-col justify-end p-30" >
                         <div className='flex align-center gap-2 mb-1'>
                              <Link className='link p-8 bg-yellow font-montserrat font-14 color-dark-2' href='#' >
                                   Business
                              </Link>
                              <Link className='link color-white font-montserrat font-12' href='' >
                                   Dec 5,2022
                              </Link>
                         </div>
                              <h1 className='font-montserrat font-16 text-uppercase'>
                                   Lorem ipsum dolor sit amet elit...
                              </h1>
                         </div>
                    </div>
                 </div>

                 <div className='bg-yellow h-300'>  
                    <div className='h-100 custum position-relative'>
                      <img className='h-100 w-100 img' src = {im3} alt = "" />
                      <div className='overlay-gradient'></div>

                         <div className  = "overlay h-100 w-100 flex flex-col justify-end p-30" >
                         <div className='flex align-center gap-2 mb-1'>
                              <Link className='link p-8 bg-yellow font-montserrat font-14 color-dark-2' href='#' >
                                   Business
                              </Link>
                              <Link className='link color-white font-montserrat font-12' href='' >
                                   Dec 5,2022
                              </Link>
                         </div>
                              <h1 className='font-montserrat font-16 text-uppercase'>
                                   Lorem ipsum dolor sit amet elit...
                              </h1>
                         </div>
                    </div>
                 </div>
                 
             </div>
        </div>
    </div>
  )
}

export default Featured