import React from "react";
import {connect} from "react-redux";
import { itemAddtoCart, itemRemoved, itemDeleted } from "../../actions";

const CartPage = (props) => {
  const { items, total } = props;
  console.log(props);

  const renderRow = (item, idx) => {
    return (
      <tr key={item.id}>
        <td>{idx+1}</td>
        <td>{item.name}</td>
        <td>{item.count}</td>
        <td>${item.total}</td>
        <td>
          <button className="brn"><i className="fas fa-plus"/></button>
          <button className="brn"><i className="fas fa-minus"/></button>
          <button className="brn"><i className="fas fa-trash"/></button>
        </td>
      </tr>
    )
  };

  return (
    <div className="container">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>
      <h5>Total: ${total}</h5>
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
  itemAddtoCart, itemRemoved, itemDeleted
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);