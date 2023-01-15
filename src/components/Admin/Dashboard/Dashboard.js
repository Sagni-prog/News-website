import React from 'react'
import SideBar from './SideBar'
import { 
              BrowserRouter,
              Routes,
              Route,
              Link
 } from 'react-router-dom'
 import MainContainer from './MainContainer'

const Dashboard = () => {
  return (
    <div className='h-100 w-100 flex '>
        <SideBar /> 
        <MainContainer />        
    </div>
  )
}

export default Dashboard
