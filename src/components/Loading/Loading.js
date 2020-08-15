import React, { Component } from "react";
import "./Loading.scss";

class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <img className="gif-holder" src="/images/loading.gif" alt="loading" />
      </div>
    );
  }
}

export default Loading;
