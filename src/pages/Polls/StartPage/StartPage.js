import React, { Component } from "react";
import "./StartPage.scss";

class StartPage extends Component {
  render() {
    const { nextHandler } = this.props;
    return (
      <div className="StartPage">
        <img alt="pilly-logo" src="/images/icon-survey-pilly-logo.png" />
        <h1 className="pilly">필리!</h1>
        <h1>내 건강을 알려줘!</h1>
        <p>
          몇 가지 질문에 답하고
          <br />
          나에게 필요한 영양성분을 알아보세요
        </p>
        <p className="time">약 3분정도 소요됩니다.</p>
        <button className="start-btn" onClick={() => nextHandler("0")}>
          시작하기
        </button>
        <p className="time">
          ※ 질병의 진단 및 치료는 전문적인 의료기관을 이용하세요.
        </p>
      </div>
    );
  }
}

export default StartPage;
