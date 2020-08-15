import React, { Component } from "react";
import "./DeliveryDetail.scss";

class DeliveryDetail extends Component {
  render() {
    const {
      addressDetail,
      addressStreet,
      cardNumber,
      methodPayment,
      receiver,
    } = this.props;
    return (
      <div className="DeliveryDetail">
        <div className="delivery-info">배송정보</div>

        <div className="top-section">
          <div className="each-line">
            <div className="recipient">받는 사람</div>
            <div className="recipient-info">{receiver}</div>
          </div>
          <div className="each-line">
            <div className="address">받는 주소</div>
            <div className="address-info">{addressStreet}</div>
          </div>

          <div className="each-line">
            <div className="address-details">상세 주소</div>
            <div className="address-details-info">{addressDetail}층</div>
          </div>

          <div className="each-line">
            <div className="payment-method">결제수단</div>
            <div className="payment-method">
              {methodPayment === "credit" ? "신용카드" : "카카오페이"}
            </div>
          </div>

          <div className="fifth-line">
            <div className="card-num">카드번호</div>
            <div classNAme="card-num-details">
              {[...cardNumber].reduce((cardNumberSplit, number, index) => {
                if (index % 4 === 3 && index !== cardNumber.length - 1) {
                  return (cardNumberSplit += `${number} / `);
                }

                return cardNumberSplit + number;
              }, "")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeliveryDetail;
