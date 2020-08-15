import React, { Component } from "react";
import { IPADRESS_TS, IPADRESS_SJ, useFetch } from "../../urls/urls";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      contact: "",
      email: "",
      password: "",
      check_password: "",
      checkbox0: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
    };
  }

  handleInputs = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkboxesHandler0 = () => {
    this.setState({
      checkbox0: !this.state.checkbox0,
      checkbox1: !this.state.checkbox1,
      checkbox2: !this.state.checkbox2,
      checkbox3: !this.state.checkbox3,
    });
  };

  handleCheckboxes = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  clickHandler = (e) => {
    const { name, contact, email, password, check_password } = this.state;

    useFetch(`${IPADRESS_TS}/user/signup`, {
      method: "POST",
      body: {
        name,
        contact,
        email,
        password,
        check_password,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          alert("회원가입에 성공하셨습니다.");
          this.props.history.push("/login");
        }
      });
  };

  render() {
    return (
      <div className="sign-up">
        <div className="top-section">
          <h3 className="signup-text">회원가입</h3>

          <div className="first-input-wrap">
            <p className="name-text">이름</p>
            <input
              onChange={this.handleInputs}
              className="type-in-your-name"
              name="name"
              type="text"
              placeholder="이름을 입력해주세요."
            />
          </div>

          <p className="contact-text">연락처</p>
          <div className="second-input-wrap">
            <input
              onChange={this.handleInputs}
              className="type-in-your-contact"
              name="contact"
              type="text"
              placeholder="연락처 ('-'제외)를 입력해주세요."
            />
            <button className="send-me-num-btn">인증번호 발송</button>
          </div>

          <div className="third-input-wrap">
            <input
              className="type-in-your-num"
              type="text"
              placeholder="인증번호를 입력해주세요"
            />
            <button className="confirm-btn">확인</button>
          </div>
        </div>
        <div className="division"></div>

        <div className="fourth-wrap">
          <p className="id-text">아이디(이메일)</p>
          <input
            onChange={this.handleInputs}
            className="type-in-your-id"
            name="email"
            type="text"
            placeholder="아이디(이메일)을 입력해주세요."
          />

          <p className="pw-text">비밀번호</p>
          <input
            onChange={this.handleInputs}
            className="type-in-your-pw"
            name="password"
            type="text"
            placeholder="비밀번호를 입력해주세요."
          />
          <p className="confirm-pw-text">비밀번호 확인</p>
          <input
            className="confirm-pw"
            name="check_password"
            type="text"
            placeholder="비밀번호 확인"
          />
        </div>

        <div className="checkbox-section">
          <div className="checkbox-main-section">
            <input
              onChange={this.checkboxesHandler0}
              className="checkboxes"
              name="checkbox0"
              type="checkbox"
              checked={this.state.checkbox0}
            />
            <label className="container">모두 동의하기</label>
            <span className="checkmark"></span>
          </div>

          <div className="division"></div>

          <div className="checkbox-subsection">
            <div className="checkboxes-and-texts">
              <input
                onChange={this.handleCheckboxes}
                className="checkboxes"
                name="checkbox1"
                type="checkbox"
                checked={this.state.checkbox1}
              />
              <label className="sub-container">이용약관 동의</label>

              <span className="checkmark"></span>
            </div>
            <p className="details">전문보기</p>
          </div>

          <div className="checkbox-subsection">
            <div className="checkboxes-and-texts">
              <input
                onChange={this.handleCheckboxes}
                className="checkboxes"
                name="checkbox2"
                type="checkbox"
                checked={this.state.checkbox2}
              />
              <label className="sub-container">개인정보처리방침 동의</label>

              <span className="checkmark"></span>
            </div>
            <p className="details">전문보기</p>
          </div>

          <div className="checkbox-subsection">
            <div className="checkboxes-and-texts">
              <input
                onChange={this.handleCheckboxes}
                className="checkboxes"
                name="checkbox3"
                type="checkbox"
                checked={this.state.checkbox3}
              ></input>
              <label className="sub-container">마케팅 수신 동의 (선택)</label>

              <span className="checkmark"></span>
            </div>
            <p className="details">전문보기</p>
          </div>
        </div>

        <div className="btns">
          <button onClick={this.clickHandler} className="signup-btn">
            회원가입
          </button>
          <button className="signup-btn kakao"> KAKAO 회원가입</button>
          <img
            className="logo kakao"
            alt="kakao-logo"
            src="https://pilly.kr/images/icons/auth/icon-auth-kakaotalk@2x.png"
          />

          <button className="signup-btn facebook">FACEBOOK 회원가입</button>
          <img
            className="logo facebook"
            alt="facebook-logo"
            src="https://pilly.kr/images/icons/auth/icon-auth-facebook@2x.png"
          />

          <button className="signup-btn naver">NAVER 회원가입</button>
          <img
            className="logo naver"
            alt="naver-logo"
            src="https://pilly.kr/images/icons/auth/icon-auth-naver@2x.png"
          />
        </div>
      </div>
    );
  }
}
export default Signup;
