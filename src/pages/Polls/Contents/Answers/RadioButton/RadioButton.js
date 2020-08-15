import React, { Component } from "react";
import "./RadioButton.scss";

class RadioButton extends Component {
  render() {
    const { checkHandler, answer_child, select } = this.props;
    return (
      <div className="RadioButton" onClick={() => checkHandler(answer_child)}>
        <span
          className={`radio-button ${
            select.includes(answer_child) ? "active" : ""
          }`}
        />
        <span className="text">{answer_child}</span>
      </div>
    );
  }
}

export default RadioButton;
