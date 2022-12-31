  /* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import im1 from '../../assets/images/news-800x500-1.jpg'
import im3 from '../../assets/images/news-700x435-1.jpg'

const Hero = () => {
  return (
    <div className='mb-l position-relative'>
        <div className='grid grid-col-2-1-2'>
              <div className=''>
                <div className='position-relative'>
                   <img className='img h-100 w-100' src = {im1} alt = "hero image" />
                   <div className='overlay-gradient'></div>
                 
                   <div className  = "overlay h-100 w-100 flex flex-col justify-end align-start" >
                     <div className='flex align-center gap-2 mb-2 '>
                          <a className='link p-1 bg-yellow font-montserrat font-16 color-dark-2 font-weight' href='#' >
                               Business
                          </a>
                          <a className='link color-white font-montserrat font-16' href='' >
                               Dec 5,2022
                          </a>
                     </div>
                     <div className='text-underline-white'>
                        <a  className='link color-white font-montserrat font-32 font-weight text-uppercase line-height letter-spacing inline' href=''>
                           Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
                        </a>
                        </div>
                   </div>
                </div>
              </div>
              <div className='h-100'>
                <div className='flex flex-col h-100'>

                    <div className='h-100 custum position-relative'>
                       <img className='h-100 w-100 img' src = {im1} alt = "" />
                         <div className='overlay-gradient'></div>

                 <div className  = "overlay h-100 w-100 flex flex-col justify-end align-start p-30" >
                     <div className='flex align-center gap-2 mb-1'>
                              <a className='link p-8 bg-yellow font-montserrat font-14 color-dark-2' href='#' >
                                   Business
                              </a>
                          <a className='link color-white font-montserrat font-12' href='' >
                               Dec 5,2022
                          </a>
                     </div>
                     <div className=' text-underline-white'>
                        <a className='link font-weight-700 color-white font-weight-700 font-montserrat font-16 text-uppercase'>
                             Lorem ipsum dolor sit amet elit  sit amet elit...
                        </a>
                    </div>
                   </div>
                       
                    </div>

                    <div className='h-100 custum position-relative'>
                      <img className='h-100 w-100 img' src = {im3} alt = "" />
                      <div className='overlay-gradient'></div>

                         <div className  = "overlay h-100 w-100 flex flex-col justify-end align-start p-30" >
                         <div className='flex align-center gap-2 mb-1'>
                              <a className='link p-8 bg-yellow font-montserrat font-14 color-dark-2' href='#' >
                                   Business
                              </a>
                              <a className='link color-white font-montserrat font-12' href='' >
                                   Dec 5,2022
                              </a>
                         </div>
                         <div className='text-underline-white'>
                              <a className='link color-white font-weight-700 font-montserrat font-16 text-uppercase' href=''>
                                   Lorem ipsum dolor sit amet elit sit amet elit...
                              </a>
                         </div> 
                         </div>
                     
                    </div>

                </div>
        </div>
       
        </div>
                      
          <div className='bg-black pt-md pb-2'>
             <div className='container  align-center flex gap-3 index-10'>
               <div>
                  <a className='index-10 btn flex align-center justify-center link p-1 bg-yellow font-montserrat font-16 color-dark-2 px-2' href='#' >
                               Breaking News
                  </a>
               </div>  
                 <div className='text-underline-white'> 
                   <a className='link index-10 color-white font-montserrat font-16 font-weight-600 text-uppercase line-height letter-spacing' href=''>
                      Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales
                  </a>
               </div>   

          </div>
     </div>

    </div>
  )
}

export default Hero