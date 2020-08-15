import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Answer from "./Answer/Answer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import text from "./AnswerData";
import "./Main.scss";

class Main extends Component {
  state = {
    click: "",
  };

  answerClick = (index) => {
    this.setState({
      click: this.state.click === index ? "" : index,
    });
  };

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <div className="Main">
        <ScrollToTop />
        <section className="first-section">
          <article>
            <h2>
              내 몸에 필요한 <br /> 영양성분 궁금하세요?
            </h2>
            <div className="text">나만을 위한 맞춤영양제를 찾아보세요!</div>
            <div className="text">
              이미 <span>327,981</span>명이 추천받았습니다.
            </div>
            <Link to="/products" className="btn">
              지금 시작하기
            </Link>
          </article>
        </section>
        <section className="second-section">
          <article>
            <h3>그동안 고민 많았죠?</h3>
            <Slider {...settings}>
              <div className="comment-box">
                <img
                  alt="logo"
                  src="https://img.pilly.kr/main/v201911/worry-icon-fridge.png"
                />
                <p>
                  냉장고 구석, 다 먹지도 못한 영양제가 <br />
                  자리만 차지하고 있어요.
                </p>
                <span>경기도 성남시 분당구 이**님, 24세, wecode</span>
              </div>
              <div className="comment-box">
                <img
                  alt="logo"
                  src="https://img.pilly.kr/main/v201911/worry-icon-watch.png"
                />
                <p>
                  유통기한은 이미 다 지나버렸고, <br />
                  다시 구매하려니 어떤 걸 사야 할지 고민돼요.
                </p>
                <span>경기도 성남시**님, 24세, wecode</span>
              </div>
              <div className="comment-box">
                <img
                  alt="logo"
                  src="https://img.pilly.kr/main/v201911/worry-icon-question.png"
                />
                <p>
                  세상 다양한 영양제들.
                  <br />
                  서로 자기가 최고라고만 말하고 있어요.
                </p>
                <span>경기 분당구 이**님, 24세, wecode</span>
              </div>
              <div className="comment-box">
                <img
                  alt="logo"
                  src="https://img.pilly.kr/main/v201911/worry-icon-chemical.png"
                />
                <p>
                  화장품처럼 영양제도 같이 섭취하면
                  <br />안 좋은 성분이 있을까요? 궁금해요.
                </p>
                <span>경기 분당구 이**님, 24세, wecode</span>
              </div>
            </Slider>
          </article>
        </section>
        <section className="third-section">
          <article className="main-in-box">
            <h2>이젠 쉬워요.</h2>
            <div className="survey-box">
              <div>
                <img
                  alt="icon"
                  src="https://img.pilly.kr/main/v201911/easy-icon-survey.png"
                />
                <h2>01</h2>
                <h1>건강설문</h1>
                <p>
                  딱 3분! 간단하게 체크하고 <br />내 몸에 맞는 영양성분 찾기
                </p>
              </div>
              <div>
                <img
                  alt="icon"
                  src="https://img.pilly.kr/main/v201911/easy-icon-monthly.png"
                />
                <h2>02</h2>
                <h1>정기구독</h1>
                <p>
                  30일분 필리 영양제를 <br />
                  평생 무료로 배송받기
                </p>
              </div>
              <div>
                <img
                  alt="icon"
                  src="https://img.pilly.kr/main/v201911/easy-icon-pillycare.png"
                />
                <h2>03</h2>
                <h1>섭취관리</h1>
                <p>
                  필리케어로 관리하고 <br />
                  매일매일 섭취 습관 만들기
                </p>
              </div>
            </div>
            <img
              alt="hands"
              src="https://img.pilly.kr/main/v201911/effect01-pc.jpg"
            />
            <p>
              국내 연구진의 전문적인 연구결과를 기반으로 한국인의 생활 습관을
              고려한 건강 설문 시스템을
              <br /> 만들었어요. 우리 몸에 꼭 맞는 영양성분을 추천해요.
            </p>
            <img
              alt="mark"
              src="https://img.pilly.kr/main/v201911/effect02-pc.jpg"
            />
            <p>
              필리 영양제는 우수한 품질의 원료를 직접 선택하여, 엄격한 기준의
              품질관리를 통해 만들었어요.
              <br /> 믿고 섭취할 수 있는 영양제를 만나보세요.
            </p>
          </article>
        </section>
        <section className="fourth-section">
          <article>
            <h1>
              건강 설문으로 <br />
              영양성분을 찾으세요.
            </h1>
            <Link to="/polls" className="button">
              지금 시작하기
            </Link>
          </article>
        </section>
        <section className="fiveth-section">
          <article>
            <h3>무엇이든 답해드려요.</h3>
            <div className="main5-in-box">
              <div className="main5-left">
                {text.map((text, index) => (
                  <Answer
                    key={text + index}
                    answerClick={this.answerClick}
                    click={this.state.click}
                    text={text.q}
                    answer={text.answer}
                    index={index}
                  />
                ))}
              </div>
              <div className="main5-right">
                <img
                  alt="model"
                  src="https://img.pilly.kr/main/v201911/qna2-pc@3x.jpg"
                />
              </div>
            </div>
          </article>
        </section>
        <footer>
          <div className="footer-in-box">
            <div className="footer-header">
              <div>
                <span>이용약관</span>
                <span>개인정보처리방침</span>
                <span>고객센터</span>
              </div>
              <div>
                <img
                  alt="instargram"
                  src="https://img.pilly.kr/main/v201911/icon-instagram.png"
                />
                <img
                  alt="facebook"
                  src="https://img.pilly.kr/main/v201911/icon-facebook.png"
                />
                <img
                  alt="blog"
                  src="https://img.pilly.kr/main/v201911/icon-blog.png"
                />
              </div>
            </div>
            <img alt="footer" className="footer" src="/images/footer.png" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
