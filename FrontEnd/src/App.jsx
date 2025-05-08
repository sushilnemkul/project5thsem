
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import Shop from './components/Shop/Shop'
import Carousel from './components/Carousel/carousel'
import AppLayout from './components/AppLayout'
import CartPage from './components/CartPage/CartPage'
import Product from './components/Product/Product'
import Discover from './Discover/Discover'



function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <><AppLayout /></>,
      children: [
        {
        path: "",
      element: <Home />
        },
        {
          path: "cart",
          element:<CartPage />
        },
    {
      path: "login",
      element: <Login />
    },
    {
      path: "shop",
      element: <Shop />
    },
    {
      path: "register",
      element: <Register/>
    },
    {
      path: "contact",
      element: <Contact/>
    },
    
    {
      path: "search",
      element: <Search/>
    },
    {
        path : "carousel",
        element : <Carousel/>
    },
    {
      path : "product",
      element : <Product/>
  },
  {
    path : "discover",
    element : <Discover />
},
  ],
    },
  ])
      

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
