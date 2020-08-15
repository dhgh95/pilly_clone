import React, { Component } from "react";

class ScrollToTop extends Component {
  componentDidMount(prevProps) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return null;
  }
}

export default ScrollToTop;
