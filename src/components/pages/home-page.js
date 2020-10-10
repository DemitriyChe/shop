import React from "react";
import {ItemList} from "../item-list";
import ErrorBoundary from "../error-indicator";

const HomePage = () => {
  return (
    <div>
      This is a home page
      <ErrorBoundary>
        <ItemList/>
      </ErrorBoundary>
    </div>
  )
};

export default HomePage;