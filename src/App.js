import Top from './components/Top/Top';
import './App.css';
import Adds from './components/ads/Adds';
import Nav from './components/Nav/Nav';
import Home from './components/home/Home';
import SinglePost from './components/SinglePost/SinglePost';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return ( 
    <div className='h-100vh'>

      <BrowserRouter>
          <Top />
          <Adds />
          <Nav />
          <Routes>
             <Route element = {  <Home/> } path = '/' />
          </Routes>
        
          <Routes>
             <Route element = {  <SinglePost /> } path = 'post' />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
