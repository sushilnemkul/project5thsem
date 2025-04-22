
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-background"></div>
      <div className="overlay">
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Fresh Aquatic Plants!!!</h1>
        <h2 className="hero-subtitle">
          Discover our diverse selection of vibrant, healthy <br/>aquarium plants to create a stunning and thriving <br/>aquascape.
        </h2>
        <p className="hero-description">
          Get the best deals on aquatic plants for your <br/> aquarium.
        </p>
      </div>
      
      <div className="hero-buttons">
        <button className="btn-primary">Shop Now</button>
        <button className="btn-primary">Contact Us</button>
      </div>

      {/* Products Section */}
      <div className="products-container">
  <h1 className="section-title">Available Products</h1>
  
  <div className="products-grid">
    {/* Card 1 */}
    <div className="card product-card">
      <div className="card-image-container">
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
          className="card-img-top" 
          alt="Running Shoes" 
        />
        <div className="card-hover-overlay">
          <div className="hover-content">
            <h5 className="card-title">Running Shoes</h5>
            <p className="card-text">Lightweight and comfortable for your daily runs.</p>
            <a href="#" className="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card product-card">
      <div className="card-image-container">
        <img 
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
          className="card-img-top" 
          alt="Smart Watch" 
        />
        <div className="card-hover-overlay">
          <div className="hover-content">
            <h5 className="card-title">Smart Watch</h5>
            <p className="card-text">Track your fitness and stay connected.</p>
            <a href="#" className="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="card product-card">
      <div className="card-image-container">
        <img 
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
          className="card-img-top" 
          alt="Headphones" 
        />
        <div className="card-hover-overlay">
          <div className="hover-content">
            <h5 className="card-title">Premium Headphones</h5>
            <p className="card-text">Crystal clear sound with noise cancellation.</p>
            <a href="#" className="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Featured Products Section */}
  
        <h1 className="section-title">Our Featured Products</h1>
        
     
          
          <div className="products-grid">
            {/* Card 1 */}
            <div className="card product-card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card product-card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card product-card">
              <img src="../public/ember.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>


     
        
    </>
  );
};

export default Home;