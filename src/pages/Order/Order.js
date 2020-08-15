import React, { Component } from "react";
import OrderInfo from "./OrderInfo/OrderInfo";
import UserInfo from "./UserInfo/UserInfo";
import DelieveryInfo from "./DelieveryInfo/DelieveryInfo";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Loading from "../../components/Loading/Loading";
import { setCurrentPage } from "../../actions";
import { connect } from "react-redux";
import { IPADRESS_SJ, useFetch } from "../../urls/urls";
import "./Order.scss";

const delieveryFee = "2,500원";

class Order extends Component {
  constructor(props) {
    super(props);

    this.daumAddress = React.createRef();

    this.state = {
      user: "",
      delieveryName: "",
      nameVaild: null,
      delieveryPhone: "",
      phoneVaild: null,
      postcode: "",
      roadAddress: "",
      detailAddress: "",
      requestMessage: "",
      currentRadio: "",
      cardNumber1: "",
      cardNumber2: "",
      cardNumber3: "",
      cardNumber4: "",
      expired1: "",
      expired2: "",
      cardBirth: "",
      cardPassword: "",
      isLoading: false,
    };
  }

  componentDidMount() {
    useFetch(`${IPADRESS_SJ}/payment`, {
      token: localStorage.getItem("token"),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ user: res }));
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleInputChangewithCondition = (event) => {
    const { name, value } = event.target;

    if (name.match("delieveryName")) {
      const matched = value.match(/[가-힣a-zA-Z]+$/);
      this.setState({
        [name]: value,
        nameVaild:
          matched !== null ? (matched[0].length > 1 ? true : false) : false,
      });
    }

    if (name.match("delieveryPhone")) {
      const isValid = value.length >= 11 && value.length <= 13;
      this.setState({
        [name]: value,
        phoneVaild: isValid ? true : false,
      });
    }

    if (name.match("cardNumber")) {
      const stringMatched = value.match(/[^0-9]/);
      const isValid = value.length <= 4;
      if (isValid && !stringMatched) this.setState({ [name]: value });
    }

    if (name.match("expired") || name.match("cardPassword")) {
      const stringMatched = value.match(/[^0-9]/);
      const isValid = value.length <= 2;
      if (isValid && !stringMatched) this.setState({ [name]: value });
    }

    if (name.match("cardBirth")) {
      const stringMatched = value.match(/[^0-9]/);
      if (!stringMatched) this.setState({ [name]: value });
    }
  };

  handlePaymentRadio = (event) => {
    this.setState({ currentRadio: event.target.name || event.target.id });
  };

  handleAddress = (postcode, roadAddress) => {
    this.setState({ postcode, roadAddress });
  };

  handleOrderButton = async () => {
    const {
      cardBirth,
      cardNumber1,
      cardNumber2,
      cardNumber3,
      cardNumber4,
      cardPassword,
      currentRadio,
      delieveryName,
      delieveryPhone,
      detailAddress,
      expired1,
      expired2,
      postcode,
      requestMessage,
      roadAddress,
    } = this.state;
    const { products, totalPrice } = this.props.location.state;

    const stringfiedProducts = products.map((product) => {
      return {
        ...product,
        ea: product.ea.toString(),
      };
    });

    let response = await useFetch(`${IPADRESS_SJ}/payment/togo`, {
      method: "POST",
      token: localStorage.getItem("token"),
      body: {
        post_number: postcode,
        address_street: roadAddress,
        address_detail: detailAddress,
        customer_request: requestMessage,
        card_number: cardNumber1 + cardNumber2 + cardNumber3 + cardNumber4,
        expired_month: expired1,
        expired_year: expired2,
        birth: cardBirth,
        card_password: cardPassword,
        name: delieveryName,
        contact: delieveryPhone,
        cardnkakao: currentRadio,
        products: stringfiedProducts,
        totalPrice,
      },
    });

    if (response.status === 200)
      this.setState({ isLoading: true }, () => {
        this.props.setCurrentPage("mypilly");
        this.props.history.push("/mypilly");
      });
  };

  render() {
    const {
      user,
      delieveryName,
      nameVaild,
      delieveryPhone,
      phoneVaild,
      postcode,
      roadAddress,
      detailAddress,
      requestMessage,
      currentRadio,
      cardNumber1,
      cardNumber2,
      cardNumber3,
      cardNumber4,
      expired1,
      expired2,
      cardBirth,
      cardPassword,
      isLoading,
    } = this.state;
    const { products, totalPrice } = this.props.location.state;

    return (
      <div className="Order">
        <ScrollToTop />
        {isLoading ? (
          <>
            <ScrollToTop />
            <Loading />
          </>
        ) : (
          <>
            <div className="content-container">
              <div className="header">
                <span className="bold">주문 내역</span> 및
                <span className="bold"> 배송지 정보</span>
              </div>
              <OrderInfo
                products={products}
                totalPrice={totalPrice}
                delieveryFee={delieveryFee}
              />
              <UserInfo user={user} />
              <DelieveryInfo
                delieveryName={delieveryName}
                delieveryPhone={delieveryPhone}
                detailAddress={detailAddress}
                nameVaild={nameVaild}
                phoneVaild={phoneVaild}
                roadAddress={roadAddress}
                requestMessage={requestMessage}
                postcode={postcode}
                handleAddress={this.handleAddress}
                handleInputChange={this.handleInputChange}
                handleInputChangewithCondition={
                  this.handleInputChangewithCondition
                }
              />
              <PaymentInfo
                currentRadio={currentRadio}
                cardNumber1={cardNumber1}
                cardNumber2={cardNumber2}
                cardNumber3={cardNumber3}
                cardNumber4={cardNumber4}
                cardBirth={cardBirth}
                cardPassword={cardPassword}
                expired1={expired1}
                expired2={expired2}
                handleInputChangewithCondition={
                  this.handleInputChangewithCondition
                }
                handlePaymentRadio={this.handlePaymentRadio}
              />
              <div className="order-button-box">
                <button
                  className="order-button"
                  onClick={this.handleOrderButton}
                >
                  주문하기
                </button>
              </div>
              <div className="copy-right">
                ⓒ Carewith Inc. All Rights Reserved.
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { setCurrentPage })(Order);
