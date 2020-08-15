import React, { Component } from "react";
import { connect } from "react-redux";
import { setLogin } from "../../actions";
import { IPADRESS_TS, IPADRESS_SJ, useFetch } from "../../urls/urls";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputs = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginButtonClick = async (e) => {
    const { email, password } = this.state;
    const { history, setLogin } = this.props;

    let response = await useFetch(`${IPADRESS_TS}/user/signin`, {
      method: "POST",
      body: {
        email,
        password,
      },
    });

    response = await response.json();

    if (response.token) {
      setLogin(response.token);
      alert("로그인 성공하셨습니다.");
      history.push("/");
    } else {
      alert("올바른 사용자가 아닙니다. 회원가입 먼저 해주세요.");
      history.push("/signup");
    }
  };

  render() {
    return (
      <div className="Login">
        <div className="background">
          <img
            className="pilly-logo"
            alt="pilly-logo"
            src="https://pilly.kr/images/logo-colored@2x.png"
            onClick={() => this.props.history.push("/")}
          />
          <div className="input-wrap">
            <input
              className="user-info"
              onChange={this.handleInputs}
              name="email"
              type="text"
              placeholder="이메일 또는 전화번호를 입력하세요."
            />
            <input
              onChange={this.handleInputs}
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요."
            />
            <button className="login-btn" onClick={this.handleLoginButtonClick}>
              로그인
            </button>
          </div>

          <div className="below-bar">
            <div className="find-or-signup">
              <div className="find-password">비밀번호 찾기</div>
              <span className="line"></span>
              <div
                className="sign-up"
                onClick={() => this.props.history.push("/signup")}
              >
                회원가입
              </div>
            </div>
            <div className="sns-btn">
              <button className="kakao-btn"> KAKAO 로그인</button>
              <img
                className="kakao-logo"
                alt="kakao-logo"
                src="https://pilly.kr/images/icons/auth/icon-auth-kakaotalk@2x.png"
              />

              <button className="facebook-btn">FACEBOOK 로그인</button>
              <img
                className="facebook-logo"
                alt="facebook-logo"
                src="https://pilly.kr/images/icons/auth/icon-auth-facebook@2x.png"
              />

              <button className="naver-btn">NAVER 로그인</button>
              <img
                className="naver-logo"
                alt="naver-logo"
                src="https://pilly.kr/images/icons/auth/icon-auth-naver@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { loginToken: state.loginToken };
};

export default connect(mapStateToProps, { setLogin })(Login);
