import React from "react";

const ErrorIndicator = ({ msg }) => {
  return (
    <div>
      <h2>Error! Something happened</h2>
      <p>{msg}</p>
    </div>
  )
};

export default ErrorIndicator;