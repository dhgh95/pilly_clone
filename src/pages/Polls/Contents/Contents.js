import React, { Component } from "react";
import Question from "./Question/Question";
import TextInput from "./Answers/TextInput/TextInput";
import RadioButton from "./Answers/RadioButton/RadioButton";
import CheckBox from "./Answers/CheckBox/CheckBox";
import "./Contents.scss";

class Contents extends Component {
  render() {
    const {
      data: { question, answer, answer_type, question_id },
      nextHandler,
      backHandler,
      checkHandler,
      textHandler,
      select,
      pagePosition,
      user,
      inputValue,
    } = this.props;

    const typeCheck = () => {
      switch (answer_type) {
        case "text":
          return (
            <TextInput textHandler={textHandler} inputValue={inputValue} />
          );
        case "check":
          return answer.map((answer_child) => {
            return (
              <CheckBox
                key={answer_child}
                answer_child={answer_child}
                checkHandler={checkHandler}
                select={select}
              />
            );
          });
        case "radio":
          return answer.map((answer_child) => {
            return (
              <RadioButton
                key={answer_child}
                answer_child={answer_child}
                checkHandler={checkHandler}
                select={select}
              />
            );
          });
        default:
          return null;
      }
    };

    return (
      <div className="Contents">
        <Question
          question={question}
          user={user}
          question_id={question_id}
          pagePosition={pagePosition}
        />
        {typeCheck()}
        <div className="btn-box">
          <button className="back-btn" onClick={backHandler}>
            처음으로
          </button>
          <button className="next-btn" onClick={nextHandler}>
            다음
          </button>
        </div>
      </div>
    );
  }
}

export default Contents;
