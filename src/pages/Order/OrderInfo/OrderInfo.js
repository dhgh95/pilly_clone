import React, { Component } from "react";
import ProductDetail from "./ProductDetail/ProductDetail";
import "./OrderInfo.scss";

class OrderInfo extends Component {
  render() {
    const { products, totalPrice, delieveryFee } = this.props;

    return (
      <div className="OrderInfo">
        <div className="subheader">주문내역</div>
        <div className="products-column">
          <span>상품정보</span>
          <span>수량</span>
          <span>주문가격</span>
        </div>
        {products.map((product, index) => {
          return <ProductDetail product={product} key={index} />;
        })}
        <div className="price-tag">
          <span>제품합계</span>
          <span>{totalPrice}</span>
        </div>
        <div className="price-tag">
          <span>배송비</span>
          <span>{delieveryFee}</span>
        </div>
        <div className="subscription-discount">
          <span>정기구독 할인혜택</span>
          <span>{delieveryFee}</span>
        </div>
        <div className="delivery-discount">
          <span>배송비 무료</span>
          <span>- {delieveryFee}</span>
        </div>
        <div className="total-price-tag">
          <span>총 결제금액</span>
          <span>{totalPrice}</span>
        </div>
      </div>
    );
  }
}

export default OrderInfo;
