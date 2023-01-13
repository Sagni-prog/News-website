import React from 'react';
import Top from '../../components/Top/Top';
import '../../App.css';
import Adds from '../../components/ads/Adds';
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/hero/Hero';
import Featured from '../../components/Feautured/Featured';
import NewsByCatagory from '../../components/news-by-catagory/NewsByCatagory';
// import FuturePlanet from './components/Future-planet/FuturePlanet';
import Photogallery from '../../components/PhotoGallery/Photogallery';
import Videos from '../../components/Videos/Videos';
import Footer from '../../components/Footer/Footer'
import TopPage from '../../TopPage';

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
