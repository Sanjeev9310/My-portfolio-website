import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router'
// import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Navbar from './components/Navbar'

function App(){
  const [bgColor,setBgColor]=useState("#0b152d");
  const router=createBrowserRouter(
 [{
   path:"/",
   element:<div><Home bgColor={bgColor} setBgColor={setBgColor}/></div>
 },
 {
   path:"/About",
   element:<About bgColor={bgColor} setBgColor={setBgColor}/>
 },
{
   path:"/Skills",
   element:<Skills bgColor={bgColor} setBgColor={setBgColor}/>
 },
 {
   path:"/Contact",
   element:<Contact bgColor={bgColor} setBgColor={setBgColor}/>
 }
 ]
)
 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
