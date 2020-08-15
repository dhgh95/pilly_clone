import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setLogout, setCurrentPage } from "../../actions";
import throttle from "../../util/throttle";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", throttle(this.handleScroll, 100));
    this.props.setCurrentPage(this.props.location.pathname.replace("/", ""));
  }

  handleScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop });
  };

  handleLinkClick = (event) => {
    this.props.setCurrentPage(event.target.name);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { scrollTop } = this.state;
    const { loginToken, setLogout, currentPage, setCurrentPage } = this.props;

    return (
      <div
        className={`Nav ${scrollTop > 50 ? "scroll-down" : ""} ${
          currentPage === "products" ? "on-products-page" : ""
        }`}
      >
        <Link to="/" className="left-logo" onClick={this.handleLinkClick}>
          <img
            alt="logo"
            src={`/images/logo-${
              currentPage === "products" && scrollTop < 50 ? "white" : "color"
            }.png`}
            name="main"
          />
        </Link>
        <div className="page-items">
          <Link
            to="/polls"
            className="page-item "
            name="polls"
            onClick={this.handleLinkClick}
          >
            추천성분
          </Link>
          <Link
            to="/products"
            className={`page-item ${
              currentPage === "products"
                ? scrollTop < 50
                  ? "active-products"
                  : "active"
                : ""
            }`}
            name="products"
            onClick={this.handleLinkClick}
          >
            제품보기
          </Link>
          <div className="page-item">고객후기</div>
          {loginToken && (
            <Link
              to="/cart"
              className={`page-item ${currentPage === "cart" ? "active" : ""}`}
              name="cart"
              onClick={this.handleLinkClick}
            >
              장바구니
            </Link>
          )}
          {loginToken && (
            <Link
              to="/mypilly"
              className={`page-item ${
                currentPage === "mypilly" ? "active" : ""
              }`}
              name="mypilly"
              onClick={this.handleLinkClick}
            >
              My Pilly
            </Link>
          )}
          {loginToken ? (
            <Link
              to="/main"
              className="page-item"
              name="logout"
              onClick={(e) => {
                setCurrentPage("main");
                setLogout();
              }}
            >
              로그아웃
            </Link>
          ) : (
            <Link
              to="/login"
              className="page-item"
              name="login"
              onClick={(e) => {
                this.handleLinkClick(e);
              }}
            >
              로그인
            </Link>
          )}
          <div className="page-item">스토리</div>
          <div className="page-item">고객센터</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { loginToken: state.loginToken, currentPage: state.currentPage };
};

export default connect(mapStateToProps, { setLogout, setCurrentPage })(
  withRouter(Nav)
);
