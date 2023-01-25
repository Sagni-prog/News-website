import { React,useReducer,useEffect } from 'react'
import './App.css';
import Home from './home/Home';
import SinglePage from './SinglePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavReducer from './reducers/NavReducer';
import NavContext from './contexts/NavContext';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import { Login } from './components/Admin/login/Login';
import { Register } from './components/Admin/register/Register';
import ProtectedRoute from './ProtectedRoute';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts,getError,fetchPosts,postStatus } from './Redux/postSlice';




function App() {

     const dispatchPost = useDispatch()
     const post = useSelector(getAllPosts)
     const error = useSelector(getError)
     const status = useSelector(postStatus)

     useEffect(() => {

           dispatchPost(fetchPosts)
           
           console.log(post)
          //  console.log("error => ",error)
          
     },[] )
                                             
     


  const [state,dispatch] = useReducer(NavReducer,{show: false})
  return ( 
    <div className='h-100vh'>

    
           
       <NavContext.Provider 
   value={{state,dispatch}}
 >
      <BrowserRouter>
        
          <Routes>
             <Route element = {  <Home/> } path = '/' />
          </Routes>
        
          <Routes>
             <Route element = {  <SinglePage /> } path = 'post' />
         </Routes>

          
               <Routes>
                    <Route element = {
                         <ProtectedRoute>
                              <Dashboard />
                         </ProtectedRoute>
                        } path = 'admin/dashboard' />
               </Routes>
         

         <Routes>
              <Route element = {<Login />} path = 'admin/login' />
         </Routes>
         <Routes>
              <Route element = {<Register />} path = 'admin/register' />
         </Routes>
      </BrowserRouter>
          </NavContext.Provider> 
    </div>
  );
}

export default App;
