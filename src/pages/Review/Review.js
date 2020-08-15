import React, { Component } from "react";
import UserReview from "./UserReview/UserReview";
import { IPADRESS_SJ, useFetch } from "../../urls/urls";
import "./Review.scss";

class Review extends Component {
  state = { userReview: [] };

  componentDidMount() {
    useFetch(`${IPADRESS_SJ}/review`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ userReview: res.main_data });
      });
  }

  render() {
    // const { length } = this.state.userReview;
    // const { userReview } = this.state;

    const {
      userReview,
      userReview: { length },
    } = this.state;

    return (
      <div className="Review">
        <header>
          <h3>고객리뷰</h3>
          <h4>
            필리를 이용해주신 고객님들의 리얼후기{" "}
            <span className="num-of-reviews">{length}</span>
            건을 확인하세요!
          </h4>
        </header>
        <div className="review-wrapper">
          {userReview.map((review, index) => {
            return <UserReview review={review} index={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Review;
