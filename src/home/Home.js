import React from 'react';
import Top from '../components/HomePage/Top/Top';
import Adds from '../components/HomePage/ads/Adds';
import Nav from '../components/HomePage/Nav/Nav';
import Hero from '../components/HomePage/hero/Hero';
import Featured from '../components/HomePage/Feautured/Featured';
import NewsByCatagory from '../components/HomePage/news-by-catagory/NewsByCatagory';
// import FuturePlanet from './components/Future-planet/FuturePlanet';
import Photogallery from '../components/HomePage/PhotoGallery/Photogallery';
import Videos from '../components/HomePage/Videos/Videos';
import Footer from '../components/HomePage/Footer/Footer'
import TopPage from '../TopPage';


function Home() {
  return ( 
    <div className='h-100vh'>
          <TopPage />
          <Hero />
          <Featured />
          <NewsByCatagory />
          <Videos />
          <Photogallery />
          <Footer />
    </div>
  );
}

export default Home;
