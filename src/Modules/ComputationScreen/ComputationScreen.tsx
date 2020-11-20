import "./style.css";

import React, { Component } from "react";

export default class ComputationScreen extends Component {
  render() {
    return <div className="computation-screen">{this.props.children}</div>;
  }
}
