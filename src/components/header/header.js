import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Header = (props) => {
  const {items, total} = props;
  let count = 0; items.map((item) => count = count + item.count);
  let like = false;

  const hideLiked = (like) => {
    const likeD = document.createElement("i");
    likeD.className="fas fa-heart";
    const likeAll = document.createElement("i");
    likeAll.className="far fa-heart";
    document.getElementById("btn-like-head")
      .innerHTML = like ? "Show liked items " : 'Show all items ';
    document.getElementById("btn-like-head")
      .appendChild(like ? likeD : likeAll );
    const els = !like ? document.getElementsByClassName("item-false")
      : document.getElementsByClassName("d-none");
    for (let i = 0; i < els.length; i++) {
      !like ? els[i].classList.add("d-none") : els[1].classList.remove("d-none");
    }
    return !like;
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand col-9" to="/">My Shop</Link>
      { props.route ?
        <button id="btn-like-head" type="button" className="btn" onClick={() => like = hideLiked(like)}>
          Show liked items&nbsp;<i className="fas fa-heart"/>
        </button> : null
      }
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