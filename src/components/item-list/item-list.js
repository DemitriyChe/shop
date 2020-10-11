import React from "react";
import Item from "./item";
import {compose} from "../../utils";
import withItemService from "../hoc/with-item-service";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import fetchItems from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

class ItemList extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    const {items, loading, error} = this.props;
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
              <Link to="/" key={item.id} type="button" className="list-group-item list-group-item-action">
                <Item item={item} />
              </Link>
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
  }
};

export default compose(withItemService(),
  connect(mapStateToProps, mapDispatchToProps))(ItemList);