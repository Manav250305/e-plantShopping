import React from 'react';
import { useSelector } from 'react-redux';
import './NavBar.css';

const Navbar = () => {
  const cart = useSelector(state => state.cart.items);

  // Calculate the total quantity of items in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Paradise Nursery</h1>
      </div>
      <div className="navbar-cart">
        <a href="/cart">
          <i className="fas fa-shopping-cart"></i>
          {totalQuantity > 0 && <span className="cart-quantity-badge">{totalQuantity}</span>}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;