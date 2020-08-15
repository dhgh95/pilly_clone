import React, { Component } from "react";
import "./Answer.scss";

class Answer extends Component {
  render() {
    const { click, index, answerClick, text, answer } = this.props;
    return (
      <div
        className={`Answer ${click === index ? "click" : ""}`}
        onClick={() => answerClick(index)}
      >
        <div className="answer-flex">
          <span>{text}</span>
          <div className="icon-down"></div>
        </div>
        <div className="answer-in">{answer}</div>
      </div>
    );
  }
}

export default Answer;
