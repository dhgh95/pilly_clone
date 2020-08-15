import React, { Component } from "react";
import { IPADRESS_SJ, useFetch } from "../../urls/urls";
import OrderInfo from "../Order/OrderInfo/OrderInfo";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Loading from "../../components/Loading/Loading";
import DeliveryDetail from "./DeliveryDetail/DeliveryDetail";
import "./MyPilly.scss";

class MyPilly extends Component {
  state = { userName: "", fetchedItemInfo: [], isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      setTimeout(() => {
        useFetch(`${IPADRESS_SJ}/mypilly`, {
          token: localStorage.getItem("token"),
        })
          .then((res) => res.json())
          .then((res) => {
            this.setState({
              userName: res.user_name,
              fetchedItemInfo: res.item_info,
              isLoading: false,
            });
          });
      }, 1500);
    });
  }

  render() {
    const { userName, fetchedItemInfo, isLoading } = this.state;
    return (
      <div className="MyPilly">
        <ScrollToTop />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="container">
            <header>
              <span className="name">{userName}</span>님이 주문하신 상품의
              배송정보 및 상세내역입니다.
            </header>
            {fetchedItemInfo.length ? (
              fetchedItemInfo.map((item, index) => {
                return (
                  <>
                    <DeliveryDetail
                      key={item.receiver + index}
                      addressDetail={item.address_detail}
                      addressStreet={item.address_street}
                      cardNumber={item.card_number}
                      methodPayment={item.method_payment}
                      receiver={item.user_name}
                    />
                    <OrderInfo
                      key={item.total_price + index}
                      totalPrice={item.total_price}
                      products={item.order_info.map((product) => {
                        return {
                          imgUrl: product.pill_image,
                          backgroundColor: product.back_image,
                          name: product.name,
                          ea: product.count,
                          price: product.price,
                        };
                      })}
                      delieveryFee={"2,500원"}
                    />
                  </>
                );
              })
            ) : (
              <div className="no-items">주문하신 내역이 없습니다</div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default MyPilly;
