/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import im1 from '../../assets/images/news-800x500-1.jpg'
import im3 from '../../assets/images/news-700x435-1.jpg'
import Sidebar from '../Sidebar/Sidebar'
import user from '../../assets/images/user.jpg'
import { IoIosEye } from 'react-icons/io'
import { MdComment } from 'react-icons/md'
import { MdSchedule } from 'react-icons/md'
import { MdCalendarViewMonth } from 'react-icons/md'
import { MdPerson } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NewsByCatagory = () => {
  return (
    
    <div className='container mb-l gap-4 flex'>

     <div className='w-100 flex flex-col gap-2 '>
        <div className='mb-md'>
            <div className='flex flex-col gap-2'>

                <div className='bg-white'>
                    <div className = 'flex align-center justify-between mb-1 '>
                        <div className='flex align-center gap-1'>
                            <div className='dash-catagory'></div>
                            <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700'>
                                BUSINESS
                            </h1>
                            </div>
                          
                            <div className='px-1'>
                                <div className='flex align-center read-more'>
                                  <a className='link font-montserrat color-dark font-14' href=''>View All</a>
                              </div>
                          </div>
                       </div>
                    </div>
            </div>

            <div className='flex gap-1 bg-white '>
                <div className='w-half'>
                    <img className='img-fluid mb-1' src= {im3} alt = 'hello'/>
                   
                    <div className='p-1'>
                        <div className='flex align-center gap-2 mb-2 '>


                      <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                          <div className='dash-subcatagory'></div>
                             <div className='read-more'>
                                 <Link className='link font-18 font-montserrat flex align-center color-yellow2'>
                                    News
                                 </Link>
                              </div>
                          </div>
                            
                            </div>
                            <div className='mb-2'>
                            <h4 className='font-montserrat color-dark font-18 text-uppercase font-weight-700'>
                                Lorem ipsum dolor sit amet elit...
                                </h4>
                            </div>

                           
                         <div className='mb-2'> 
                            <p className='font-montserrat color-dark font-16 line-height-1-5 text inline-block pr-4'>
                                Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo
                                Dolor lorem eos dolor duo et eirmod sea. Dolor sit...
                                </p>
                           </div>   
                                <div className='flex align-center gap-2 mb-1 '>
                            <div className='flex align-center gap-1'>
                                <MdPerson className='font-16 color-light-gray' />    
                            <a className='link color-light-gray font-montserrat font-16' href='' >
                                    Mike Van
                                </a>
                                </div>
                            <div className='flex align-center gap-1'>
                                <MdCalendarViewMonth className='font-16 color-light-gray' />
                                <a className='link color-light-gray font-montserrat font-16' href='' >
                                    Dec 5,2022
                                </a>
                                </div>
                            </div>
                     </div>
                </div>

                <div className='w-half h-100'>
                    <div className='flex flex-col gap-3'>

                        <div className='flex gap-1 card '>
                        
                            <div className='img-container'>
                                <img className='img-profile' src = { im3 } alt = 'im' />
                            </div>

                            <div className='flex flex-col justfy-center gap-1'>  

                          
                      <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                          <div className='dash-subcatagory'></div>
                             <div className='read-more'>
                                 <Link className='link font-16 font-montserrat flex align-center color-yellow2'>
                                    News
                                 </Link>
                              </div>
                          </div>

                                    <h1 className='font-montserrat color-dark font-14 text-uppercase'>
                                        Lorem ipsum dolor sit amet elit...
                                    </h1>
                            

                    <div className='flex align-center gap-2 mb-1 '>
                            <div className='flex align-center gap-1'>
                                <MdPerson className='color-light-gray font-14' />    
                            <a className='link color-light-gray font-montserrat font-14' href='' >
                                    Mike Van
                                </a>
                                </div>
                            <div className='flex align-center gap-1'>
                                <MdCalendarViewMonth className='color-light-gray font-14' />
                                <a className='link color-light-gray font-montserrat font-12' href='' >
                                    Dec 5,2022
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>

                    <div className='flex gap-1 card'>
                        <div className='img-container'>
                            <img className='img-profile' src = { im3 } alt = 'im' />
                        </div>

                    
                        <div className='flex flex-col justfy-center gap-1'>  
                           
                      <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                          <div className='dash-subcatagory'></div>
                             <div className='read-more'>
                                 <Link className='link font-16 font-montserrat flex align-center color-yellow2'>
                                    News
                                 </Link>
                              </div>
                          </div>

                            <h1 className='font-montserrat color-dark font-14 text-uppercase'>
                                    Lorem ipsum dolor sit amet elit...
                            </h1>

                    <div className='flex align-center gap-2 mb-1 '>
                        <div className='flex align-center gap-1'>
                        <MdPerson className='color-light-gray font-14' />   
                                <a className='link color-light-gray font-montserrat font-14' href='' >
                                    Mike Van
                                </a>
                        </div>
                   <div className='flex align-center gap-1'>
                        <MdCalendarViewMonth className='color-light-gray font-14' />
                            <a className='link color-light-gray font-montserrat font-12' href='' >
                                    Dec 5,2022
                            </a>
                    </div>
                </div>
            </div>
                </div>

                    <div className='flex gap-1 card'>
                        
                        <div className='img-container'>
                            <img className='img-profile' src = { im3 } alt = 'im' />
                        </div>

                <div className='flex flex-col justfy-center gap-1'>  
                           
                      <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                          <div className='dash-subcatagory'></div>
                             <div className='read-more'>
                                 <Link className='link font-16 font-montserrat flex align-center color-yellow2'>
                                    News
                                 </Link>
                              </div>
                          </div>

                            <h1 className='font-montserrat color-dark font-14 text-uppercase'>
                                    Lorem ipsum dolor sit amet elit...
                            </h1>

                    <div className='flex align-center gap-2 mb-1 '>
                        <div className='flex align-center gap-1'>
                        <MdPerson className='color-light-gray font-14' /> 
                                <a className='link color-light-gray font-montserrat font-14' href='' >
                                    Mike Van
                                </a>
                        </div>
                    <div className='flex align-center gap-1'>
                    <MdCalendarViewMonth className='color-light-gray font-14' />
                            <a className='link color-light-gray font-montserrat font-12' href='' >
                                    Dec 5,2022
                            </a>
                    </div>
                </div>
            </div>
                    </div>

                    <div className='flex gap-1 card'>
                        
                        <div className='img-container'>
                            <img className='img-profile' src = { im3 } alt = 'im' />
                        </div>

                    
                <div className='flex flex-col justfy-center gap-1'>  
                  
                       <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                          <div className='dash-subcatagory'></div>
                             <div className='read-more'>
                                 <Link className='link font-16 font-montserrat flex align-center color-yellow2'>
                                    News
                                 </Link>
                              </div>
                          </div>
                    <h1 className='font-montserrat color-dark font-14 text-uppercase'>
                            Lorem ipsum dolor sit amet elit...
                    </h1>

                    <div className='flex align-center gap-2 mb-1 '>
                        <div className='flex align-center gap-1'>
                        <MdPerson className='color-light-gray font-14' />   
                                <a className='link color-light-gray font-montserrat font-14' href='' >
                                    Mike Van
                                </a>
                        </div>
                   <div className='flex align-center gap-1'>
                   <MdCalendarViewMonth className='color-light-gray font-14' />
                            <a className='link color-light-gray font-montserrat font-12' href='' >
                                    Dec 5,2022
                            </a>
                        </div>
                    </div>
                </div>
             </div>
         </div>            
      </div>
   </div>
</div>     

     <div className='mb-l '>
        <div className='flex flex-col gap-2'>

          <div className='bg-white'>
              <div className = 'flex align-center justify-between  mb-1'>
                <div className='flex align-center gap-1'>
                    <div className='dash-catagory'></div>
                    <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700'>
                         BUSINESS
                    </h1>
                    </div>

                    <div className='px-1'>
                        <div className='flex align-center read-more'>
                            <a className='link font-montserrat color-dark font-14' href=''>View All</a>
                       </div>
                    </div>
               </div>
            </div>
        </div>

        <div className='flex gap-1 bg-white'>
          <div className='w-half'>
              <img className='img-fluid mb-1' src= {im3} alt = 'hello'/>
              
               <div className='p-1'>
                   <div className='flex align-center gap-2 mb-2 '>

                <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                    <div className='dash-subcatagory'></div>
                       <div className='read-more'>
                            <Link className='link font-18 font-montserrat flex align-center color-yellow2'>
                                News
                            </Link>
                      </div>
                 </div>
            </div>

                    <div className='mb-1'>
                       <h4 className='font-montserrat color-dark font-18 text-uppercase font-weight-700'>
                           Lorem ipsum dolor sit amet elit...
                        </h4>
                    </div>


                   <div className='mb-2'> 
                            <p className='font-montserrat color-dark font-16 line-height-1-5 text inline-block pr-4'>
                                Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo
                                Dolor lorem eos dolor duo et eirmod sea. Dolor sit...
                                </p>
                           </div>   
                                <div className='flex align-center gap-2 mb-1 '>
                            <div className='flex align-center gap-1'>
                                <MdPerson className='font-16 color-light-gray' />    
                            <a className='link color-light-gray font-montserrat font-16' href='' >
                                    Mike Van
                                </a>
                                </div>
                            <div className='flex align-center gap-1'>
                                <MdCalendarViewMonth className='font-16 color-light-gray' />
                                <a className='link color-light-gray font-montserrat font-16' href='' >
                                    Dec 5,2022
                                </a>
                                </div>
                            </div>
                 
                 
              </div>
          </div>

          <div className='w-half h-100'>
               <div className='flex flex-col gap-3'>

                   <div className='flex gap-1 card '>
                  
                       <div className='img-container'>
                           <img className='img-profile' src = { im3 } alt = 'im' />
                       </div>

                    

                    <div className='flex flex-col justfy-center gap-1'>  

                    <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                      <div className='dash-subcatagory'></div>
                         <div className='read-more'>
                            <Link className='link font-18 font-montserrat flex align-center color-yellow2'>
                                News
                            </Link>
                      </div>
                 </div>

                      <h1 className='font-montserrat color-dark font-14 text-uppercase'>
                          Lorem ipsum dolor sit amet elit...
                     </h1>
                    

            <div className='flex align-center gap-2 mb-1 '>
                    <div className='flex align-center gap-1'>
                    <MdPerson className='color-light-gray font-14' />  
                    <a className='link color-light-gray font-montserrat font-14' href='' >
                              Mike Van
                          </a>
                          </div>
                    <div className='flex align-center gap-1'>
                    <MdCalendarViewMonth className='color-light-gray font-14' />
                          <a className='link color-light-gray font-montserrat font-12' href='' >
                               Dec 5,2022
                          </a>
                          </div>
                     </div>
                    </div>
                   </div>

                   <div className='flex gap-1 card'>
                  
                  <div className='img-container'>
                      <img className='img-profile' src = { im3 } alt = 'im' />
                  </div>

              

                <div className='flex flex-col justfy-center gap-1'>  
                     <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                          <div className='dash-subcatagory'></div>
                             <div className='read-more'>
                                 <Link className='link font-16 font-montserrat flex align-center color-yellow2'>
                                    News
                                 </Link>
                              </div>
                          </div>

                    <h1 className='font-montserrat color-dark font-14 text-uppercase'>
                            Lorem ipsum dolor sit amet elit...
                    </h1>

             <div className='flex align-center gap-2 mb-1 '>
                  <div className='flex align-center gap-1'>
                  <MdPerson className='color-light-gray font-14' /> 
                        <a className='link color-light-gray font-montserrat font-14' href='' >
                            Mike Van
                        </a>
                </div>
           <div className='flex align-center gap-1'>
           <MdCalendarViewMonth className='color-light-gray font-14' />
                    <a className='link color-light-gray font-montserrat font-12' href='' >
                            Dec 5,2022
                    </a>
            </div>
        </div>
    </div>
      </div>

              <div className='flex gap-1 card'>
                  
                  <div className='img-container'>
                      <img className='img-profile' src = { im3 } alt = 'im' />
                  </div>

         <div className='flex flex-col justfy-center gap-1'>  
            <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                <div className='dash-subcatagory'></div>
                   <div className='read-more'>
                      <Link className='link font-16 font-montserrat flex align-center color-yellow2'>
                           News
                     </Link>
                 </div>
            </div>

                    <h1 className='font-montserrat color-dark font-14 text-uppercase'>
                            Lorem ipsum dolor sit amet elit...
                    </h1>

             <div className='flex align-center gap-2 mb-1 '>
                  <div className='flex align-center gap-1'>
                  <MdPerson className='color-light-gray font-14' />  
                        <a className='link color-light-gray font-montserrat font-14' href='' >
                            Mike Van
                        </a>
                </div>
             <div className='flex align-center gap-1'>
             <MdCalendarViewMonth className='color-light-gray font-14' />
                    <a className='link color-light-gray font-montserrat font-12' href='' >
                            Dec 5,2022
                    </a>
              </div>
          </div>
       </div>
              </div>

              <div className='flex gap-1 card'>
                  
                  <div className='img-container'>
                      <img className='img-profile' src = { im3 } alt = 'im' />
                  </div>

               
         <div className='flex flex-col justfy-center gap-1'>  
             <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                 <div className='dash-subcatagory'></div>
                    <div className='read-more'>
                         <Link className='link font-16 font-montserrat flex align-center color-yellow2'>
                             News
                        </Link>
                    </div>
                </div>
            <h1 className='font-montserrat color-dark font-14 text-uppercase'>
                    Lorem ipsum dolor sit amet elit...
            </h1>

             <div className='flex align-center gap-2 mb-1 '>
                  <div className='flex align-center gap-1'>
                  <MdPerson className='color-light-gray font-14' />   
                        <a className='link color-light-gray font-montserrat font-14' href='' >
                            Mike Van
                        </a>
                </div>
           <div className='flex align-center gap-1'>
           <MdCalendarViewMonth className='color-light-gray font-14' />
                    <a className='link color-light-gray font-montserrat font-12' href='' >
                            Dec 5,2022
                    </a>
               </div>
            </div>
        </div>
    </div>
</div> 
          </div>
    
        </div>
    </div>

  </div>
        
            <div className='w-col-2 h-100 mr-3'>
               <Sidebar />
            </div>
    
    </div>
   
  )
}

export default NewsByCatagory