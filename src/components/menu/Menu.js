import {React,useContext} from 'react'
import './menu.css'
import NavContext from '../../contexts/NavContext'

const Menu = () => {

  const {state,dispatch} = useContext(NavContext)
  return (
    <div  className={`${!state.show ? 'hide': ''} bg-yellow`}>
         <h1>hello</h1>
         <h1>hello</h1>
         <h1>hello</h1>
         <h1>hello</h1>
    </div>
  )
}

export default Menu
