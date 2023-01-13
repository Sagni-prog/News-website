import {React,useContext} from 'react'
import './menu.css'
import NavContext from '../../contexts/NavContext'
import { Link } from 'react-router-dom'

const Menu = () => {

  const {state,dispatch} = useContext(NavContext)
  return (
    <div  className={`${state.show ? 'show border-top': 'hide'} bg-gray  menu-index`}>
       <div className='flex flex-col align-center justfy-center gap-2'>
          <div className='nav-link mt-2'>
              <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
          </div>
          <div className='nav-link'>
              <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
          </div>
          <div className='nav-link'>
              <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
          </div>
          <div className='nav-link'>
              <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
          </div>
          <div className='nav-link'>
              <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
          </div>
          <div className='nav-link'>
              <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
          </div>
          <div className='nav-link'>
              <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
          </div>
          
          
       </div>
    </div>
  )
}

export default Menu
