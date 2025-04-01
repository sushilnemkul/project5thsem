
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/> <Home/></>
        },
        {
          path: "/home",
          element:<><Navbar/> <Home/></>
        },
    {
      path: "/login",
      element: <><Navbar/> <Login/></>
    },
    {
      path: "/register",
      element: <><Navbar/><Register/></>
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
