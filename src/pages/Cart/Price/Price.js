import React, { Component } from "react";
import { Link } from "react-router-dom";
import Item from "./Item/Item";
import "./Price.scss";

class Price extends Component {
  render() {
    const { products, countHandler } = this.props;

    const priceHandler = (index) => {
      let result = products[index].price * products[index].count;
      return comma(result);
    };

    const totalPriceHandler = () => {
      let totalPrice = products.reduce(
        (total, product) => (total += product.price * product.count),
        0
      );
      return comma(totalPrice);
    };

    const comma = (price) => {
      const comma = /\B(?=(\d{3})+(?!\d))/g;
      return price.toLocaleString().replace(comma, ",");
    };

    return (
      <section className="Price">
        <article className="items-box">
          <h3>정기구독 제품</h3>
        </article>
        {products.map((product, index) => {
          return (
            <Item
              key={product.name}
              product={product}
              count={products[0].count}
              countHandler={countHandler}
              priceHandler={priceHandler}
              index={index}
            />
          );
        })}
        <article className="price-box">
          <div className="price-in-box">
            <div className="price">
              <span>정기구독 제품합계</span>
              <span className="bold">{totalPriceHandler()}원</span>
            </div>
            <div className="price">
              <span>배송비</span>
              <span className="bold">2,500원</span>
            </div>
            <div className="sale-box">
              <div className="sale-header flex-between">
                <h4>정기구독 할인 혜택</h4>
                <span>총 2,500원</span>
              </div>
              <div className="sale">
                <div className="flex-between">
                  <span className="text">배송비 무료</span>
                  <span>-2,500원</span>
                </div>
                <div className="flex-between">
                  <span className="text">건강설문할인 이벤트</span>
                  <span>0원</span>
                </div>
                <div className="flex-between">
                  <div>
                    <span className="text">초대코드 확인</span>
                    <button>입력</button>
                  </div>
                  <span>0원</span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="total-box">
          <div className="total-in-box">
            <div className="total flex-between">
              <h3 className="name">총 결제금액</h3>
              <h3 className="price">{totalPriceHandler()}원</h3>
            </div>
            <div className="comment-box">
              <div className="comment-img">
                <div className="comment">
                  <p className="day">하루 873원!</p>
                  <p>건강에 투자하세요</p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <Link
              to={{
                pathname: "/order",
                state: {
                  products: products.map((product, index) => {
                    return {
                      imgUrl: product.image,
                      backgroundColor: product.colors,
                      name: product.name,
                      ea: product.count,
                      price: `${priceHandler(index)}원`,
                    };
                  }),
                  totalPrice: `${totalPriceHandler()}원`,
                },
              }}
              className="start"
            >
              정기구독 시작하기
            </Link>
            <p className="color">언제든 변경 및 해지 가능</p>
            <p className="or">또는</p>
            <Link to="/order" className="buy" products={products}>
              {totalPriceHandler()}원 | 할인 없이,한 번만 구매하기
            </Link>
          </div>
        </article>
      </section>
    );
  }
}

export default Price;
