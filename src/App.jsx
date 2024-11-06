 import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Products from './Pages/Products'
import Traveling from './Pages/Traveling'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ResetPsswort from './Pages/ResetPsswort'
import LayoutOne from './Layouts/LayoutOne'

 function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<LayoutOne/>}>
        <Route index element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/blog' element = {<Blog/>} />
        <Route path='/products' element = {<Products/>} />
        <Route path='/traveling' element = {<Traveling/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/resetpasswort' element = {<ResetPsswort/>} />
        
        
        
        
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={route}/>     
    </>
  )
 }

 export default App
