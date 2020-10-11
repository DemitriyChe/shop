import React from "react";
import ErrorIndicator from "./error-indicator";

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorString: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorString: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator msg={this.state.errorString}/>
    }
    return this.props.children;
  }
}