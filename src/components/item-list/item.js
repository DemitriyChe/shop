import React from "react";

const Item = ({ item }) => {
  return (
    <div id="item">
      <div className="row no-gutters align-items-center">
        <div className="col-md-2 text-center">
          <img src={item.image} className="card-img" alt="item"
               style={{maxHeight: "110px", width: "auto"}}/>
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">Name: {item.name} {item.id}</h5>
            <div className="card-text">Price: {item.price}</div>
            <div className="card-text">Description: {item.sdescription}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Item;