import React from "react";
import background from '../assets/images/future-planet.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa'

const FuturePlanet = () => {
   return(
    <div className="future-background position-relative mb-l">
        <img src = {background} />
        <div className="background-overlay"></div>
        <div className="future-overlay">
          <div className="container">
            <div className="top-buttons flex justify-between mt-sm mb-1">
               <a className="link font-24 font-weight-700 color-white border-future flex align-center cursor-pointer">
                   Future Planet
              </a>

               <a className="link font-montserrat font-18 color-white border-visit flex align-center cursor-pointer">
                   Visit future planet 
                 
                     <FaLongArrowAltRight />
                   
              </a>
              </div>

              <div>
                  <p className="font-18 font-montserrat color-white" >Solution for a sustainable world</p>
              </div>
          </div>
       </div>
    </div>
   )
}

export default FuturePlanet