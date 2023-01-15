import React from 'react'
import TopBar from './TopBar'
import AddPost from './AddPost'
import './mainContainer.css'
import { 
      BrowserRouter,
      Routes,
      Route,
      Link
} from 'react-router-dom'
const MainContainer = () => {
  return (
    <div className='main-container h-100 flex flex-col '>
        <TopBar />
        <div className='cont'>

        <AddPost />
        </div>
    </div>
  )
}

export default MainContainer