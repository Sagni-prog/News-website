import { React,useState,useContext, useEffect,useReducer } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { IoIosSearch } from 'react-icons/io'
import { MdOutlineMenu } from 'react-icons/md'
import NavContext from '../../contexts/NavContext'




const Nav = () => {

  const {state,dispatch} = useContext(NavContext)

  useEffect(() => {
    console.log(state.show)
})

    const [dropdown,setDropdown] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        dispatch({type: 'toggle',state});
    }

  return (
    <div>
        <div className='bg-gray w-100 h-7 flex mt-4'>
          <div className='container h-100 flex justify-between align-center'>
             <ul className='h-100 flex align-center justify-between gap-2'>
              <li className='logo-disp'>
                <div className=' h-100 flex align-center '>
                   <Link  to = '/' className='link font-32 font-montserrat'>
                     <span className='color-yellow'>
                            Zena
                     </span>
                     <span className='color-dark'>
                            Log
                    </span>
                    </Link>
                </div>
                </li>
                <li className='home'>
                    <Link className=' h-100 color-white link font-18 font-montserrat pb-8' to = '/'>Home</Link>
                </li>

                    <li className='nav-link'> 
                        <Link className='link font-16 font-montserrat color-white pb-8' to = '/post'>Single</Link>
                    </li>
                
                    <li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className='nav-link position-relative' > 
                        <Link className='link font-16 font-montserrat color-white pb-8 h-100' to = ''>News</Link>
                        <IoIosArrowDown className='pt-1 font-18 color-white' />

                        {   dropdown &&
                <ul className='dropdown'>
                    <li className='nav-link'> 
                        <Link className='link font-18 font-montserrat color-white pb-8' to = ''>News</Link>
                    </li>
                    <li className='nav-link'> 
                        <Link className='link font-18 font-montserrat color-white pb-8' to = ''>News</Link>
                    </li>
                    <li className='nav-link'> 
                        <Link className='link font-18 font-montserrat color-white pb-8' to = ''>News</Link>
                    </li>
                    <li className='nav-link'> 
                        <Link className='link font-18 font-montserrat color-white pb-8' to = ''>News</Link>
                    </li>
                </ul>
 }
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
         </ul>

         

         <div className='seaech h-100 flex align-center'>
             <input className='input h-4 w-100 pl-8 pr-4' placeholder='Keyword' />
             <div className='bg-yellow h-4 w-4'></div>
         </div>


         <div className='search-icon flex align-center'>
             <IoIosSearch className='font-24 font-weight-700 color-yellow' />
         </div>

         <div className='menu flex align-center'>
            <MdOutlineMenu onClick={handleClick} className='font-24 font-weight-700 color-yellow cursor-pointer' />
         </div>
     </div>
 </div>
    </div>
    
  )
}

export default Nav