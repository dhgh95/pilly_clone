import React, { Component } from "react";
import "./CheckBox.scss";

class CheckBox extends Component {
  render() {
    const { checkHandler, answer_child, select } = this.props;
    return (
      <div className="CheckBox" onClick={() => checkHandler(answer_child)}>
        <span
          className={`check-box ${
            select.includes(answer_child) ? "active" : ""
          }`}
        />
        <span className="text">{answer_child}</span>
      </div>
    );
  }
}

export default CheckBox;
