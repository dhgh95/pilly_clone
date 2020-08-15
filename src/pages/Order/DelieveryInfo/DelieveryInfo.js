import React, { Component } from "react";

const daum = window.daum;

class DelieveryInfo extends Component {
  constructor(props) {
    super(props);

    this.daumAddress = React.createRef();
  }

  handleDaumAddress = () => {
    this.daumAddress.current.style.display = "block";

    new daum.Postcode({
      oncomplete: (data) => {
        const postcode = data.zonecode;
        const roadAddress = data.roadAddress;

        this.daumAddress.current.style.display = "none";
        this.props.handleAddress(postcode, roadAddress);
      },
      width: "100%",
      height: "100%",
    }).embed(this.daumAddress.current);
  };

  render() {
    const {
      delieveryName,
      delieveryPhone,
      detailAddress,
      nameVaild,
      phoneVaild,
      roadAddress,
      requestMessage,
      postcode,
      handleInputChange,
      handleInputChangewithCondition,
    } = this.props;

    return (
      <div className="DelieveryInfo">
        <div className="subheader">배송지 정보</div>
        <div className="input-wrapper">
          <div className="label">수령인 이름</div>
          <input
            type="text"
            value={delieveryName}
            placeholder="수령인 이름을 입력해 주세요."
            className={
              nameVaild === null ? "" : nameVaild ? "valid" : "inValid"
            }
            name="delieveryName"
            onChange={handleInputChangewithCondition}
          />
          <div
            className={`warning-text ${
              nameVaild === null ? "" : nameVaild ? "" : "inValid"
            }`}
          >
            이름은 2글자 이상 20자 미만의 한글 또는 영문으로 입력해주세요.
          </div>
        </div>
        <div className="input-wrapper">
          <div className="label">수령인 연락처</div>
          <input
            type="number"
            value={delieveryPhone}
            placeholder="수령인 연락처를 입력해 주세요.('-' 제외)"
            className={
              phoneVaild === null ? "" : phoneVaild ? "valid" : "inValid"
            }
            name="delieveryPhone"
            onChange={handleInputChangewithCondition}
          />
          <div
            className={`warning-text ${
              phoneVaild === null ? "" : phoneVaild ? "" : "inValid"
            }`}
          >
            11-13 자리 글자수를 입력하시오.
          </div>
        </div>
        <div className="input-wrapper with-button">
          <div className="label">우편번호</div>
          <div className="inner-wrapper">
            <input
              type="text"
              value={postcode}
              placeholder="우편번호를 입력해 주세요"
              readOnly
            />
            <button onClick={this.handleDaumAddress}>우편번호 검색</button>
          </div>
        </div>
        <div ref={this.daumAddress} className="daum-address"></div>
        <div className="input-wrapper">
          <div className="label">도로명 주소</div>
          <input
            type="text"
            value={roadAddress}
            placeholder="도로명 주소를 입력해 주세요."
            readOnly
          />
        </div>
        <div className="input-wrapper">
          <div className="label">나머지 주소</div>
          <input
            type="text"
            placeholder="나머지 주소를 입력해 주세요."
            name="detailAddress"
            value={detailAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-wrapper">
          <div className="label">배송 요청 사항</div>
          <input
            type="text"
            placeholder="배송 요청사항을 입력해 주세요."
            name="requestMessage"
            value={requestMessage}
            onChange={handleInputChange}
          />
        </div>
      </div>
    );
  }
}

export default DelieveryInfo;
