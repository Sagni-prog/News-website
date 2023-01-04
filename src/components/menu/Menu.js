import {React,useContext} from 'react'
import './menu.css'
import NavContext from '../../contexts/NavContext'
import { Link } from 'react-router-dom'

const Menu = () => {

  const {state,dispatch} = useContext(NavContext)
  return (
    <div  className={`${state.show ? 'show': 'hide'} bg-yellow`}>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
         {/* <ul className='h-100 flex align-center flex-col justify-between gap-2'>
        
           <li className='home'>
             <Link className=' h-100 color-white link font-18 font-montserrat pb-8' to = '/'>Home</Link>
             </li>

           
            <li className='nav-link'> 
                <Link className='link font-16 font-montserrat color-white pb-8' to = '/post'>Single</Link>
           </li>
    
            <li className='nav-link'> 
                <Link className='link font-16 font-montserrat color-white pb-8' to = ''>Politics</Link>
           </li>

            <li className='nav-link'> 
                <Link className='link font-16 font-montserrat color-white pb-8' to = ''>Business</Link>
           </li>

            <li className='nav-link'> 
                <Link className='link font-16 font-montserrat color-white pb-8' to = ''>Technology</Link>
           </li>

            <li className='nav-link'> 
                <Link className='link font-16 font-montserrat color-white pb-8' to = ''>Sport</Link>
           </li>

             <li className='nav-link'>
                  <Link  Link className='link font-16 font-montserrat color-white pb-8' to = ''>Catagory</Link>
             </li>

             <li className='nav-link'>
                  <Link  Link className='link font-16 font-montserrat color-white pb-8' to = ''>Gallery</Link>
             </li>

             <li className='nav-link'>
                 <Link className='link font-16 font-montserrat color-white pb-8' to = ''>Contact</Link>
             </li>
         </ul> */}
    </div>
  )
}

export default Menu
