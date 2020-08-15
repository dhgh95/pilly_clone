import React, { Component } from "react";
import "./TextInput.scss";

class TextInput extends Component {
  render() {
    const { textHandler, inputValue } = this.props;
    return (
      <div className="TextInput">
        <input
          type="text"
          value={inputValue}
          placeholder="입력하세요.."
          onChange={textHandler}
        />
      </div>
    );
  }
}

export default TextInput;
