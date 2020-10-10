import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store";
import ItemService from "./services/item-service";
import { ItemServiceProvider } from "./components/item-service-context";

const itemService = new ItemService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ItemServiceProvider value={itemService}>
        <App />
      </ItemServiceProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
