import React from "react";
import {Link} from "react-router-dom";

const Item = ({ item, onAddToCart, onLike }) => {
  return (
    <div id="item">
      <div className="row no-gutters align-items-center">
        <Link to={'/cart'+item.id} className="col-md-11 row">
        <div className="col-md-3 text-center">
          <img src={item.image} className="card-img" alt="item"
               style={{maxHeight: "110px", width: "auto"}}/>
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">Name: {item.name} {item.id}</h5>
            <div className="card-text">Price: ${item.price}</div>
            <div className="card-text">Description: {item.sdescription}</div>
          </div>
        </div>
        </Link>
        <div className="col-md-1">
          <div className="row">
            <button type="button" style={{width:"100%"}} className="btn" onClick={onLike}>
              {item.isliked ? <i className="fas fa-heart fa-2x"/> :
                <i className="far fa-heart fa-2x"/>}
            </button>
          </div>
          <div className="row">
            <button type="button" style={{width:"100%"}} className="btn" onClick={onAddToCart}>
              <i className="fas fa-cart-arrow-down fa-2x"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};


export default Item;