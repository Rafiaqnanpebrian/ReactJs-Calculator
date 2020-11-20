import "./style.css";

import React, { Component } from "react";

import Button from "../../Components/Button/Button";
import KeypadRow from "./KeypadRow/KeypadRow";

export default class Keypad extends Component<any> {
  render() {
    return (
      <section className="keypad">
        <KeypadRow>
          <Button onButtonPress={this.props.onButtonPress}>C</Button>
          <Button onButtonPress={this.props.onButtonPress}>&larr;</Button>
          <Button onButtonPress={this.props.onButtonPress}>%</Button>
          <Button onButtonPress={this.props.onButtonPress}>/</Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={this.props.onButtonPress}>9</Button>
          <Button onButtonPress={this.props.onButtonPress}>8</Button>
          <Button onButtonPress={this.props.onButtonPress}>7</Button>
          <Button onButtonPress={this.props.onButtonPress}>*</Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={this.props.onButtonPress}>6</Button>
          <Button onButtonPress={this.props.onButtonPress}>5</Button>
          <Button onButtonPress={this.props.onButtonPress}>4</Button>
          <Button onButtonPress={this.props.onButtonPress}>-</Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={this.props.onButtonPress}>3</Button>
          <Button onButtonPress={this.props.onButtonPress}>2</Button>
          <Button onButtonPress={this.props.onButtonPress}>1</Button>
          <Button onButtonPress={this.props.onButtonPress} n>
            +
          </Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={this.props.onButtonPress}>0</Button>
          <Button onButtonPress={this.props.onButtonPress}>.</Button>
          <Button onButtonPress={this.props.onButtonPress} type="large">
            =
          </Button>
        </KeypadRow>
      </section>
    );
  }
}
