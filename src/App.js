import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Button, Input } from 'react-bootstrap';
import { Button, Input, Label } from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      num1: 0,
      num2: 0,
    };
    this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
    this.addAction = this.addAction.bind(this);
  }
  handlenum1Change(evt) {
    this.setState({ num1: evt.target.value });
  }
  handlenum2Change(evt) {
    this.setState({ num2: evt.target.value });
  }
  addAction(event) {
    let num1 = this.setState({ num1: event.target.value });
    let num2 = this.setState({ num2: event.target.value });

    this.setState({ result: num1 * num2 });
  }
  render() {
    return (
      <form className="App">
        <Label>Number1</Label>
        <Input type="number" onChange={this.handlenum1Change} />
        <Label>Number2</Label>
        <Input type="number" ref="term" onChange={this.handlenum2Change} />
        <Input type="Button" onClick={this.addAction} value="Add" />
        <Input type="text" value={this.state.result} readonly />
      </form>
    );
  }
}
export default App;
