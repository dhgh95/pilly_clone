import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IPADRESS_TS, useFetch } from "../../urls/urls";
import StartPage from "./StartPage/StartPage";
import PollsHeader from "./PollsHeader/PollsHeader";
import Contents from "./Contents/Contents";
import FinalPage from "./FinalPage/FinalPage";
import "./Polls.scss";

class Polls extends Component {
  state = {
    activeComponent: "StartPage",
    pagePosition: 0,
    data: {},
    select: ["0"],
    select_4: [],
    select_4_initial_length: 0,
    user: [], //이름, 성별, 나이, 키, 몸무게
    inputValue: "",
  };

  textHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  checkHandler = (answer) => {
    const {
      data: { answer_type, question_id },
      select,
      user,
    } = this.state;

    let sex = [...user];
    if (question_id === 2) sex[1] = answer.slice(0, 1);

    if (answer_type === "radio") {
      this.setState({
        select: [answer],
        user: question_id === 2 ? sex : user,
      });
    }

    if (answer_type === "check") {
      this.setState(
        {
          select: select.includes(answer)
            ? select.filter((selected) => selected !== answer)
            : [...select, answer],
        },
        () => {
          if (question_id === 4) {
            this.setState({
              select_4: this.state.select,
              select_4_initial_length: this.state.select.length,
            });
          }
        }
      );
    }
  };

  backHandler = () => {
    this.setState({
      pagePosition: 0,
      activeComponent: "StartPage",
      data: {},
      select: ["0"],
      select_4: [],
      select_4_initial_length: 0,
      user: [],
    });
  };

  nextHandler = () => {
    const {
      data: { answer_type, answer, question_id },
      select,
      select_4,
      select_4_initial_length,
      user,
      inputValue,
      activeComponent,
    } = this.state;

    if (answer_type === "text") {
      if (!inputValue) {
        alert("입력해주세요.");
        return;
      }

      if (question_id === 1) {
        if (inputValue.match(/[^가-힣a-zA-Z]/)) {
          alert("숫자나 특수문자는 안돼요.ㅜㅜ");
          return;
        }
      } else {
        if (inputValue.match(/[^0-9]/) && question_id !== 25) {
          alert("숫자만 입력해주세요.");
          return;
        }
      }
    } else {
      if (select.length === 0) {
        alert("check 해주세요,");
        return;
      }
    }

    if (select_4.length >= 1) {
      const [firstItem, ...rest] = select_4;

      useFetch(`${IPADRESS_TS}/survey`, {
        method: "POST",
        token: localStorage.getItem("token"),
        body: {
          next: [firstItem],
          answer:
            select_4.length === select_4_initial_length ? ["None"] : select,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            pagePosition: this.state.pagePosition + 1,
            activeComponent: "QAPage",
            data: res,
            select: [],
            select_4: rest,
          });
        });
    } else if (activeComponent === "StartPage") {
      useFetch(`${IPADRESS_TS}/survey`, {
        method: "POST",
        token: localStorage.getItem("token"),
        body: {
          next: select,
          answer: ["None"],
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            activeComponent: "QAPage",
            pagePosition: 1,
            data: res,
            inputValue: "",
          });
        });
    } else {
      useFetch(`${IPADRESS_TS}/survey`, {
        method: "POST",
        token: localStorage.getItem("token"),
        body: {
          next: answer_type === "text" ? answer : select,
          answer: ["None"],
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            pagePosition: this.state.pagePosition + 1,
            activeComponent: question_id === 25 ? "FinalPage" : "QAPage",
            data: res,
            select: [],
            user: inputValue ? [...user, inputValue] : [...user],
            inputValue: "",
          });
        });
    }
  };

  render() {
    const {
      user,
      activeComponent,
      pagePosition,
      data: { question_id },
      data,
      select,
      inputValue,
    } = this.state;

    const currentComponent = {
      StartPage: <StartPage nextHandler={this.nextHandler} />,
      QAPage: (
        <>
          <PollsHeader questionId={question_id} />
          <Contents
            nextHandler={this.nextHandler}
            backHandler={this.backHandler}
            checkHandler={this.checkHandler}
            textHandler={this.textHandler}
            data={data}
            pagePosition={pagePosition}
            select={select}
            user={user}
            inputValue={inputValue}
          />
        </>
      ),
      FinalPage: <FinalPage user={user} />,
    };

    return (
      <div className="Polls">
        <div className="polls-box">
          <Link to="/">
            <div className="x-btn">
              <img alt="x-icon" src="/images/btn-gnb-close.png" />
            </div>
          </Link>
          {currentComponent[activeComponent]}
        </div>
        <div className="footer-text">
          <p>ⓒ Carewith Inc. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default Polls;
