import React, { useState } from 'react';
import './CartPage.css';

const initialProduct = {
  id: 1,
  name: 'Celestial Pearl Danios',
  price: 375,
  image: 'https://yourdomain.com/images/celestial-pearl.jpg', // replace with your image URL
  quantity: 1,
};

function CartPage() {
  const [product, setProduct] = useState(initialProduct);
  const [coupon, setCoupon] = useState('');

  const handleQuantityChange = (delta) => {
    setProduct((prev) => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + delta),
    }));
  };

  const subtotal = product.price * product.quantity;

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      <div className="cart-content">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-info">
                <img src={product.image} alt={product.name} />
                <div>
                  <p>{product.name}</p>
                  <p>Rs {product.price.toFixed(2)}</p>
                </div>
              </td>
              <td className="quantity-control">
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <input type="text" value={product.quantity} readOnly />
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </td>
              <td>Rs {subtotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div className="cart-summary">
          <div>
            <input
              type="text"
              placeholder="Coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button className="apply-coupon">Apply coupon</button>
          </div>
          <hr />
          <div className="totals">
            <p>Subtotal: Rs {subtotal.toFixed(2)}</p>
            <p>
              Shipping: <span className="shipping-calc">Calculate shipping</span>
            </p>
            <hr />
            <p><strong>Total: Rs {subtotal.toFixed(2)}</strong></p>
          </div>
          <button className="checkout-button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
