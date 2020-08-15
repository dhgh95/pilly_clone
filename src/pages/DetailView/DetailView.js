import React, { Component } from "react";
import IconData from "./DetailIconData";
import Loading from "../../components/Loading/Loading";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { IPADRESS_SJ, useFetch } from "../../urls/urls";
import "./DetailView.scss";

class DetailView extends Component {
  state = { fetched: {}, cartClicked: false };

  componentDidMount() {
    useFetch(`${IPADRESS_SJ}/product/detail/${this.props.match.params.id}`, {
      token: localStorage.getItem("token"),
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({ fetched: res, cartClicked: res.cart ? true : false })
      );
  }

  cartAdd = () => {
    const { fetched, cartClicked } = this.state;
    if (cartClicked === false) {
      if (localStorage.getItem("token")) {
        useFetch(`${IPADRESS_SJ}/cart`, {
          method: "POST",
          token: localStorage.getItem("token"),
          body: {
            item: fetched.item,
            count: 1,
          },
        }).then((res) => this.setState({ cartClicked: true }));
      } else {
        alert("로그인 해주세요");
        this.props.history.push("/login");
      }
    }
  };

  render() {
    const { fetched } = this.state;
    return (
      <div className="DetailView">
        <ScrollToTop />
        {Object.keys(fetched).length === 0 ? (
          <Loading />
        ) : (
          <>
            <section
              className="background"
              style={{ backgroundImage: `url(${fetched.img_url})` }}
            >
              <article className="content">
                <div className="title">{fetched.deco}</div>
                <div className="title bold">{fetched.item}</div>
                <div className="middle-icons">
                  <img
                    className="icon"
                    alt={fetched.icon1}
                    src={`/images/icons/${IconData[fetched.icon1]}.png`}
                  />
                  <span className="icon-text">{fetched.icon1}</span>

                  {fetched.icon2 && (
                    <img
                      className="icon"
                      alt={fetched.icon2}
                      src={`/images/icons/${IconData[fetched.icon2]}.png`}
                    />
                  )}
                  <span className="icon-text">{fetched.icon2}</span>
                </div>
                <p className="explanation">{fetched.explanation}</p>
                <div className="info">
                  <span className="period">{fetched.period}</span>
                  <span className="space"></span>
                  <span className="price">{fetched.price}</span>
                </div>
                <div className="bottom-icons">
                  <img
                    alt="cert"
                    src="/images/icons/cert-grey.png"
                    className="icon"
                  />
                  <img
                    alt="gmp"
                    src="/images/icons/gmp-grey.png"
                    className="icon"
                  />
                </div>
                <button
                  className={`cart-button ${
                    this.state.cartClicked ? "click" : null
                  }`}
                  onClick={this.cartAdd}
                >
                  {this.state.cartClicked ? "장바구니 추가됨" : "장바구니 추가"}
                </button>
              </article>
            </section>
            <div
              className="whole-page"
              dangerouslySetInnerHTML={{ __html: fetched.rest }}
            />
          </>
        )}
      </div>
    );
  }
}

export default DetailView;
