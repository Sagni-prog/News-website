import Top from './Top/Top';
import './App.css';
import Adds from './ads/Adds';
import Nav from './Nav/Nav';
import Hero from './hero/Hero';
import Featured from './Feautured/Featured';
import NewsByCatagory from './news-by-catagory/NewsByCatagory';
import FuturePlanet from './Future-planet/FuturePlanet';
import Photogallery from './PhotoGallery/Photogallery';
import Videos from './Videos/Videos';
import Footer from './Footer/Footer'
import SinglePost from './SinglePost/SinglePost';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return ( 
    <div className='h-100vh'>

      <BrowserRouter>
          <Top />
          <Adds />
          <Nav />
          {/* <SinglePost /> */}
          <Hero />
          <Featured />
          <NewsByCatagory />
          <Videos />
          <Photogallery />
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
