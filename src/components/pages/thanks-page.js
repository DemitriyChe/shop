import React from "react";
import {Link} from "react-router-dom";

const ThanksPage = (props) => {
  setTimeout(() => {
    props.route.history.push('/');
  }, 5000);
  return (
    <div className="container text-center">
      <h1>Thank you for buying!</h1>
      Redirect to <Link to="/">Home page</Link> in 5 seconds
    </div>
  )
};

export default ThanksPage;