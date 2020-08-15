import React, { Component } from "react";
import "./Question.scss";

class Question extends Component {
  render() {
    const { question, user, question_id, pagePosition } = this.props;
    return (
      <div className="Question">
        <p className="question">질문 {pagePosition}</p>
        <h1>{`${
          question.match("님") && question_id !== 1 ? user[0] : ""
        }${question}`}</h1>
      </div>
    );
  }
}

export default Question;
