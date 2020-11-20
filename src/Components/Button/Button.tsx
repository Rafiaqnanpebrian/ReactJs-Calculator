import "./style.css";

import React, { Component } from "react";

export default class Button extends Component<any> {
  render() {
    const classes = ["btn"];
    if (
      typeof this.props != "undefined" &&
      typeof this.props.type !== "undefined"
    )
      classes.push("btn--" + this.props.type);
    return (
      <button className={classes.join(" ")} onClick={this.props.onButtonPress}>
        {this.props.children}
      </button>
    );
  }
}
