import React from "react";
import background from '../assets/images/future-planet.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import player from '../assets/images/player.jpg'
import home from '../assets/images/home.jpg'
import trees from '../assets/images/trees.jpg'
 
const FuturePlanet = () => {
   return(
    <div className="future-background position-relative mb-l">
        <img src = {background} alt = 'img'/>
        <div className="background-overlay"></div>
        <div className="future-overlay">
          <div className="container">
            <div className="top-buttons flex justify-between mt-sm mb-1">
               <Link className="link font-24 font-weight-700 color-white border-future flex align-center cursor-pointer">
                   Future Planet
              </Link>

               <Link className="link font-montserrat font-18 color-white border-visit flex align-center cursor-pointer">
                   Visit future planet 
                 
                     <FaLongArrowAltRight />
                   
              </Link>
              </div>

              <div className="mb-sm">
                  <p className="font-18 font-montserrat color-white" >Solution for a sustainable world</p>
              </div>

              <div className="flex justify-center align-center gap-2 w-100 mb-l">
                  <div className="flex flex-col justify-center card-container">
                        <div className="future-img-container mb-1">
                            <img src = {player} alt = '' />
                        </div>
                     
                        <h3 className="font-montserrat font-18 color-dark flex align-center justfy-center">
                            What would a green world cup look
                        </h3>
                  </div>

                  <div className="flex flex-col justify-center card-container ">
                        <div className="future-img-container mb-1">
                            <img src = {home} alt = '' />
                        </div>

                        <h3 className="font-montserrat font-18 color-dark flex align-center justfy-center">
                           The Alpine villages powered by streams
                        </h3>
                  </div>

                  <div className="flex flex-col justify-center card-container ">
                        <div className="future-img-container">
                            <img src = {trees} alt = '' />

                            <h3 className="font-montserrat font-18 color-dark flex align-center justfy-center mt-1">
                                 In defense of real chrismas tree
                             </h3>
                        </div>
                  </div>
              </div>


          </div>
       </div>
    </div>
   )
}

export default FuturePlanet