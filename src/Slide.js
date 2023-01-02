
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { IoIosCamera } from 'react-icons/io'
import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
// import RelatedData from '../../constants/RelatedData'
import RelatedData from "./constants/RelatedData";




const Slide = () => {

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

      const [current,setCurrent] = useState(0);
      const [current2,setCurrent2] = useState(1);
      const [current3,setCurrent3] = useState(2);
      const [left,setLeft] = useState(false)
      const end = RelatedData.length - 1;

  return (
    <div>
         <Carousel responsive={responsive}>
         {
            RelatedData.map((data,index) => (

        
         
            <div key={index} className={`flex flex-col bg-white card-related position-relative `}>
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
                {/* <div className='left flex justfy-center align-center'>
                    <FaAngleLeft className='color-yellow font-32' />
                </div> */}
             </div>
         
       
             
              )
            )
        }

       
       
        </Carousel>;
    </div>
  )
}

export default Slide
