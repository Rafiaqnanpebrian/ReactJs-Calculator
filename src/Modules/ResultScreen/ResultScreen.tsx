import "./style.css";

import React, { Component } from "react";

export default class ResultScreen extends Component {
  render() {
    return <div className="result-screen">{this.props.children}</div>;
  }
}
