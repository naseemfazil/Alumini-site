import React, { Component } from "react";
import Label from "reactstrap/lib/Label";
import { Input, Form, Button } from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";
import "./cppassout.css";
class Cppassout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      DOB: "",
      Yearofpassout: "",
      WorkingExprience: "",
      WorkingField: "",
      OnGoingProject: "",
      Email: "",
    };
    this.firstname = this.firstname.bind(this);
    this.lastname = this.lastname.bind(this);
    this.dob = this.dob.bind(this);
    this.yearofpassout = this.yearofpassout.bind(this);
    this.workingexprience = this.workingexprience.bind(this);
    this.workingfield = this.workingfield.bind(this);
    this.ongoingproject = this.ongoingproject.bind(this);
    this.email = this.email.bind(this);
    this.button = this.button.bind(this);
  }
  firstname(e) {
    this.setState({ Firstname: e.target.value });
  }
  lastname(e) {
    this.setState({ Lastname: e.target.value });
  }
  dob(e) {
    this.setState({ DOB: e.target.value });
  }
  yearofpassout(e) {
    this.setState({ Yearofpassout: e.target.value });
  }
  workingexprience(e) {
    this.setState({ WorkingExprience: e.target.value });
  }
  workingfield(e) {
    this.setState({ WorkingField: e.target.value });
  }
  ongoingproject(e) {
    this.setState({ OnGoingProject: e.target.value });
  }
  email(e) {
    this.setState({ Email: e.target.value });
  }
  button() {
    this.setState({
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      DOB: this.state.DOB,
    });
    this.setState({
      Yearofpassout: this.state.Yearofpassout,
      WorkingExprience: this.state.WorkingExprience,
    });
    this.setState({
      WorkingField: this.state.WorkingField,
      OnGoingProject: this.state.OnGoingProject,
    });
    const a = this.state.Firstname;
    const b = this.state.Lastname;
    const c = this.state.DOB;
    const d = this.state.Yearofpassout;
    const e = this.state.WorkingExprience;
    const f = this.state.WorkingField;
    const g = this.state.OnGoingProject;
    const h = this.state.Email;
    let user = {};
    if (a == "") {
      Swal.fire({
        icon: "warning",
        title: "Enter Firstname",
      });
      return;
    }
    user.Firstname = a;
    if (b == "") {
      Swal.fire({
        icon: "warning",
        title: "Enter Lastname",
      });
      return;
    }
    user.Lastname = b;
    if (c == "") {
      Swal.fire({
        icon: "warning",
        title: "Enter Date of birth",
      });
      return;
    }
    user.DOB = c;
    if (d == "") {
      Swal.fire({
        icon: "warning",
        title: "Enter Year of passedout",
      });
      return;
    }
    user.Yearofpassout = d;
    if (e == "") {
      Swal.fire({
        icon: "warning",
        title: "Enter Working Exprience",
      });
      return;
    }
    user.WorkingExprience = e;
    if (c == "") {
      Swal.fire({
        icon: "warning",
        title: "Enter Working Field",
      });
      return;
    }
    user.WorkingField = f;
    if (g == "") {
      Swal.fire({
        icon: "warning",
        title: "Enter On going project",
      });
      return;
    }
    user.OnGoingProject = g;
    if (h == "") {
      Swal.fire({
        icon: "warning",
        title: "Enter Email",
      });
    }

    console.log(user);

    console.log("calling Api");
    axios
      .post("http://localhost:3001/savePassedout", user)
      .then((response) => {
        console.log("our api response");
        console.log(response);
        if (response.data.code == "succs") {
          console.log("passedout save sucess");
        } else if (response.data.code == "fail") {
          console.log("passout save fail");
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="backgroud">
        <h3 className="m-3 d-flex justify-content-center">
          Passedout Student Profile
        </h3>
        <Form className="form">
          {/* <h1 style={{fontFamily: "Times New Roman, Times, serif"}}>Create Profile</h1> */}
          <Label className="mt-3 mb-3">First Name</Label>
          <Input
            type="text"
            value={this.state.Firstname}
            onChange={this.firstname}
            placeholder="Firstname"
          />
          <Label className="mt-3 mb-3">Last Name</Label>
          <Input
            type="text"
            value={this.state.Lastname}
            onChange={this.lastname}
            placeholder="Lastname"
          />
          <Label className="mt-3 mb-3">Date of Birth</Label>
          <Input
            type="date"
            value={this.state.DOB}
            onChange={this.dob}
            placeholder="dateofbrith"
          />
          <Label className="mt-3 mb-3">Email</Label>
          <Input
            type="email"
            value={this.state.Email}
            onChange={this.email}
            placeholder="Email"
          />
          <Label className="mt-3 mb-3">Passout Year</Label>
          <Input
            type="text"
            value={this.state.Yearofpassout}
            onChange={this.yearofpassout}
            placeholder="Year of passout"
          />
          <Label className="mt-3 mb-3">Working Exprience</Label>
          <Input
            type="text"
            value={this.state.WorkingExprience}
            onChange={this.workingexprience}
            placeholder="Exprience"
          />
          <Label className="mt-3 mb-3">Working Field</Label>
          <Input
            type="text"
            value={this.state.WorkingField}
            onChange={this.workingfield}
            placeholder="Working Field"
          />
          <Label className="mt-3 mb-3">On going project</Label>
          <Input
            type="text"
            value={this.state.OnGoingProject}
            onChange={this.ongoingproject}
            placeholder="On going project"
          />
          <Button
            onClick={this.button}
            className="btn-lg btn-primary btn-block mt-3 md-3"
            color="primary"
          >
            Submit{" "}
          </Button>
        </Form>
      </div>
    );
  }
}

export default Cppassout;
