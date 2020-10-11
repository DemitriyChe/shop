import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({items, total}) => {
  let count = 0; items.map((item) => count = count + item.count);

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">My Shop</Link>
      <Link to="/cart">
        {count} items at <i className="cart-icon fa fa-shopping-cart"/> {total}$
      </Link>
    </nav>
  )
};

const mapStateToProps = ({cart: {cartItems, total}}) => {
  return {
    items: cartItems,
    total
  }
};

export default connect(mapStateToProps)(Header);