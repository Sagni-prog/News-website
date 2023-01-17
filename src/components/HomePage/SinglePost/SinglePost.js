import {React,useEffect,useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { MdSchedule } from 'react-icons/md'
import { IoEyeOutline } from 'react-icons/io5'
import { FaThumbsUp } from 'react-icons/fa'
// import { FaRegThumbsUp } from 'react-icons/fa'
import { MdComment } from 'react-icons/md'
import img1 from '../../../assets/images/news-800x500-1.jpg'
import NewsTag from '../news-tag/NewsTag'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { IoIosCamera } from 'react-icons/io'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import RelatedPost from '../related-posts/RelatedPost'
import './singlepost.css'

const SinglePost = () => {
    
    const [shorten,setShorten] = useState(true);
    const [menu,setMenu] = useState(false);
    const [current,setCurrent] = useState()


    const handleClick = (index) => {
        setCurrent(index)
        setShorten(!shorten)
    }

    const handleMouseEnter = (index) => {
        setCurrent(index)
        setMenu(true)
    }
    const handleMouseLeave = (index) => {
        setCurrent(index)
        setMenu(false)
    }

    useEffect(() => {
   if(!shorten){
    console.log("false")
   }else{
    console.log("true")
   }
    },[])
  return (
   <div className = 'bg-white mb-l single-index'> 
    <div className='container bg-white '>
        <div className='single-post gap-4 flex mt-3'>
             <div className='w-100 flex flex-col gap-2 mb-l'>
                  <div className='flex flex-col gap-2'>
                      <div className='pt-3 w-90'>
                          <h1 className='font-montserrat font-36 font-weight-700 color-black'>
                              Taiwan extends mandatory military service to one year
                          </h1>
                      </div>
                      <div className='flex gap-3'>
                        <div className='flex align-center gap-lt'>
                           <MdSchedule className='font-montserrat font-14 color-dark' />
                           <p className='font-14 color-dark'>10 hours ago</p>
                        </div>

                        <div className='flex align-center gap-lt'>
                           <IoEyeOutline className='font-montserrat font-14 color-dark' />
                           <p className='font-14 color-dark'>10000</p>
                        </div>

                      </div>
                  </div>

                  <div className='detail-img mt-1 mb-2'>
                      <img src = { img1 } alt = '' />
                  </div>


                  <div className=''>
                      <h4 className='font-montserrat font-weight-700 color-dark font-18'>By Mike Van</h4> 
                  </div>

                  <div className='title w-80'>
                      <h4 className='font-montserrat font-weight-700 color-black font-16'>Taiwan will extend mandatory military service from four months to one year, President Tsai Ing-wen has said.</h4> 
                  </div>

                  <div className='title w-80 border-bottom flex flex-col'>
                      <p className='font-montserrat color-dark font-weight font-16 line-height-1-5 '>
                        The decision comes amid growing tensions with China, which claims the self-ruled island as its territory.<br/><br/>
                        Speaking at a press conference on Tuesday, President Tsai announced new plans to bolster Taiwan's defence in the event of an attack from Beijing.<br/><br/>
                       "Peace will not drop from the sky... Taiwan is on the frontline of authoritarian expansion," she said.<br/><br/>
                        President Tsai said conscripts will also undergo more intense training, borrowing some elements from the US and other advanced militaries. She added that the island's current defence system was inadequate to cope with aggression from China, which has one of the world's largest and most advanced militaries.<br/><br/>
                        The Taiwanese army has shrunk since the early 1990s when all men over the age of 18 were required to serve in the military for up to three years. Over the next few decades, service was shortened to one year and 10 months before being further reduced to four months. The new rule takes effect in January 2024 - the same month Taiwan will elect its next president.<br/><br/>
                       "This is an extremely difficult decision, but as president, as the head of military forces, it is my unavoidable duty to defend national interests and our democratic way of life," President Tsai said.<br/><br/>
                        "No-one wants war, Taiwan and Taiwanese people are the same, and the international community is the same," she said, adding "China's military aggression has become increasingly obvious after its war game in August."<br/><br/>
                        Tensions between Taipei and Beijing soared in August following a visit to the island by US Speaker of the House of Representatives Nancy Pelosi.<br/><br/>
                        Beijing responded by holding its biggest-ever military exercises in the seas around Taiwan. Taipei called the drills "highly provocative".<br/><br/>
                        In October, Chinese President Xi Jinping did not rule out the use of force to unify with Taiwan in his opening speech at the Communist party Congress in Beijing. Later that week, US Secretary of State Antony Blinken said China is pursuing unification with Taiwan "on a much faster timeline" than previously expected.<br/><br/>
                        Taiwan has also become a flashpoint in US-China relations given the island's close ties to Washington.<br/><br/>
                        It was believed to have been a major discussion point when Mr Xi met US President Joe Biden at the G20 summit in November. Following the meeting, Mr Biden said he did not believe China would invade Taiwan.<br/><br/>
                        But tensions again ratcheted up on Monday when Taiwan reported one of the biggest Chinese incursions around the island, with 71 Chinese air force planes, including fighter jets and drones, entering Taiwan's so-called air defence identification zone.<br/><br/>
                     </p> 

                     <div className='flex w-100 gap-4 mb-md'>
                        <div className='flex align-center gap-1'>
                            <FaThumbsUp className='font-24 color-light-gray' />
                            <p className='font-montserrat font-16 color-light-gray'>10</p>
                        </div>
                        <div className='flex align-center gap-1'>
                            <MdComment className='font-24 color-light-gray' />
                            <p className='font-montserrat font-16  color-light-gray'>1202</p>
                        </div>
                    </div>
                  </div>
                  

                  <div className='flex flex-col gap-3'>
                     <div className='flex align-top gap-1'>
                           <div className = "user-image">
                               <img src = {img1} alt = '' />
                          </div>

                          <div onMouseEnter={ () => handleMouseEnter(1) } onMouseLeave = { () => handleMouseLeave(1) } className={`${ shorten  ? 'shorten-comment' : 'stretch-comment'} comment w-60`}>
                            <div className='flex justify-between'>
                              <h5 className='author  author font-montserrat font-18 color-dark '>
                                  Mike Van
                              </h5>
                            { 
                              menu && (current === 1) &&
                                 <HiOutlineDotsHorizontal onClick={() => handleClick(1)} className='font-32 cursor-pointer' />
                            } 
                              </div>
                              

                              <p className='font-montserrat font-16 color-light-gray line-height-1-5'>
                              It was believed to have been a major discussion point when Mr Xi met US President Joe Biden at the G20 summit in November. Following the meeting, Mr Biden said he did not believe China would invade Joe Biden at the G20 summit in November. Following the meeting, Mr Biden said he did not believe China would invade
                              </p>
                          </div>
                      </div>
                      <div className='flex align-top gap-1'>
                           <div className = "user-image">
                               <img src = {img1} alt = '' />
                          </div>

                          <div onMouseEnter={ () => handleMouseEnter(2) } onMouseLeave = { () => handleMouseLeave(2) } className={`${ shorten   ? 'shorten-comment' : 'stretch-comment'} comment w-60`}>
                            <div className='flex justify-between'>
                              <h5 className='author  author font-montserrat font-18 color-dark '>
                                  Mike Van
                              </h5>

                              { 
                              menu && (current === 2) &&
                                 <HiOutlineDotsHorizontal onClick={() => handleClick(2)} className='font-32 cursor-pointer' />
                            } 
                              </div>
                       

                              <p className='font-montserrat font-16 color-light-gray line-height-1-5'>
                              It was believed to have been a major discussion point when Mr Xi met US President Joe Biden at the G20 summit in November. Following the meeting, Mr Biden said he did not believe China would invade Joe Biden at the G20 summit in November. Following the meeting, Mr Biden said he did not believe China would invade
                              </p>
                          </div>
                      </div>
                      <div className='flex align-top gap-1'>
                           <div className = "user-image">
                               <img src = {img1} alt = '' />
                          </div>

                          <div onMouseEnter={ () => handleMouseEnter(3) } onMouseLeave = { () => handleMouseLeave(3) } className={`${ shorten  ? 'shorten-comment' : 'stretch-comment'} comment w-60`}>
                            <div className='flex justify-between'>
                              <h5 className='author  author font-montserrat font-18 color-dark '>
                                  Mike Van
                              </h5>
                             
                              { 
                              menu && (current === 3) &&
                                 <HiOutlineDotsHorizontal onClick={() => handleClick(3)} className='font-32 cursor-pointer' />
                            } 
                              </div>
                              

                              <p className='font-montserrat font-16 color-light-gray line-height-1-5'>
                              It was believed to have been a major discussion point when Mr Xi met US President Joe Biden at the G20 summit in November. Following the meeting, Mr Biden said he did not believe China would invade Joe Biden at the G20 summit in November. Following the meeting, Mr Biden said he did not believe China would invade
                              </p>
                          </div>
                      </div>
                         {/* <div className='flex align-top gap-1'>
                           <div className = "user-image">
                               <img src = {img1} alt = '' />
                          </div>
                          <div className='comment w-60'>
                              <h5 className='author font-montserrat font-18 color-dark '>
                                  Mike Van
                              </h5>
                              

                              <p className='font-montserrat font-16 color-light-gray line-height-1-5'>
                              It was believed to have been a major discussion point when Mr Xi met US President Joe Biden at the G20 summit in November. Following the meeting, Mr Biden said he did not believe China would invade
                              </p>
                          </div>
                      </div> */}
                         {/* <div className='flex align-top gap-1'>
                           <div className = "user-image">
                               <img src = {img1} alt = '' />
                          </div>
                          <div className='comment w-60'>
                              <h5 className='author font-montserrat font-18 color-dark '>
                                  Mike Van
                              </h5>
                              

                              <p className='font-montserrat font-16 color-light-gray line-height-1-5'>
                              It was believed to have been a major discussion point when Mr Xi met US President Joe Biden at the G20 summit in November. Following the meeting, Mr Biden said he did not believe China would invade
                              </p>
                          </div>
                      </div> */}
                  </div>

                 
                 <div className='responsive-width h-100 mr-3 mt-3'>
                     <div className='flex align-center gap-1 mb-1'>
                         <div className='dash-catagory'></div>
                            <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700 '>
                                Tags
                            </h1>         
                     </div>
                     <NewsTag />
                </div>
             </div>
                <div className='w-col-2 h-100 mr-3 mt-3'>
                    <Sidebar />
                </div>
          </div>
    </div>
    <RelatedPost />
    <Footer />
    </div>
  )
}

export default SinglePost