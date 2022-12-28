import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { MdSchedule } from 'react-icons/md'
import { IoEyeOutline } from 'react-icons/io5'
import img1 from '../assets/images/news-800x500-1.jpg'

const SinglePost = () => {
  return (
    <div className='container bg-white'>
        <div className='gap-4 flex mt-3'>
             <div className='w-100 flex flex-col gap-2'>
                  <div className='flex flex-col gap-2'>
                      <div className='pt-3 w-90'>
                          <h1 className='font-montserrat font-36 font-weight-700 color-black'>
                              Taiwan extends mandatory military service to one year
                          </h1>
                      </div>
                      <div className='flex gap-4'>
                        <div className='flex gap-1'>
                           <MdSchedule className='font-montserrat font-14 color-dark' />
                           <p className='font-14 color-dark'>10 hours ago</p>
                        </div>
                        <div className='flex gap-1'>
                           <IoEyeOutline className='font-montserrat font-14 color-dark' />
                           <p className='font-14 color-dark'>1000</p>
                        </div>
                      </div>
                  </div>

                  <div className='detail-img mt-3 mb-2'>
                      <img src = { img1 } alt = '' />
                  </div>
                  <div className='author'>
                      <h4 className='font-montserrat font-weight-700 color-dark font-18'>By Mike Van</h4> 
                  </div>

                  <div className='title w-80'>
                      <h4 className='font-montserrat font-weight-700 color-black font-16'>Taiwan will extend mandatory military service from four months to one year, President Tsai Ing-wen has said.</h4> 
                  </div>

                  <div className='title w-80'>
                      <p className='font-montserrat color-dark font-weight font-16 line-height-1-5'>
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
                  </div>
             </div>
                <div className='w-col-2 h-100 mr-3 mt-3'>
                    <Sidebar />
                </div>
          </div>
    </div>
  )
}

export default SinglePost