import React from "react";
import {Link} from "react-router-dom";
import {itemAddtoCart, itemLiked} from "../../actions";
import {connect} from "react-redux";

const Item = (props) => {
  const { item, onAddtoCart, onLike, more } = props;
  return (
    <div id="item">
      <div className="row no-gutters align-items-center">
        <Link to={'/item/'+item.id} className="col-md-11 list-group-item-action">
          <div className="row">
            <div className="col-md-3 text-center">
              <img src={item.image} className="card-img" alt="item"
                   style={{maxHeight: "110px", width: "auto"}}/>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{more ? `${item.name} ${item.id}` : `Name: ${item.name} ${item.id}`}</h5>
                <div className="card-text">Price: ${item.price}</div>
                <div className="card-text">Description: {more ? item.ldescription : item.sdescription}</div>
              </div>
            </div>
          </div>
        </Link>
        <div className="col-md-1">
          <div className="row">
            {item.isLiked}
            <button type="button" style={{width:"100%"}} className="btn" onClick={() => onLike(item.id)}>
              {item.isliked ? <i className="fas fa-heart fa-2x"/> :
                <i className="far fa-heart fa-2x"/>}
            </button>
          </div>
          <div className="row">
            <button type="button" style={{width:"100%"}} className="btn" onClick={() => onAddtoCart(item.id)}>
              <i className="fas fa-cart-arrow-down fa-2x"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = ({cart: {cartItems, total}}) => {
  return {
    items: cartItems,
    total
  }
};

const mapDispatchToProps = {
  onAddtoCart: itemAddtoCart,
  onLike: itemLiked
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);