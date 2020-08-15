import React, { useState, useEffect } from "react";
import { IPADRESS_SJ } from "../../urls/urls";
import Product from "./Product/Product";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "./Products.scss";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${IPADRESS_SJ}/product`, {
      headers : {
        token: localStorage.getItem("token")
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.main_data)
      });
  })

  return (
    <div className="Products">
      <ScrollToTop />
      <section className="first-section">
        <article>
          <h2>
            필리의 모든 제품은 <br />
            전문적인 연구의 결과물입니다.
          </h2>
          <img alt="mark" src="/images/icon-certification-health-white.png" />
          <img alt="mark" src="/images/icon-certification-gmp-white.png" />
        </article>
      </section>
      <section className="second-section">
        {products.map((product, index) => {
          return (
            <Product
              key={product.item + index}
              index={index + 1}
              product={product}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Products;
