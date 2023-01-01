import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPinterestP } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import img from '../../assets/images/news-110x110-1.jpg'

const Footer = () => {
  return (
    <div className='bg-gray'>
       <div className='container'>
          <div className='flex gap-2 w-100 py-5'>

            <div className='footer-item'>
              <div className='flex mb-sm '>
                   <h2 className='font-montserrat font-24 font-weight-700 color-white'>Explore</h2>
              </div>
              <div className='flex flex-col gap-1 pl-2 mb-l'>
                <div className='read-more'>
                  <Link className='link font-montserrat font-18 color-white' to = '/'>
                      Home
                  </Link>
                </div>
               <div className='read-more'>  
                  <Link className='link font-montserrat font-18 color-white'>
                      Gallery
                  </Link>
               </div>
               <div className='read-more'>  
                  <Link className='link font-montserrat font-18 color-white'>
                      Contact
                  </Link>
               </div>
              </div>

              <div className='follow'>
                <div className='mb-sm'>
                <h3 className='font-montserrat font-18 color-white'>Follow us</h3>
              </div>

              <div className='social-medias flex gap-1'>
                  <div className='bg-light-dark box flex align-center justfy-center'>
                      <FaFacebookF className='font-24 color-light-gray' />
                  </div>
                  <div className='bg-light-dark box flex align-center justfy-center'>
                     <FaInstagram className='font-24 color-light-gray' />
                  </div>
                  <div className='bg-light-dark box flex align-center justfy-center'>
                      <MdEmail className='font-24 color-light-gray' />
                  </div>
                  <div className='bg-light-dark box flex align-center justfy-center'>
                      <FaPinterestP  className='font-24 color-light-gray'/>
                  </div>
                  <div className='bg-light-dark box flex align-center justfy-center'>
                      <FaTwitter className='font-24 color-light-gray'/>
                  </div>
                </div>

              </div>
            </div>
              
            <div className='footer-item'>
              <div className='flex mb-sm '>
                   <h2 className='font-montserrat font-24 font-weight-700 color-white'>Popular News</h2>
              </div>

              <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-1 '>
                  <div className  = "h-100 w-100 flex flex-col justify-end " >
                     <div className='flex align-center gap-2 mb-1'>
                        <Link className='link  bg-yellow font-montserrat font-14 color-dark-2' href='#' >
                              Business
                        </Link>
                        <Link className='link color-white font-montserrat font-12' href='' >
                              Dec 5,2022
                        </Link>
                    </div>
                <div className='text-underline-white'>
                  <Link className='link color-light-gray font-montserrat font-16'>
                        Lorem ipsum dolor sit amet elit sit amet elit...
                  </Link>
                </div>   
             </div>
          </div>

          <div className='flex flex-col gap-1 '>
                  <div className  = "h-100 w-100 flex flex-col justify-end " >
                     <div className='flex align-center gap-2 mb-1'>
                        <Link className='link  bg-yellow font-montserrat font-14 color-dark-2' href='#' >
                              Business
                        </Link>
                        <Link className='link color-white font-montserrat font-12' href='' >
                              Dec 5,2022
                        </Link>
                    </div>
                <div className='text-underline-white'>
                  <Link className='link color-light-gray font-montserrat font-16'>
                        Lorem ipsum dolor sit amet elit sit amet elit...
                  </Link>
                </div>   
             </div>
          </div>

          <div className='flex flex-col gap-1 '>
                  <div className  = "h-100 w-100 flex flex-col justify-end " >
                     <div className='flex align-center gap-2 mb-1'>
                        <Link className='link  bg-yellow font-montserrat font-14 color-dark-2' href='#' >
                              Business
                        </Link>
                        <Link className='link color-white font-montserrat font-12' href='' >
                              Dec 5,2022
                        </Link>
                    </div>
                <div className='text-underline-white'>
                  <Link className='link color-light-gray font-montserrat font-16'>
                        Lorem ipsum dolor sit amet elit sit amet elit...
                  </Link>
                </div>   
             </div>
          </div>

          <div className='flex flex-col gap-1 '>
              <div className  = "h-100 w-100 flex flex-col justify-end " >
                   <div className='flex align-center gap-2 mb-1'>
                        <Link className='link  bg-yellow font-montserrat font-14 color-dark-2' href='#' >
                              Business
                        </Link>
                        <Link className='link color-white font-montserrat font-12' href='' >
                              Dec 5,2022
                        </Link>
                    </div>
                <div className='text-underline-white'>
                  <Link className='link color-light-gray font-montserrat font-16'>
                        Lorem ipsum dolor sit amet elit sit amet elit...
                  </Link>
                </div>   
             </div>
          </div>

        </div>
             <div>
               
             </div>
            </div>

            <div className='footer-item3'>
              <div className='flex mb-sm '>
                   <h2 className='font-montserrat font-24 font-weight-700 color-white'>Catagorieis</h2>
              </div>

              <div>
             <div className='flex justfy-start flex-wrap gap-1'>
                <div className='flex align-center bg-light-dark border-dark mb-1'>
                    <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
                </div>
                <div className='flex align-center bg-light-dark border-dark mb-1'>
                    <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Travel</Link>
                </div>
                <div className='flex align-center bg-light-dark border-dark mb-1'>
                    <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Entertainment</Link>
                </div>
                <div className='flex align-center bg-light-dark border-dark mb-1'>
                    <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
                </div>
                <div className='flex align-center bg-light-dark border-dark mb-1'>
                    <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
                </div>
                <div className='flex align-center bg-light-dark border-dark mb-1'>
                    <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
                </div>
                <div className='flex align-center bg-light-dark border-dark mb-1'>
                    <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
                </div>
                <div className='flex align-center bg-light-dark border-dark mb-1'>
                    <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
                </div>
                <div className='flex align-center bg-light-dark border-dark mb-1'>
                    <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
                </div>
                <div className='flex align-center bg-light-dark border-dark mb-1'>
                    <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
                </div>
                <div className='flex align-center bg-light-dark border-dark mb-1'>
                    <Link className='link font-14 color-white font-montserrat p-1' href = '#'>Business</Link>
                </div>  
              </div>
          </div>
       </div>
          <div className='footer-item'>
              <div className='flex mb-sm'>
                   <h2 className='font-montserrat font-24 font-weight-700 color-white'>Photos</h2>
              </div>

              <div className='grid grid-col-3 gap-1'>
                  <div className='footer-gallery'>
                      <img src= { img } alt = '' />
                  </div>
                  <div className='footer-gallery'>
                      <img src= { img } alt = '' />
                  </div>
                  <div className='footer-gallery'>
                      <img src= { img } alt = '' />
                  </div>
                  <div className='footer-gallery'>
                      <img src= { img } alt = '' />
                  </div>
                  <div className='footer-gallery'>
                      <img src= { img } alt = '' />
                  </div>
                  <div className='footer-gallery'>
                      <img src= { img } alt = '' />
                  </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer