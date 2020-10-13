import React from "react";
import Item from "./item";
import { connect } from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const ItemList = (props) => {
    const {items, loading, error, itemId} = props;
    if (loading) {
      return <Spinner/>
    }
    if (error) {
      return <ErrorIndicator/>
    }
    if (itemId) {
      const idx = items.findIndex(({id}) => id === parseInt(itemId));
      return (
        <div key={items[idx].id} className="list-group-item list-group-item-action">
          <Item item={items[idx]} more/>
        </div>
      )
    } else {
      return (
        <div id="itemlist" className="list-group">
          {
            items.map((item) => {
              return (
                <div key={item.id} className={"list-group-item list-group-item-action item-"+item.isliked}>
                  <Item item={item} />
                </div>
              )
            })
          }
        </div>
      )
    }
};

const mapStateToProps = ({itemList: { items, loading, error }}) => {
  return { items, loading, error }
};

export default connect(mapStateToProps)(ItemList);