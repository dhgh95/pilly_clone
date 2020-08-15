import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

class Item extends Component {
  render() {
    const { product, countHandler, priceHandler, index } = this.props;
    return (
      <section className="Item">
        <input className="check-box" type="checkbox" checked="checked" />
        <div
          className="item-img"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundColor: `${product.colors}`,
          }}
        ></div>
        <div className="comment-box">
          <Link to="/detail" className="name">
            {product.name}
          </Link>
          <div className="count-price">
            <div className="count-box">
              <button
                className="minus"
                name="minus"
                onClick={(e) => countHandler(e, product.id)}
              ></button>
              <span className="count">{product.count}</span>
              <button
                className="plus"
                name="plus"
                onClick={(e) => countHandler(e, product.id)}
              ></button>
            </div>
            <div className="price">{priceHandler(index)}원</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Item;
