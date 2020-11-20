import "./style.css";

import React, { Component } from "react";

import ComputationScreen from "../ComputationScreen/ComputationScreen";
import ResultScreen from "../ResultScreen/ResultScreen";

export default class Screen extends Component<any> {
  render() {
    return (
      <section className="screen">
        <ResultScreen>{this.props.result}</ResultScreen>
        <ComputationScreen>{this.props.equation}</ComputationScreen>
      </section>
    );
  }
}
