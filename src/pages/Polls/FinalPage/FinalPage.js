import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./FinalPage.scss";

class FinalPage extends Component {
  state = { percentage: 0 };

  componentDidMount() {
    const animateCircle = () => {
      const { user } = this.props;
      const ctx = document.querySelector(".canvas-progress").getContext("2d");
      const ctxBack = document
        .querySelector(".canvas-progress.background")
        .getContext("2d");
      ctx.lineWidth = 9;
      ctx.strokeStyle = "#f27a5c";
      ctxBack.lineWidth = 9;
      ctxBack.strokeStyle = "#dfe2e4";
      ctxBack.arc(50, 50, 40, Math.PI * 1.5, 100);
      ctxBack.stroke();
      const end = Math.PI * 1.5;
      for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
          ctx.clearRect(0, 0, 200, 200);
          ctx.beginPath();
          ctx.arc(50, 50, 40, Math.PI * 1.5, (end / 100) * i - 0.0045);
          ctx.stroke();
          this.setState({ percentage: i });
          if (i === 100) {
            setTimeout(
              () =>
                this.props.history.push({
                  pathname: "/results",
                  state: {
                    user: user,
                  },
                }),
              500
            );
          }
        }, i * 30);
      }
    };

    animateCircle();
  }

  render() {
    return (
      <div className="FinalPage">
        <div className="content-wrapper">
          <div className="progress">
            <canvas className="canvas-progress" width="100" height="100" />
            <canvas
              className="canvas-progress background"
              width="100"
              height="100"
            />
            <span>{this.state.percentage}</span>
          </div>
          <div className="header">답변 내용을</div>
          <div className="header bold">분석하고 있습니다.</div>
          <div className="content">필리는 전문가가 참여한</div>
          <div className="content">
            과학적 알고리즘을 통해 결과를 제공합니다.
          </div>
          <div className="loading-text">잠시만 기다려 주십시오.</div>
        </div>
      </div>
    );
  }
}

export default withRouter(FinalPage);
