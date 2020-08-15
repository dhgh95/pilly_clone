import React, { Component } from "react";
import { IPADRESS_TS, useFetch } from "../../urls/urls";
import "./ResultsPage.scss";

class ResultsPage extends Component {
  state = {
    fetched: {},
  };
  componentDidMount() {
    useFetch(`${IPADRESS_TS}/survey/result`, {
      method: "POST",
      token: localStorage.getItem("token"),
      body: {
        result: 1,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          fetched: res,
        });
      });
  }

  render() {
    const { user } = this.props.location.state;
    return (
      <div className="ResultsPage">
        <div className="first-main">
          <div className="main-in-box">
            <h1>
              {user[0]}님의
              <br />
              건강 설문 결과표
            </h1>
            <p className="comment">
              ※ 본 결과는 의사의 처방을 대신하지 않습니다.
            </p>
            <div className="line"></div>
            <h3>좋은 생활습관이예요.</h3>
          </div>
        </div>
        <div className="second-main">
          <div className="info-box">
            <div className="title-box">
              <span className="title">나이</span>
              <span>{user[2]}</span>
            </div>
            <div className="title-box">
              <span className="title">성별</span>
              <span>{user[1]}</span>
            </div>
            <div className="title-box">
              <span className="title">BMI</span>
              <img alt="info" src="/images/icon-bmiinfo.png" />
              <span>50</span>
            </div>
          </div>
        </div>
        <div className="recommend-box">
          <h3>영양성분 추천 1</h3>
          <p>
            <span>{user[0]}</span>님의 건강 설문에 따르면 다음과 같은 영양성분이
            건강에 도움을 줄 수 있습니다.
          </p>
        </div>
        <div
          className="drug_info"
          dangerouslySetInnerHTML={{ __html: this.state.fetched.result }}
        ></div>
      </div>
    );
  }
}

export default ResultsPage;
