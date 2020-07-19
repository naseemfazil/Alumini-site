import React, { Component } from "react";

class Add extends Component {
  constructor() {
    super();
    this.state = { num1: "", num2: "", result: "" };
    this.num1change = this.num1change.bind(this);
    this.num2change = this.num2change.bind(this);
    this.add = this.add.bind(this);
  }
  num1change(e) {
    this.setState({ num1: e.target.value });
    console.log(this.state.num1);
  }
  num2change(e) {
    this.setState({ num2: e.target.value });
    console.log(this.state.num2);
  }
  add() {
    this.setState({ result: this.state.num1 * this.state.num2 });
    console.log(this.state.result);
  }
  render() {
    return (
      <div>
        <label>num1</label>
        <input type="text" value={this.state.num1} onChange={this.num1change} />
        <label>num2</label>
        <input type="text" value={this.state.num2} onChange={this.num2change} />
        <button onClick={this.add}>add</button>
        <label>answer</label>
        <input type="text" />
      </div>
    );
  }
}

export default Add;
