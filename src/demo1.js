import React, { Component } from "react";
class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "fazil", password: "123" };
    this.inputHanle = this.inputHanle.bind(this);
    this.buttonHandle = this.buttonHandle.bind(this);
    this.passwordHandle = this.passwordHandle.bind(this);
  }
  inputHanle(e) {
    this.setState({ name: e.target.value });
  }
  passwordHandle(e) {
    this.setState({ password: e.target.value });
  }
  buttonHandle(e) {
    this.setState({ name: this.state.name });
    // alert("hai");
    console.log(this.state.name);
    console.log(this.state.password);
    const a = this.state.name;
    const b = this.state.password;
    let user = {};
    user.name = a;
    user.password = b;
    console.log(user);
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.inputHanle} />
        <input
          type="password"
          value={this.state.password}
          onChange={this.passwordHandle}
        />
        <button onClick={this.buttonHandle}>Click</button>
      </div>
    );
  }
}
export default Demo1;
