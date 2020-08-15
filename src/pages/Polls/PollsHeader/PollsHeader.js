import React, { Component } from "react";
import "./PollsHeader.scss";

class PollsHeader extends Component {
  render() {
    const { questionId } = this.props;

    return (
      <div className="PollsHeader">
        <div className="status-wrapper">
          <div className="status">
            <span className={`${questionId <= 3 && "active"}`}>기본정보</span>
            <div>
              <img
                className={`${questionId <= 3 && "active"}`}
                alt="next-button"
                src="/images/icons/icon-next.png"
              />
            </div>
          </div>
          <div className="status">
            <span
              className={`${questionId <= 13 && questionId >= 4 && "active"}`}
            >
              증상/불편
            </span>
            <div>
              <img
                className={`${questionId <= 13 && questionId >= 4 && "active"}`}
                alt="next-button"
                src="/images/icons/icon-next.png"
              />
            </div>
          </div>
          <div className="status">
            <span
              className={`${questionId <= 23 && questionId >= 14 && "active"}`}
            >
              생활 습관
            </span>
            <div>
              <img
                className={`${
                  questionId <= 23 && questionId >= 14 && "active"
                }`}
                alt="next-button"
                src="/images/icons/icon-next.png"
              />
            </div>
          </div>
          <div className="status">
            <span className={`${questionId >= 24 && "active"}`}>기타</span>
            <div>
              <img
                className={`${questionId >= 24 && "active"}`}
                alt="next-button"
                src="/images/icons/icon-next.png"
              />
            </div>
          </div>
        </div>
        <div
          className="progress-bar"
          style={{ width: `${questionId * 4}%` }}
        ></div>
      </div>
    );
  }
}

export default PollsHeader;
