import React from 'react';
import './Home.css';
import Particles from '../../../Reactbits/Particles/Particles';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import Carousel from '../Carousel/carousel';
import Discover from '../../Discover/Discover';


const Home = () => {
  return (
    <>
    <div className="home-container1">
      
      <div
  className="home-background"
  style={{
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundImage:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/back1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: '-1',
  }}
></div>

<div
  className="ooverlay"
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
  }}
>
  <Particles />
</div>

      
      
<div
  className="hero-section"
  style={{
    position: 'relative',
    color: '#FAF9F6',
    paddingLeft: '220px',
    paddingTop: '0px',
  }}
>

        <div className="hero-content" style={{color: '#FAF9F6', paddingLeft: '40px', paddingTop: '250px'}}>
          <h1 className="hero-title" >Fresh Aquatic Plants!!!</h1>
          <h2 className="hero-subtitle">
            Discover our diverse selection of vibrant, healthy <br/>aquarium plants to create a stunning and thriving <br/>aquascape.
          </h2>
          <p className="hero-description">
            Get the best deals on aquatic plants for your <br/> aquarium.
          </p>
        </div>
        <div
  className="button11"
  style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    marginTop: '20px',
    paddingLeft: '40px',
    paddingTop: '20px',
    paddingBottom: '220px',
  }}
>
  <Link
    to="/shop"
    className="button1"
    style={{
      backgroundColor: '#47b44c',
      color: '#fff',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px',
      width: '150px',
      borderRadius: '8px',
      fontWeight: 'bold',
    }}
  >
    Shop Now
  </Link>

  <Link
    to="/contact"
    className="button1"
    style={{
      backgroundColor: '#47b44c',
      color: '#fff',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px',
      width: '150px',
      borderRadius: '8px',
      fontWeight: 'bold',
    }}
  >
    Contact Us
  </Link>
</div>


      </div>
      <div className="products-container">
<div className='Products'>
  <Product />
  </div>

     
      
        <div className="carosule">
        <Carousel/>
        </div>
        <div className='discover'>
        <Discover/>
        </div>
        
       
        </div>
    </div>
    
    </>
  );
};

export default Home;