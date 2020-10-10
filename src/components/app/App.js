import React from 'react';
import './App.css';
import Header from "../header";
import {CartPage, HomePage, ItemPage, ThanksPage} from "../pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <main role="main" className="container">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/thanks" component={ThanksPage} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route path="/item" component={ItemPage} exact />
          <Route render={() => (<h2>404 Page not found</h2>)} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
