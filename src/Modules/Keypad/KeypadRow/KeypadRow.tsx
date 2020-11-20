import "./style.css";

import React, { Component } from "react";

export default class KeypadRow extends Component {
  render() {
    return <div className="keypad-row">{this.props.children}</div>;
  }
}
