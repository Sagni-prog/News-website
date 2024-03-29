
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import im3 from '../../../assets/images/news-700x435-1.jpg'
import { MdSchedule } from 'react-icons/md'
import SideAd from '../ads/SideAd'
import Subscribe from '../subscribe/Subscribe'
import Tags from '../Tags/Tags'
import { MdCalendarViewMonth } from 'react-icons/md'
import { MdPerson } from 'react-icons/md'
import './sidebar.css'

const Sidebar = () => {

   const [recent,setRecent] = useState(true)
   const [popular,setPopular] = useState(false)

   // useEffect(() => {
   //    console.log("recent =>",recent)
   //    console.log("popular =>",popular)
      
   // },[recent])

   const handleRecent = () => {
       setPopular(false)
       setRecent(true)
   }

   const handlePopular = () => {
      setRecent(false)
      setPopular(true)
   }
  return (
    <div className='resp'>
     <div className='left-resp '>
        <div className='ads1'>
      <SideAd  />
      </div>

      <div className='content w-100'>
        <div className='w-100 h-100 mb-lt'>
            <div className='flex align-center gap-1 border mb-1'>
                    <div className='dash'></div>
                    <h5 className=' font-16 font-montserrat h-5 flex align-center color-dark'>
                       Featured and Popula News
                    </h5>
               </div>
            <div className='recent-popular flex align-center justfy-center bg-white'>
                <div onClick={ handleRecent } className={`${recent ? 'recent-box' : ''} boxx flex align-center  cursor-pointer`}>
                   <p className={`${recent ? 'color-white' : 'color-dark'} recent link font-16  font-weigth-700 font-montserrat`} to = ''>Current News</p>
                </div>

             <div onClick={ handlePopular } className={`${popular ? 'popular-box' : ''} boxx flex align-center cursor-pointer`}>
                <p className={`${popular ? 'color-white' : 'color-dark'} popular link font-16 font-weigth-700 font-montserrat`} to = ''>Popular News</p>
            </div>
         </div>
        </div>

   { 
       recent &&
        <div className='recent-news flex flex-col gap-2  mb-l'>

        <div className='flex gap-1 sidebar-card bg-white'>
                  <div className='sidebar-img'>
                      <img src = { im3 } alt = 'im' />
                  </div>

               <div className='flex flex-col justfy-center gap-2 '>   
                   <div className='side-bar'>
                        <Link className='link font-montserrat font-weight-700 color-dark font-14 text-uppercase'>
                              Recent news Lorem ipsum dolor sit amet elit...
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

              <div className='flex gap-1 sidebar-card bg-white'>
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


              <div className='flex gap-1 sidebar-card bg-white'>
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

              <div className='flex gap-1 sidebar-card bg-white'>
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
   }        
   { 
      popular &&
        <div className='popular-news flex flex-col gap-2  mb-l'>

        <div className='flex gap-1 sidebar-card bg-white'>
                  <div className='sidebar-img'>
                      <img src = { im3 } alt = 'im' />
                  </div>

               <div className='flex flex-col justfy-center gap-2 '>   
                   <div className='side-bar'>
                        <Link className='link font-montserrat font-weight-700 color-dark font-14 text-uppercase'>
                              Popular news lorem ipsum dolor sit amet elit...
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

              <div className='flex gap-1 sidebar-card bg-white'>
                  <div className='sidebar-img'>
                      <img className='' src = { im3 } alt = 'im' />
                  </div>

               <div className='flex flex-col justfy-center gap-2 '>   
                   <div className='side-bar'>
                        <Link className='link font-montserrat font-weight-700 color-dark font-14 text-uppercase'>
                              Popular news lorem ipsum dolor sit amet elit...
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


              <div className='flex gap-1 sidebar-card bg-white'>
                  <div className='sidebar-img'>
                      <img src = { im3 } alt = 'im' />
                  </div>

               <div className='flex flex-col justfy-center gap-2 '>   
                  <div className='side-bar'>
                       <Link className='link font-montserrat font-weight-700 color-dark font-14 text-uppercase'>
                            Popular news orem ipsum dolor sit amet elit...
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

              <div className='flex gap-1 sidebar-card bg-white'>
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
   }
          </div>
        </div>

<div className='right-resp'>
          <Subscribe className = "sub" />
          <Tags />
          </div>
      </div>
  )
}

export default Sidebar