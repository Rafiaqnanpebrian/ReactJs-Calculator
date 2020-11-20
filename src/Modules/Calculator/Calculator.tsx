import "./style.css";

import React, { Component } from "react";

import Keypad from "../Keypad/Keypad";
import Screen from "../Screen/Screen";

export default class Calculator extends Component {
  state = {
    equation: "",
    result: 0,
  };
  onButtonPress = (e: any) => {
    let equation = this.state.equation;
    const pressedButton = e.target.innerHTML;
    if (pressedButton === "C") return this.clear();
    else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    )
      equation += pressedButton;
    else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1)
      equation += " " + pressedButton + " ";
    else if (pressedButton === "=") {
      try {
        // eslint-disable-next-line no-eval
        const evalResult = eval(equation);
        const result = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2);
        this.setState({ result });
      } catch (error) {
        alert("Invalid Mathematical Equation");
      }
    } else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
    }

    this.setState({ equation: equation });
  };
  clear() {
    this.setState({ equation: "", result: 0 });
  }
  render() {
    return (
      <main className="calculator">
        <Screen equation={this.state.equation} result={this.state.result} />
        <Keypad onButtonPress={this.onButtonPress} />
      </main>
    );
  }
}
