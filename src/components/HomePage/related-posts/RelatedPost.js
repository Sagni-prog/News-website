import {React,useEffect,useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import finalcup from '../../../assets/images/final_cup.jpg'
import brazil from '../../../assets/images/brazil.jpg'
import africa from '../../../assets/images/africa.jpg'
import mars from '../../../assets/images/mars.jpg'
import nature from '../../../assets/images/nature.jpg'
import festival from '../../../assets/images/festival.jpg'
// import  arrow1 from '../../../assets/images/img/arrow1.svg'
// import  arrow2 from '../../../assets/images/img/arrow.svg'
import { Link } from 'react-router-dom'
import { IoIosCamera } from 'react-icons/io'
import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import meter1 from '../../../assets/images/img/meter1.svg'
import RelatedData from '../../../constants/RelatedData'
import './relatedPost.css'

const RelatedPost = () => {

  

   const [current,setCurrent] = useState(0);
   const [current2,setCurrent2] = useState(1);
   const [current3,setCurrent3] = useState(2);
   const [left,setLeft] = useState(false)
   const [right,setRight] = useState(false)
   const [disable,setDisable] = useState(false)
   const end = RelatedData.length - 1;


   const slideLeft = () => {
      
       setRight(false)
       setLeft(true)

          if(current === 0){
              setCurrent(end)
                  if(current -1 > 0){ setCurrent2(current - 1) }else{ setCurrent2(end-1) }

                  if(current - 2 > 0){ setCurrent3(current - 2)  }else{ setCurrent3(end-2) }

                  // if(current2 === 0) { setCurrent2(end) } else{ setCurrent2(curr)}
          } 
          else{
            setCurrent(current - 1)
                  if(current -1 > 0){ setCurrent2(current - 2) }else{ setCurrent2(end)}

                  if(current - 2 > 0 ){ setCurrent3(current - 3) } else { setCurrent3(end) }
            }
     }


   const slideRight = () => {
       setLeft(false)
       setRight(true)
        if(current === end){
            setCurrent(0)
                if(current2 === 0){ setCurrent2(end) } else if(current2 === 1){ setCurrent2(current2 + 1)} else{ setCurrent2(current2 + 1) }
                if(current3 === 0){ setCurrent3(end) } else{ setCurrent3(current3 + 1) }
        }
        else{
           setCurrent(current + 1)
               if(current2 === end) {setCurrent2(0) } else{ setCurrent2(current2 + 1)}
               if(current3 === end) {setCurrent3(0) } else{ setCurrent3(current3 + 1)} 
        }
    }

    const data = [
        {
          'title': "Web development",
          'photo': meter1
        },
        {
          'title': "Web development",
          'photo': meter1
        },
        {
          'title': "Web development",
          'photo': meter1
        },
        {
          'title': "Web development",
          'photo': meter1
        },
        {
          'title': "Web development",
          'photo': meter1
        },
];


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

   

  return (
    <div className='bg-light-gray resp-white py-4 mb-l'>
       <div className='container'>
         <div className='flex align-center gap-1'>
            <div className='dash-gallery'></div>
               <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700'>
                  Related posts
              </h1>
          </div>

      {/* <div className='flex gap-2  position-relative'> */}

      <Carousel responsive={responsive} infinite={true} className="flex gap-2">
     
          {
                RelatedData.map((data,index) => (
                    <div key={index} className={`related-card flex flex-col bg-white card-related position-relative mr-lt`}>
                          <div className='gallery-bottom-img-container  position-relative'>
                                <img src = {data.path} alt = ''/>
                            </div> 
            
                            <div className='flex flex-col  align-center'>
                                <h3 className='font-montserrat color-black font-18 font-weigh-700 p-1'>
                                    {data.title}
                                </h3>
                                <div className='flex justify-start gap-1 mt-1 w-100 pl-1'>
                                    <div className='dash-subcatagory'></div>
                                        <div className='side-bar'>
                                            <Link className='link font-16 font-montserrat flex align-center color-dark'>
                                                {data.subCatagory}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    ))
         }
   
             </Carousel>
       </div>

       {/* for responsive */}
       <div className='related-resp mb-3 container'>
                <div className=' gallery-top-img-container'>
                  <img src = {finalcup} alt = ''/>
                    <div className='dark-overlay'></div>
                    
                       <div className='gallery-overlay flex align-end'>
                           <div className='flex flex-col  p-2'>
                              <h4 className='font-montserrat color-white font-18'>
                                  Argentina win 2022 World Cup final-in pictur Argentina win 2022 world cup final-in pictureses
                              </h4>

                              <div className='flex justify-start gap-1 mt-1 w-100'>
                                 <div className='dash-subcatagory'></div>
                                     <div className='side-bar'>
                                          <Link className='link font-16 font-montserrat flex align-center color-white'>
                                              News
                                         </Link>
                                    </div>
                               </div>
                           </div>
                       </div>
                    
                 </div>
            </div> 


            <div className='recent-resp container mt-2 flex flex-col gap-2 bg-white'>
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

        <div className='flex flex-col bg-white py-1 border-bottom'>
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
        <div className='flex flex-col bg-white py-1 border-bottom'>
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

        <div className='flex flex-col bg-white py-1 border-bottom'>
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
       {/* for responsive */}
    </div>
  )
}

export default RelatedPost