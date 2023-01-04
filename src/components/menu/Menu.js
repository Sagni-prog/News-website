import {React,useContext} from 'react'
import './menu.css'
import NavContext from '../../contexts/NavContext'
import { Link } from 'react-router-dom'

const Menu = () => {

  const {state,dispatch} = useContext(NavContext)
  return (
    <div  className={`${state.show ? 'show': 'hide'} bg-gray`}>
       <div className='flex flex-col align-center justfy-center gap-2'>
           <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
           <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
           <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
           <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
           <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
           <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
           <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
           <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
           <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
           <Link className='link font-24 font-montserrat color-white pb-8' to = '/post'>Single</Link>
       </div>
    </div>
  )
}

export default Menu
