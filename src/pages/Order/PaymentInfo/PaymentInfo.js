import React, { Component } from "react";
import "./PaymentInfo.scss";

class PaymentInfo extends Component {
  render() {
    const {
      currentRadio,
      cardNumber1,
      cardNumber2,
      cardNumber3,
      cardNumber4,
      cardBirth,
      cardPassword,
      expired1,
      expired2,
      handleInputChangewithCondition,
      handlePaymentRadio,
    } = this.props;
    return (
      <div className="PaymentInfo">
        <div className="subheader">결제정보 등록</div>
        <div className="addition-contents">
          <ul>
            <li>결제 정보를 등록하여 필리 정기구독을 이용하실 수 있습니다.</li>
            <li>
              입력하신 결제 정보는 암호화되어 결제사에 전달되며 필리에는
              저장되지 않습니다.
            </li>
            <li>
              정기구독 서비스는 언제든 종료가 가능하며 종료 후에는 결제되지
              않습니다.
            </li>
          </ul>
        </div>
        <div className="payment-container">
          <div
            id="credit"
            className={`each-radio ${
              currentRadio === "credit" ? "active" : ""
            }`}
            onClick={handlePaymentRadio}
          >
            <input
              type="radio"
              name="credit"
              checked={currentRadio === "credit"}
              onChange={handlePaymentRadio}
            />
            <label id="credit">신용 / 체크카드</label>
          </div>
          {currentRadio === "credit" ? (
            <div className="credit-container">
              <div className="card-number">
                <div className="label">카드번호</div>
                <div className="input-box">
                  <div className="input-wrapper">
                    <input
                      type="number"
                      name="cardNumber1"
                      value={cardNumber1}
                      onChange={handleInputChangewithCondition}
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="password"
                      name="cardNumber2"
                      value={cardNumber2}
                      onChange={handleInputChangewithCondition}
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="password"
                      name="cardNumber3"
                      value={cardNumber3}
                      onChange={handleInputChangewithCondition}
                    />
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      name="cardNumber4"
                      value={cardNumber4}
                      onChange={handleInputChangewithCondition}
                    />
                  </div>
                </div>
              </div>
              <div className="expired-data">
                <div className="label">만료일</div>
                <div className="input-box">
                  <div className="input-wrapper">
                    <input
                      type="number"
                      name="expired1"
                      value={expired1}
                      onChange={handleInputChangewithCondition}
                    />
                  </div>
                  <span>/</span>
                  <div className="input-wrapper">
                    <input
                      type="password"
                      name="expired2"
                      value={expired2}
                      onChange={handleInputChangewithCondition}
                    />
                  </div>
                </div>
              </div>
              <div className="input-wrapper">
                <div className="label">생년월일(사업자번호)</div>
                <input
                  type="text"
                  name="cardBirth"
                  value={cardBirth}
                  onChange={handleInputChangewithCondition}
                  placeholder="생년월일(사업자번호)을 입력해 주세요. 예)820322"
                />
              </div>
              <div className="input-wrapper">
                <div className="label">비밀번호 앞 2자리</div>
                <input
                  type="password"
                  name="cardPassword"
                  value={cardPassword}
                  placeholder="비밀번호 앞 2자리를 입력해 주세요."
                  onChange={handleInputChangewithCondition}
                />
              </div>
            </div>
          ) : null}
          <div
            id="kakao"
            className={`each-radio ${currentRadio === "kakao" ? "active" : ""}`}
            onClick={handlePaymentRadio}
          >
            <input
              type="radio"
              name="kakao"
              checked={currentRadio === "kakao"}
              onChange={handlePaymentRadio}
            />
            <label id="kakao">카카오페이</label>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentInfo;
