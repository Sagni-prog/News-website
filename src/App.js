import { React,useReducer } from 'react'
import Top from './components/Top/Top';
import './App.css';
import Adds from './components/ads/Adds';
import Nav from './components/Nav/Nav';
import Home from './components/home/Home';
import SinglePost from './components/SinglePost/SinglePost';
import SinglePage from './SinglePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavReducer from './reducers/NavReducer';
import NavContext from './contexts/NavContext';
import Menu from './components/menu/Menu';
import Dashboard from './components/Dashboard/Dashboard';
import { Login } from './components/login/Login';


function App() {

  const [state,dispatch] = useReducer(NavReducer,{show: false})
  return ( 
    <div className='h-100vh'>
           
       <NavContext.Provider 
   value={{state,dispatch}}
 >
      <BrowserRouter>
          {/* <Top />
          <Adds />
          <Nav />
          <Menu /> */}
          <Routes>
             <Route element = {  <Home/> } path = '/' />
          </Routes>
        
          <Routes>
             <Route element = {  <SinglePage /> } path = 'post' />
         </Routes>
         <Routes>
              <Route element = {<Dashboard />} path = 'admin/dashboard' />
         </Routes>
         <Routes>
              <Route element = {<Login />} path = 'admin/login' />
         </Routes>
      </BrowserRouter>
          </NavContext.Provider> 
    </div>
  );
}

export default App;
