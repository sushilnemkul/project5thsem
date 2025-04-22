
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Search from './components/Search'
import Shop from './components/Shop'







function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/> <Home/><Footer/></>
        },
        {
          path: "/",
          element:<><Navbar/> <Home/></>
        },
    {
      path: "/login",
      element: <><Navbar/> <Login/></>
    },
    {
      path: "/shop",
      element: <><Navbar/><Shop/></>
    },
    {
      path: "/register",
      element: <><Navbar/><Register/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/><Footer/></>
    },
    
    {
      path: "/search",
      element: <><Navbar/><Search/></>
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
