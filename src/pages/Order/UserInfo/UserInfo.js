import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="UserInfo">
        <div className="subheader">주문자 정보</div>
        <div className="input-wrapper">
          <div className="label">이름</div>
          {user && <input type="text" value={user.name} readOnly />}
        </div>
        <div className="input-wrapper">
          <div className="label">연락처</div>
          {user && <input type="text" value={user.phone_number} readOnly />}
        </div>
        <div className="input-wrapper">
          <div className="label">이메일</div>
          {user && <input type="text" value={user.email} readOnly />}
        </div>
      </div>
    );
  }
}

export default UserInfo;
