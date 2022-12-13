import Top from './Top/Top';
import './App.css';
import Adds from './ads/Adds';
import Nav from './Nav/Nav';
import Hero from './hero/Hero';
import Margin from './Margin';
import Featured from './Feautured/Featured';
import NewsByCatagory from './news-by-catagory/NewsByCatagory';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return ( 
    <div className='h-100vh'>
      <BrowserRouter>
          <Top />
          <Adds />
          <Nav />
          <Hero />
          <Featured />
          <NewsByCatagory />
          <Margin />
      </BrowserRouter>
    </div>
  );
}

export default App;
