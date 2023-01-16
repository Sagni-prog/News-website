
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import arrow1 from './assets/images/img/arrow1.svg'
import arrow2 from './assets/images/img/arrow2.svg'
import meter1 from './assets/images/img/meter1.svg'



export const Slide = () => {

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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">

                      
                        <h2>About Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        
                        {
                            data.map((data) => (
                              <div className="item">
                                 <img src={data.photo} alt="Image" />
                              <h5>{data.title}</h5>
                          </div>
                            ))
                          }

                            {/* <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>English</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>  */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={meter1} alt="Image" />
    </section>
  )
}


 {/* {
            RelatedData.map((data,index) => (

         index===current &&
         
            <div key={index} className={`${left ? 'related-post-slide-left' : ''} ${right ? 'related-post-slide-right' : ''}  related-card flex flex-col bg-white card-related position-relative ${left ? 'slide' : ''}`}>
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

         index===current2 &&
            <div key={index} className={`${left ? 'related-post-slide-left' : ''} ${right ? 'related-post-slide-right' : ''}  related-card flex flex-col bg-white card-related slide`}>
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
            <div key={index} className={`${left ? 'related-post-slide-left' : ''} ${right ? 'related-post-slide-right' : ''}  related-card flex flex-col bg-white card-related  slide`}>
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
             </div>
              )
            )
        } */}
           {/* <div className='left flex justfy-center align-center'>
              <FaAngleLeft onClick={ slideLeft } className={`${disable ? 'disable' : ''} color-yellow font-32`} />
            </div>

            <div className='right flex justfy-center align-center'>
                 <FaAngleRight onClick={slideRight} className='color-yellow font-32' />
           </div> */}


     {/* </div> */}
