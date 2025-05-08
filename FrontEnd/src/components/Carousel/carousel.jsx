import React, { useState } from 'react';
import './carousel.css';

const Carousel = () => {
  const [popupData, setPopupData] = useState(null);

  const scrollLeft = () => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const showPopup = (title, text, imgSrc) => {
    setPopupData({ title, text, imgSrc });
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <div className="featured-products">
      <h1 className="section-title">Our Featured Products</h1>

      <div className="carousel-container">
        <div className="carousel">
          {[
            {
              title: "Congo Tetra",
              text: "Brightly colored schooling fish",
              img: "../congo.jpg"
            },
            {
              title: "Metal Guppy",
              text: "Iridescent fancy guppy variety",
              img: "../metalguppy.jpg"
            },
            {
              title: "Neon Tetra",
              text: "Popular vibrant aquarium fish",
              img: "../neon.jpg"
            },
            {
              title: "Neon Tetra",
              text: "Popular vibrant aquarium fish",
              img: "../neon.jpg"
            },
            {
              title: "Neon Tetra",
              text: "Popular vibrant aquarium fish",
              img: "../neon.jpg"
            },
            {
              title: "Neon Tetra",
              text: "Popular vibrant aquarium fish",
              img: "../neon.jpg"
            },
          ].map((item, index) => (
            <div className="card product-card" key={index}>
              <img 
                src={item.img} 
                className="card-img-top" 
                alt={item.title} 
                onClick={() => showPopup(item.title, item.text, item.img)}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <a href="#" className="button3" onClick={() => showPopup(item.title, item.text, item.img)}>Add to Cart</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-nav">
        <button onClick={scrollLeft} aria-label="Scroll left">&larr;</button>
        <button onClick={scrollRight} aria-label="Scroll right">&rarr;</button>
      </div>

      {popupData && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={popupData.imgSrc} alt={popupData.title} className="popup-img" />
            <h2>{popupData.title}</h2>
            <p>{popupData.text}</p>
            <button className="popup-close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
