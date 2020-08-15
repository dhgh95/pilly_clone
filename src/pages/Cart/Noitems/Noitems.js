import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Noitems.scss";

class Noitems extends Component {
  render() {
    return (
      <section className="Noitems">
        <img alt="empty" src="/images/img-cart-empty.png"></img>
        <h4>장바구니에 추가된 제품이 없습니다.</h4>
        <p>
          몇가지 건강 설문을 통해 <br />
          나만을 위한 영양성분을 찾아보세요
        </p>
        <Link to="/polls" className="to-polls">
          나만의 영양성분 찾기
        </Link>
      </section>
    );
  }
}

export default Noitems;
