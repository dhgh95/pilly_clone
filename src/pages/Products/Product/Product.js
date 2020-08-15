import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { IPADRESS_SJ } from "../../../urls/urls";
import IconData from "../../DetailView/DetailIconData";
import "./Product.scss";

function Product({product, index, history}) {
  const [click, setClick] = useState(false)

  const cartHandler = (e) => {
    if (click === false) {
      if (localStorage.getItem("token")) {
        fetch(`${IPADRESS_SJ}/cart`, {
          method: "POST",
          headers: {token: localStorage.getItem("token")},
          body: {
            item: product.item,
            count: 1,
          },
        }).then((res) => {
          setClick(true)
        });
      } else {
        alert("로그인 해주세요");
        history.push("/login");
      }
    }
  };

  useEffect(() => {
    if (product.cart !== 0) {
      setClick(true);
    }
  },[product.cart])

  const {
      colors,
      deco,
      desc1,
      desc2,
      desc3,
      item,
      icon1,
      icon2,
      image,
      period,
      price,
  } = product;

  return (
    <div className="Product">
      <Link
        to={`/product/detail/${index}`}
        className="detail-view"
        style={{ backgroundColor: colors }}
      >
        <div className="name-box">
          <span>{deco}</span>
          <h3>{item}</h3>
          <img
            className="icon"
            alt={icon1}
            src={`/images/icons/${IconData[icon1]}.png`}
          />
          <img
            className="icon"
            alt={icon2}
            src={`/images/icons/${IconData[icon2]}.png`}
          />
          <img className="picture" alt="yak" src={image} />
        </div>
        <div className="text-box">
          <ul>
            <li>{desc1}</li>
            <li>{desc2}</li>
            <li>{desc3}</li>
          </ul>
          <div className="number">
            <span>{period}</span>
            <h3>{price}</h3>
          </div>
        </div>
        <span className="theView">더보기</span>
      </Link>
      <button
        className={`cart-btn-box ${click ? "click" : ""}`}
        onClick={cartHandler}
      >
        {click ? "장바구니 추가됨" : "+ 장바구니 담기"}
      </button>
    </div>
  );
}

export default withRouter(Product);
