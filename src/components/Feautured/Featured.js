import React from 'react'
import im1 from '../../assets/images/news-800x500-1.jpg'
import im3 from '../../assets/images/news-700x435-1.jpg'
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import festival from '../../assets/images/festival.jpg'

const Featured = () => {

  return (
    <div className='mb-md featured-bg bg-white pb-3'>
       <div className='mb-lt'>

       <div className = 'container flex align-center justify-between  mb-1'>
                <div className='flex align-center gap-1'>
                    <div className='dash-catagory'></div>
                    <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700'>
                        Featured News
                    </h1>
                    </div>
               </div>
         </div>

        <div className='container'>
             <div className='featured-resp grid grid-col-4 gap-3'>

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
                         <div className='text-underline-white'>
                              <Link className='link color-white font-montserrat font-16 font-weight-700 text-uppercase'>
                                   Lorem ipsum dolor sit amet elit...
                              </Link>
                           </div>   
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
                         <div className='text-underline-white'>
                              <Link className='link color-white font-montserrat font-16 font-weight-700 text-uppercase'>
                                   Lorem ipsum dolor sit amet elit...
                              </Link>
                           </div> 
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
                         <div className='text-underline-white'>
                              <Link className='link color-white font-montserrat font-16 font-weight-700 text-uppercase'>
                                   Lorem ipsum dolor sit amet elit...
                              </Link>
                           </div> 
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
                           <div className='text-underline-white'>
                               <Link className='link color-white font-montserrat font-16 font-weight-700 text-uppercase'>
                                   Lorem ipsum dolor sit amet elit...
                               </Link>
                            </div> 
                         </div>
                    </div>
                 </div>
                 
             </div>
        <div className='gap-1 featured-card'>
             <div className='featured-card-item shadow2 flex flex-col bg-white card-gallery'>
               <div className='gallery-bottom-img-container  position-relative'>
                    <img src = {festival} alt = ''/>
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
             <div className='featured-card-item shadow2 flex flex-col bg-white card-gallery'>
               <div className='gallery-bottom-img-container  position-relative'>
                    <img src = {festival} alt = ''/>
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

      <div className='recent-resp flex flex-col gap-2 bg-white mt-1 pt-1'>
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
  )
}

export default Featured