import React, { Component } from "react";
import { Link } from "react-router-dom";
import Price from "./Price/Price";
import Noitems from "./Noitems/Noitems";
import { IPADRESS_SJ, useFetch } from "../../urls/urls";
import Loading from "../../components/Loading/Loading";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { setCurrentPage } from "../../actions";
import { connect } from "react-redux";
import "./Cart.scss";

class Cart extends Component {
  state = {
    activeComponent: "Noitems",
    products: [],
  };

  emptyHandler = () => {
    this.setState({ activeComponent: "Loading" }, () => {
      useFetch(`${IPADRESS_SJ}/cartview/delete`, {
        method: "POST",
        token: localStorage.getItem("token"),
        body: {
          delete: "delete",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "텅텅") {
            setTimeout(() => {
              this.setState((state) => ({
                activeComponent: "Noitems",
                products: [],
              }));
            }, 500);
          }
        });
    });
  };

  countHandler = (e, id) => {
    let productCount = 0;
    let productName = "";

    const eaController = () => {
      return this.state.products.map((product) => {
        if (product.id === id) {
          let changedCount = product.count;
          if (e.target.name === "plus" && product.count < 5) changedCount += 1;
          if (e.target.name === "minus" && product.count > 1) changedCount -= 1;
          productCount = changedCount;
          productName = product.name;
          return { ...product, count: changedCount };
        }
        return product;
      });
    };

    this.setState({ products: eaController() }, () => {
      useFetch(`${IPADRESS_SJ}/cartview/count`, {
        method: "POST",
        token: localStorage.getItem("token"),
        body: {
          item: productName,
          count: productCount,
        },
      });
    });
  };

  componentDidMount = () => {
    this.setState({ activeComponent: "Loading" }, () => {
      useFetch(`${IPADRESS_SJ}/cartview`, {
        token: localStorage.getItem("token"),
      })
        .then((res) => res.json())
        .then((res) => {
          setTimeout(() => {
            this.setState({
              products: res.order,
              activeComponent: res.order ? "Price" : "Noitems",
            });
          }, 500);
        });
    });
  };

  render() {
    const currentComponent = {
      Noitems: <Noitems />,
      Price: (
        <Price
          products={this.state.products}
          countHandler={this.countHandler}
        />
      ),
      Loading: <Loading />,
    };

    const { setCurrentPage } = this.props;

    return (
      <div className="Cart">
        <ScrollToTop />
        <header>
          <h2>장바구니</h2>
          <div className="btn-box">
            <Link
              to="/products"
              className="toProducts"
              onClick={() => setCurrentPage("products")}
            >
              <img
                alt="plus"
                src="/images/icon-cart-plus.png"
                onClick={() => setCurrentPage("products")}
              />
              제품추가
            </Link>
            <button className="del-btn" onClick={this.emptyHandler}></button>
          </div>
        </header>
        {currentComponent[this.state.activeComponent]}
        <footer>
          <p>ⓒ Carewith Inc. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { setCurrentPage })(Cart);
