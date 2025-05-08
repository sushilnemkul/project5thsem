import React from 'react'
import './Discover.css'
import { Link } from 'react-router-dom'

const Discover = () => {
  return (
    <>
    
    <div className='Discoverr'>
          
          <h1 className='header-one1'>Transform Your Space with Ready-Made <br/>Nano Aquascapes</h1>
          <p className="paragraph11">No hassle, no setup, just stunning aquascapes ready to elevate your space.</p>
          <Link to="/shop" className="button44">Discover More</Link >
     
          </div>
          <div className='shrimp'>
            <img src="../ember.jpg" alt="Shrimps" className='shrimp-image' style={{width: '300px', height: '300px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: '100%' }}/>
            <h2 className='header-two'>We are now Selling Fish and Shrimps!</h2>
            <h1 className='header-three'>Explore our collection of exotic <br/> fish and shrimp, carefully curated <br/>for their beauty and quality.</h1>
            <Link to="/shop" className="button4">Shop Now</Link >
            </div>
    </>
  )
}

export default Discover