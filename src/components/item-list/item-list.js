import React from "react";
import './item-list.css';
import Item from "./item";
import {compose} from "../../utils";
import withItemService from "../hoc/with-item-service";

const ItemList = ({itemService}) => {
  console.log(itemService.data);

  return (
    <div id="itemlist">
      This is item list
      <Item/>
    </div>
  )
};

export default compose(withItemService())(ItemList);