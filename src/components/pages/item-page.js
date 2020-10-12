import React from "react";
import { withRouter } from "react-router-dom";
import ItemList from "../item-list/item-list";

const ItemPage = ({ itemId }) => {
  return (
    <div className="container">
      <ItemList itemId={itemId}/>
    </div>
  )
};

export default withRouter(ItemPage);