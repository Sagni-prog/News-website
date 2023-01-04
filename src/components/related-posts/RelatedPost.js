import {React,useEffect,useState} from 'react'
import finalcup from '../../assets/images/final_cup.jpg'
import brazil from '../../assets/images/brazil.jpg'
import africa from '../../assets/images/africa.jpg'
import mars from '../../assets/images/mars.jpg'
import nature from '../../assets/images/nature.jpg'
import festival from '../../assets/images/festival.jpg'
import { Link } from 'react-router-dom'
import { IoIosCamera } from 'react-icons/io'
import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import RelatedData from '../../constants/RelatedData'

const RelatedPost = () => {

  

   const [current,setCurrent] = useState(0);
   const [current2,setCurrent2] = useState(1);
   const [current3,setCurrent3] = useState(2);
   const [left,setLeft] = useState(false)
   const [right,setRight] = useState(false)
   const end = RelatedData.length - 1;

   const slideLeft = () => {
      
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
   

  return (
    <div className='bg-light-gray py-4 mb-l'>
       <div className='container'>
         <div className='flex align-center gap-1'>
            <div className='dash-gallery'></div>
               <h1 className=' font-18 font-montserrat h-5 flex align-center color-dark font-weight-700'>
                  Related posts
              </h1>
          </div>
      <div className='flex gap-2'>
         {
            RelatedData.map((data,index) => (

         index===current &&
         
            <div key={index} className={`related-card flex flex-col bg-white card-related position-relative ${left ? 'slide' : ''}`}>
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
                 <div className='left flex justfy-center align-center'>
                    <FaAngleLeft onClick={ slideLeft } className='color-yellow font-32' />
                </div>
             </div>
              )
            )
        }

         {
            RelatedData.map((data,index) => (

         index===current2 &&
            <div key={index} className='related-card flex flex-col bg-white card-related slide'>
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
              )
            )
        }
         {
            RelatedData.map((data,index) => (

         index===current3 &&
            <div key={index} className='related-card flex flex-col bg-white card-related position-relative slide'>
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
                                     Science
                                 </Link>
                              </div>
                          </div>
                      </div>
                  <div className='right flex justfy-center align-center'>
                     <FaAngleRight onClick={slideRight} className='color-yellow font-32' />
                  </div>
             </div>
              )
            )
        }
            </div>
       </div>
    </div>
  )
}

export default RelatedPost