import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./components/PrivateRoute.jsx"
import { useState } from 'react'

function App() {
      const [isLoggedin , setIsloggedin] = useState(false)

  return (

    <div className='w-screen h-screen bg-black flex flex-col'>
      <Navbar isLoggedin={isLoggedin} setIsloggedin = {setIsloggedin}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setIsLoggedin={setIsloggedin}/>}/>
        <Route path='/signup' element={<Signup setIsLoggedin={setIsloggedin}/>}/>
        <Route path='*' element={<h2 className='text-white'>404 Not Found</h2>}/>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedin ={isLoggedin}>
            <Dashboard/>
          </PrivateRoute>
        }/> 
      </Routes>
    </div>
  )
}

export default App
