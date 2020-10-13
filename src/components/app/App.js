import React from 'react';
import Header from "../header";
import {CartPage, HomePage, ItemPage, ThanksPage} from "../pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {compose} from "../../utils";
import withItemService from "../hoc/with-item-service";
import { connect } from "react-redux";
import {fetchItems} from "../../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    return (
      <main role="main">
        <Router>
          <Switch>
            <Route path="/" exact render={
              (route) => (<div><Header route={route}/><HomePage/></div>)}/>
            <Route path="/thanks" exact render={
              (route) => (<div><Header/><ThanksPage route={route}/></div>)}/>
            <Route path="/cart" exact render={
              () => (<div><Header/><CartPage/></div>)}/>
            <Route path="/item/:id" render={
              ({match}) => (<div><Header/><ItemPage itemId={match.params.id}/></div>)} />
            <Route render={() =>
              (<div><Header/><div className="container"><h2>404 Page not found</h2></div></div>)} />
          </Switch>
        </Router>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch, { itemService }) => {
  return {
    fetchItems: fetchItems(itemService, dispatch)
  }
};

export default compose(withItemService(),
  connect(null, mapDispatchToProps))(App);