// import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './Nav.css'

// const Navbar = () => {
//   const [showShopDropdown, setShowShopDropdown] = useState(false);
//   return (
//   <>
 
// <div className="menu"style={{position:"fixed", top: 0, left: 0, right: 0, backgroundColor: "white", zIndex: 1000, display: "flex", alignItems: "center"}}>
  
// <Link className="navbar-brand" to="/" style={{marginRight: '600px', marginTop: '10px' }}>
//     <img 
//       src="/logo-removebg-preview.png" 
//       style={{
//         maxHeight: "50px",
//         display: "block",
//         paddingLeft: "200px",
//       }}
//       alt="Aqua Shop Logo"
//     />
//   </Link>
//   <Link to="/home" className="link">
//     <span className="link-icon">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="192"
//         height="192"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <rect width="256" height="256" fill="none"></rect>
//         <path
//           d="M213.3815,109.61945,133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.53887A8,8,0,0,0,213.3815,109.61945Z"
//           fill="none"
//           stroke="currentColor"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="16"
//         ></path>
//       </svg>
//     </span>
//     <span className="link-title">Home</span>
//   </Link>
//   <Link to="/shop" className="link">
//   {/* Modified Shop Link with Dropdown */}
//   <div 
//           className="shop-container"
//           onMouseEnter={() => setShowShopDropdown(true)}
//           onMouseLeave={() => setShowShopDropdown(false)}
//           style={{ position: "relative" }}
//         >
//           <Link to="/shop" className="link">
//             <span className="link-icon">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="192"
//                 height="192"
//                 fill="currentColor"
//                 viewBox="0 0 256 256"
//               >
//                 <rect width="256" height="256" fill="none"></rect>
//                 <polyline
//                   points="76.201 132.201 152.201 40.201 216 40 215.799 103.799 123.799 179.799"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="16"
//                 ></polyline>
//                 <line
//                   x1="100"
//                   y1="156"
//                   x2="160"
//                   y2="96"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="16"
//                 ></line>
//                 <path
//                   d="M82.14214,197.45584,52.201,227.397a8,8,0,0,1-11.31371,0L28.603,215.11268a8,8,0,0,1,0-11.31371l29.94113-29.94112a8,8,0,0,0,0-11.31371L37.65685,141.65685a8,8,0,0,1,0-11.3137l12.6863-12.6863a8,8,0,0,1,11.3137,0l76.6863,76.6863a8,8,0,0,1,0,11.3137l-12.6863,12.6863a8,8,0,0,1-11.3137,0L93.45584,197.45584A8,8,0,0,0,82.14214,197.45584Z"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="16"
//                 ></path>
//               </svg>
//             </span>
//             <span className="link-title">Shop</span>
//           </Link>
          
//           {showShopDropdown && (
//             <div className="shop-dropdown" style={{
//               position: "absolute",
//               top: "100%",
//               left: 0,
//               backgroundColor: "white",
//               width: "200px",
//               boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
//               zIndex: 1001,
//               padding: "15px 0"
//             }}>
//               <Link to="/shop/pants" className="dropdown-item">Pants</Link>
//               <Link to="/shop/livestock" className="dropdown-item">Livestock</Link>
//               <Link to="/shop/lights" className="dropdown-item">Lights</Link>
//               <Link to="/shop/aquarium-hardscape" className="dropdown-item">Aquarium Hardscape</Link>
//               <Link to="/shop/substrates" className="dropdown-item">Substrates</Link>
//               <Link to="/shop/co2-accessories" className="dropdown-item">CO2 Accessories</Link>
//               <Link to="/shop/tank" className="dropdown-item">Tank</Link>
//               <Link to="/shop/aquascapes" className="dropdown-item">Aquascapes</Link>
//               <Link to="/shop/nutrients" className="dropdown-item">Nutrients and accessories</Link>
//             </div>
//           )}
//         </div>
//   </Link>
//   <Link to="/contact" className="link">
//     <span className="link-icon">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="192"
//         height="192"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <rect width="256" height="256" fill="none"></rect>
//         <path
//           d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z"
//           fill="none"
//           stroke="currentColor"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="16"
//         ></path>
//         <line
//           x1="96"
//           y1="112"
//           x2="160"
//           y2="112"
//           fill="none"
//           stroke="currentColor"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="16"
//         ></line>
//         <line
//           x1="96"
//           y1="144"
//           x2="160"
//           y2="144"
//           fill="none"
//           stroke="currentColor"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="16"
//         ></line>
        
//       </svg>
//     </span>
//     <span className="link-title">Contact</span>
//   </Link>

//   <Link to="/search" className="link">
//     <span className="link-icon">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="192"
//         height="192"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <rect width="256" height="256" fill="none"></rect>
//         <circle
//           cx="116"
//           cy="116"
//           r="84"
//           fill="none"
//           stroke="currentColor"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="16"
//         ></circle>
//         <line
//           x1="175.39356"
//           y1="175.40039"
//           x2="223.99414"
//           y2="224.00098"
//           fill="none"
//           stroke="currentColor"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="16"
//         ></line>
//       </svg>
//     </span>
//     <span className="link-title" >Search</span>
    
//   </Link>
//   <Link to="/login" className="link">
//     <span className="link-icon">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="192"
//         height="192"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//       >
//         <rect width="256" height="256" fill="none"></rect>
//         <circle
//           cx="128"
//           cy="96"
//           r="64"
//           fill="none"
//           stroke="currentColor"
//           stroke-miterlimit="10"
//           stroke-width="16"
//         ></circle>
//         <path
//           d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
//           fill="none"
//           stroke="currentColor"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="16"
//         ></path>
//       </svg>
//     </span>
//     <span className="link-title">Profile</span>
//   </Link>
//   <Link to ="/" className="link"><span className="link-icon"><i className="bi bi-cart" style={{paddingLeft: "2px", fontWeight: "bold", fontSize: "22px", }}></i></span >
//   <span className="link-title" style={{paddingRight: "20px", fontSize: "18px"}}>Cart</span>
//   </Link>
// </div>

//   </>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  const [showShopDropdown, setShowShopDropdown] = useState(false);

  return (
    <>
      <div className="menu" style={{position:"fixed", top: 0, left: 0, right: 0, backgroundColor: "white", zIndex: 1000, display: "flex", alignItems: "center"}}>
        
        <Link className="navbar-brand" to="/" style={{marginRight: '600px', marginTop: '10px' }}>
          <img 
            src="/logo-removebg-preview.png" 
            style={{
              maxHeight: "50px",
              display: "block",
              paddingLeft: "200px",
            }}
            alt="Aqua Shop Logo"
          />
        </Link>
        
        <Link to="/" className="link">
          <span className="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M213.3815,109.61945,133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.53887A8,8,0,0,0,213.3815,109.61945Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
          </span>
          <span className="link-title">Home</span>
        </Link>
        
        {/* Modified Shop Link with Dropdown */}
        <div 
          className="shop-container"
          onMouseEnter={() => setShowShopDropdown(true)}
          onMouseLeave={() => setShowShopDropdown(false)}
          style={{ position: "relative" }}
        >
          <Link to="/shop" className="link">
            <span className="link-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="76.201 132.201 152.201 40.201 216 40 215.799 103.799 123.799 179.799"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="100"
                  y1="156"
                  x2="160"
                  y2="96"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <path
                  d="M82.14214,197.45584,52.201,227.397a8,8,0,0,1-11.31371,0L28.603,215.11268a8,8,0,0,1,0-11.31371l29.94113-29.94112a8,8,0,0,0,0-11.31371L37.65685,141.65685a8,8,0,0,1,0-11.3137l12.6863-12.6863a8,8,0,0,1,11.3137,0l76.6863,76.6863a8,8,0,0,1,0,11.3137l-12.6863,12.6863a8,8,0,0,1-11.3137,0L93.45584,197.45584A8,8,0,0,0,82.14214,197.45584Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </span>
            <span className="link-title">Shop</span>
          </Link>
          
          {showShopDropdown && (
            <div className="shop-dropdown" style={{
              position: "absolute",
              top: "100%",
              left: 0,
              backgroundColor: "white",
              width: "200px",
              boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
              zIndex: 1001,
              padding: "15px 0"
            }}>
              <Link to="/shop/pants" className="dropdown-item">Pants</Link>
              <Link to="/shop/livestock" className="dropdown-item">Livestock</Link>
              <Link to="/shop/lights" className="dropdown-item">Lights</Link>
              <Link to="/shop/aquarium-hardscape" className="dropdown-item">Aquarium Hardscape</Link>
              <Link to="/shop/substrates" className="dropdown-item">Substrates</Link>
              <Link to="/shop/co2-accessories" className="dropdown-item">CO2 Accessories</Link>
              <Link to="/shop/tank" className="dropdown-item">Tank</Link>
              <Link to="/shop/aquascapes" className="dropdown-item">Aquascapes</Link>
              <Link to="/shop/nutrients" className="dropdown-item">Nutrients and accessories</Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="link">
          <span className="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
              <line
                x1="96"
                y1="112"
                x2="160"
                y2="112"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="96"
                y1="144"
                x2="160"
                y2="144"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
            </svg>
          </span>
          <span className="link-title"><span>   </span>Contact</span>
        </Link>

        <Link to="/search" className="link">
          <span className="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <circle
                cx="116"
                cy="116"
                r="84"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></circle>
              <line
                x1="175.39356"
                y1="175.40039"
                x2="223.99414"
                y2="224.00098"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
            </svg>
          </span>
          <span className="link-title">Search</span>
        </Link>
        
        <Link to="/login" className="link">
          <span className="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <circle
                cx="128"
                cy="96"
                r="64"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="16"
              ></circle>
              <path
                d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
          </span>
          <span className="link-title">Profile</span>
        </Link>
        
        <Link to="/cart" className="link">
          <span className="link-icon">
            <i className="bi bi-cart" style={{paddingLeft: "2px", fontWeight: "bold", fontSize: "22px"}}></i>
          </span>
          <span className="link-title" style={{paddingRight: "20px", fontSize: "18px"}}>Cart</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;