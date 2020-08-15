import React, { Component } from "react";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    const { imgUrl, backgroundColor, name, ea, price } = this.props.product;

    return (
      <div className="ProductDetail">
        <img alt="product_img" src={imgUrl} style={{ backgroundColor }} />
        <span className="name">{name}</span>
        <span>{ea}</span>
        <span>{price}</span>
      </div>
    );
  }
}

export default ProductDetail;
