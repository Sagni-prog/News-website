
import React from 'react'
import { Link } from 'react-router-dom'
import im3 from '../../assets/images/news-700x435-1.jpg'
import { MdSchedule } from 'react-icons/md'
import SideAd from '../ads/SideAd'
import Subscribe from '../subscribe/Subscribe'
import Tags from '../Tags/Tags'
import { MdCalendarViewMonth } from 'react-icons/md'
import { MdPerson } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className=''>
      <SideAd />
        <div className='w-100 h-100 mb-lt'>
            <div className='flex align-center gap-1 border mb-1'>
                    <div className='dash'></div>
                    <h5 className=' font-16 font-montserrat h-5 flex align-center color-dark'>
                       Featured and Popula News
                    </h5>
               </div>
            <div className='flex align-center justify-center gap-1 bg-white w-100'>
                <div className='flex align-center border-yellow border-r-9 p-1'>
                <Link className='link font-14 color-dark font-montserrat' to = ''>Current News</Link>
                </div>
                <Link className='link font-14 color-dark font-montserrat' to = ''>Most Popular</Link>
            </div>
        </div>

   <div className='flex flex-col gap-2  mb-l'>

        <div className='flex gap-1 sidebar-card bg-light-gray2'>
                  <div className='sidebar-img'>
                      <img src = { im3 } alt = 'im' />
                  </div>

               <div className='flex flex-col justfy-center gap-2 '>   
                   <div className='side-bar'>
                        <Link className='link font-montserrat font-weight-700 color-dark font-14 text-uppercase'>
                              Lorem ipsum dolor sit amet elit...
                         </Link>
                   </div>     

                  <div className='flex align-center gap-2 mb-1 '>
                     <div className='flex align-center gap-1'>
                       <MdPerson className='color-light-gray  font-weight font-14' />   
                          <Link className='link color-light-gray font-weight font-montserrat font-12' to='' >
                                Mike Van
                          </Link>
                      </div>
                   <div className='flex align-center gap-1'>
                        <MdSchedule className='color-light-gray font-weight font-14' />
                            <Link className='link color-light-gray font-weight font-montserrat font-12' to='' >
                                    Dec 5,2022
                            </Link>
                     </div>
                  </div>
            
               </div>
              </div>

              <div className='flex gap-1 sidebar-card bg-light-gray2'>
                  <div className='sidebar-img'>
                      <img className='' src = { im3 } alt = 'im' />
                  </div>

               <div className='flex flex-col justfy-center gap-2 '>   
                   <div className='side-bar'>
                        <Link className='link font-montserrat font-weight-700 color-dark font-14 text-uppercase'>
                              Lorem ipsum dolor sit amet elit...
                         </Link>
                   </div>  

                    <div className='flex align-center gap-2 mb-1 '>
                        <div className='flex align-center gap-1'>
                           <MdPerson className='color-light-gray font-14' />   
                                <Link className='link color-light-gray font-weight font-montserrat font-12' to='' >
                                    Mike Van
                                </Link>
                        </div>
                     <div className='flex align-center gap-1'>
                        <MdSchedule className='color-light-gray font-14' />
                            <Link className='link color-light-gray font-weight font-montserrat font-12' to='' >
                                    Dec 5,2022
                          </Link>
                     </div>
                  </div>
                
               </div>
              </div>


              <div className='flex gap-1 sidebar-card bg-light-gray2'>
                  <div className='sidebar-img'>
                      <img src = { im3 } alt = 'im' />
                  </div>

               <div className='flex flex-col justfy-center gap-2 '>   
                  <div className='side-bar'>
                       <Link className='link font-montserrat font-weight-700 color-dark font-14 text-uppercase'>
                            Lorem ipsum dolor sit amet elit...
                       </Link>
                   </div>  
               
                    <div className='flex align-center gap-2 mb-1 '>
                      <div className='flex align-center gap-1'>
                         <MdPerson className='color-light-gray  font-weight font-14' />   
                            <Link className='link color-light-gray font-weight font-montserrat font-12' to='' >
                                Mike Van
                            </Link>
                        </div>
                   <div className='flex align-center gap-1'>
                        <MdSchedule className='color-light-gray font-weight font-14' />
                            <Link className='link color-light-gray font-weight font-montserrat font-12' to='' >
                                    Dec 5,2022
                            </Link>
                     </div>
                  </div>
               </div>
            </div>

              <div className='flex gap-1 sidebar-card bg-light-gray2'>
                  <div className='sidebar-img'>
                      <img src = { im3 } alt = 'im' />
                  </div>

               <div className='flex flex-col justfy-center gap-2 '>   
                  <div className='side-bar'>
                    <Link className='link font-montserrat font-weight-700 color-dark font-14 text-uppercase'>
                        Lorem ipsum dolor sit amet elit...
                    </Link>
                 </div>  
                
                <div className='flex align-center gap-2 mb-1 '>
                  <div className='flex align-center gap-1'>
                    <MdPerson className='color-light-gray font-weight font-14' />   
                       <Link className='link color-light-gray font-weight font-montserrat font-12' to='' >
                          Mike Van
                      </Link>
                  </div>
                   <div className='flex align-center gap-1'>
                        <MdSchedule className='color-light-gray font-weight font-14' />
                            <Link className='link color-light-gray font-weight font-montserrat font-12' to='' >
                                    Dec 5,2022
                            </Link>
                     </div>
                  </div>

               </div>
              </div>

              </div>
          <Subscribe />
          <Tags />
      </div>
  )
}

export default Sidebar