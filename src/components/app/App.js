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
          <Header/>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/thanks" component={ThanksPage} exact />
            <Route path="/cart" component={CartPage} exact />
            <Route path="/item/:id"
                   render={({match}) => {
                     return <ItemPage itemId={match.params.id}/>
                   }} />
            <Route render={() => (<div className="container"><h2>404 Page not found</h2></div>)} />
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