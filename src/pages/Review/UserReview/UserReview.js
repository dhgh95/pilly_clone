import React, { Component } from "react";
import "./UserReview.scss";

class UserReview extends Component {
  constructor(props) {
    super(props);
    this.lazyTargetRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.index >= 70) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          if (entries[0].isIntersecting) {
            observer.unobserve(entries[0].target);
            entries[0].target.src = entries[0].target.dataset.src;
          }
        },
        { threshold: 0 }
      );

      observer.observe(this.lazyTargetRef.current);
    }
  }

  render() {
    const {
      name,
      purchased_item,
      purchased_date,
      photo,
      comment,
    } = this.props.review;

    const { index } = this.props;

    return (
      <div className="UserReview">
        <div className="card">
          <div className="card-header">
            <div className="name">{name}**</div>
            <div className="product">{purchased_item}</div>
            <div className="new-icon-wrapper"></div>
          </div>
          <div className="date-and-subscription">{purchased_date}</div>
        </div>
        <img
          className="product-image"
          alt={name}
          src={index < 70 && photo}
          data-src={index >= 70 && photo}
          ref={index >= 70 && this.lazyTargetRef}
        />
        <div className="bottom">
          <footer className="review-text">{comment}</footer>
          <footer className="details">더보기</footer>
        </div>
      </div>
    );
  }
}

export default UserReview;
