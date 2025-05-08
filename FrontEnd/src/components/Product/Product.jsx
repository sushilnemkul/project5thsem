import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <>
     {/* Products Section */}
 
       
       <h1 className="section-title">Available Products</h1>
       
       <div className="products-grid">
         {/* Card 1 */}
         <div className="card productt-card">
           <div className="card-image-container">
             <img src="../driftwoods.jpeg" className="card-img-top" alt="Aquarium Hardscapes"/>
             <div className="card-hover-overlay">
               <div className="hover-content">
                 <h5 className="card-titlee">Aquarium Hardscapes</h5>
                 <p className="card-textt">Varieties of driftwoods and stones</p>
               <Link to="/shop" className="button2">Shop Now</Link>
               </div>
             </div>
           </div>
         </div>

         {/* Card 2 */}
         <div className="card productt-card">
           <div className="card-image-container">
             <img src="../light.jpeg" className="card-img-top" alt="Lightning System"/>
             <div className="card-hover-overlay">
               <div className="hover-content">
                 <h5 className="card-titlee">Lightning System</h5>
                 <p className="card-textt">Shop the perfect Lights for aquariums</p>
                 <Link to="/shop" className="button2">Shop Now</Link>
               </div>
             </div>
           </div>
         </div>

         {/* Card 3 */}
         <div className="card productt-card">
           <div className="card-image-container">
             <img src="../soil.jpeg" className="card-img-top" alt="Substrates"/>
             <div className="card-hover-overlay">
               <div className="hover-content">
                 <h5 className="card-titlee">Substrates</h5>
                 <p className="card-textt">Perfect for any Aquarium</p>
                  <Link to="/shop" className="button2">Shop Now</Link>
               </div>
             </div>
           </div>
         </div>
         
       </div>
    
    </>
  )
}

export default Product