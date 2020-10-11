import React from "react";
import Item from "./item";
import {compose} from "../../utils";
import withItemService from "../hoc/with-item-service";
import { connect } from "react-redux";
import {fetchItems, itemAddtoCart} from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

class ItemList extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    const {items, loading, error, onAddtoCart} = this.props;
    if (loading) {
      return <Spinner/>
    }
    if (error) {
      return <ErrorIndicator/>
    }
    return (
      <div id="itemlist" className="list-group">
        {
          items.map((item) => {
            return (
              <div key={item.id} className="list-group-item list-group-item-action">
                <Item item={item} onAddToCart={() => onAddtoCart(item.id)}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({itemList: { items, loading, error }}) => {
  return { items, loading, error }
};

const mapDispatchToProps = (dispatch, { itemService }) => {
  return {
    fetchItems: fetchItems(itemService, dispatch),
    onAddtoCart: (id) => dispatch(itemAddtoCart(id))
  }
};

export default compose(withItemService(),
  connect(mapStateToProps, mapDispatchToProps))(ItemList);