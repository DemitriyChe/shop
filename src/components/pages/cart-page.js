import React from "react";
import {connect} from "react-redux";
import { itemAddtoCart, itemRemoved, itemDeleted, clearCart } from "../../actions";
import {Link} from "react-router-dom";

const CartPage = ({ items, total, itemAddtoCart, itemRemoved, itemDeleted, clearCart }) => {
  const renderRow = (item, idx) => {
    return (
      <tr key={item.id} className="row">
        <td className="col-1">{idx+1}</td>
        <td className="col-7">
          <Link to={"/item/"+item.id}>
            <img src={item.image} alt={"item"+item.id} style={{maxHeight: "35px", width: "auto"}}/>
            &nbsp;{item.name} {item.id}
          </Link>
        </td>
        <td className="col-1">{item.count}</td>
        <td className="col-1">${item.total}</td>
        <td className="col-2">
          <button className="btn" type="button" onClick={() => itemAddtoCart(item.id)}>
            <i className="fas fa-plus"/></button>
          <button className="btn" type="button" onClick={() => itemRemoved(item.id)}>
            <i className="fas fa-minus"/></button>
          <button className="btn" type="button" onClick={() => itemDeleted(item.id)}>
            <i className="fas fa-trash"/></button>
        </td>
      </tr>
    )
  };

  return (
    <div className="container">
      <h2>Your order</h2>
      <table className="table table-hover">
        <thead>
          <tr className="row">
            <th className="col-1">#</th>
            <th className="col-7">Item</th>
            <th className="col-1">Count</th>
            <th className="col-1">Total</th>
            <th className="col-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>
      <div className="row">
        <h5 className="col-md-10">Total: ${total}</h5>
        {items.length > 0 ?
          <Link to="/thanks" type="button" className="btn btn-primary"
                onClick={() => clearCart()}>Confirm order</Link>
          : null}
      </div>

    </div>
  )
};

const mapStateToProps = ({cart: { cartItems, total }}) => {
  return {
    items: cartItems,
    total
  }
};

const mapDispatchToProps = {
  itemAddtoCart, itemRemoved, itemDeleted, clearCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);