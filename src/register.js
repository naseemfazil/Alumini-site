import React, { Component } from 'react';
import { Label, Input, CustomInput, Form, Button, NavItem, NavLink } from 'reactstrap';
import './Resgistration.css'
import Swal from "sweetalert2"
import axios from 'axios';
class Registerdemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserName: '',
            Email:'',
            Password: '',
            Conformationpassword: '',
            DateofBrith: '',
            Phonenumber: '',
            OTP: '',
            Studentstatus: '',
        }
        this.username = this.username.bind(this);
        this.email= this.email.bind(this);
        this.password = this.password.bind(this);
        this.conformationpassword = this.conformationpassword.bind(this);
        this.dateofbirth = this.dateofbirth.bind(this)
        this.phonenumber = this.phonenumber.bind(this)
        this.otp = this.otp.bind(this)
        this.studentstatus = this.studentstatus.bind(this)
        this.buttonsub = this.buttonsub.bind(this);
    }
    username(e) {
        this.setState({ UserName: e.target.value })
    }
    email(e){
        this.setState({Email:e.target.value})
    }
    password(e) {
        this.setState({ Password: e.target.value })
    }
    conformationpassword(e) {
        this.setState({ Conformationpassword: e.target.value })
    }
    dateofbirth(e) {
        this.setState({ DateofBrith: e.target.value })
    }
    phonenumber(e) {
        this.setState({ Phonenumber: e.target.value })
    }
    otp(e) {
        this.setState({ OTP: e.target.value })
    }
   
    studentstatus(e) {
        this.setState({ Studentstatus: e.target.value })
    }

    buttonsub() {
        this.setState({ UserName: this.state.UserName, Email:this.state.Email, Password: this.state.Password, Conformationpassword: this.state.Conformationpassword })
        this.setState({ OTP: this.state.OTP, Studentstatus: this.state.Studentstatus })
        const a = this.state.UserName
        const b = this.state.Password
        const c = this.state.Conformationpassword
        const d = this.state.DateofBrith
        const e = this.state.OTP
        const f = this.state.Studentstatus
        const g = this.state.Email
        // console.log(a)
        let user = {}
        if(user.UserName == ""){
            // alert("Enter username")
            Swal.fire({
                icon:'warning',
                title:'Enter username'
            })
            return;
        }
        user.UserName = a;
        if(g==""){
            
            Swal.fire({
                icon:'warning',
                title:'Enter Email'
            })
            return;
        }
        user.Email=g;
        
        if(user.Password ==""){
            Swal.fire({
                icon:'warning',
                title:'Enter password'
            })
            return;
        }
        user.Password = b;
        if(c==''){
            Swal.fire({
                icon:"warning",
                title:"Enter Password again"
            })
            return;
        }
        user.Conformationpassword = c;
        
        if(user.Conformationpassword != user.Password){
            Swal.fire({
                icon:'warning',
                title:'Enter the currect Password '
            })
            return;
        }
        //dob validation
        if(user.DateofBrith==""){
            Swal.fire({
                icon:'warning',
                title:'Enter DOB'
            })
            return;
        }
        user.DateofBrith = d;
        if(e=='')
        {
            Swal.fire({
                icon:'warning',
                title:'Enter OTP'
            })
            return;
        }
        user.OTP = e;
        if(f==''){
            Swal.fire({
                icon:'warning',
                title:'Enter Student status'
            })
            return; 
        }
        user.Studentstatus = f;
        
        console.log(user)

        console.log("calling api")
        axios.post('http://localhost:3001/saveRegister', user)
            .then(response => {
                console.log("our api response")
                console.log(response)
                if (response.data.code == "sucess") {
                    console.log("register save sucess")
                }
                else if (response.data.code == "fail") {
                    console.log("register save fail")
                }
            })
            .catch(error => { console.log(error) });
    }
    render() {
        return (
            <div>
                <h3 className="m-3 d-flex justify-content-center">Registration</h3>
                {/* <Form onSubmit={this.buttonsub}> */}
                <Form className="Resgistration">
                    <Label>Name</Label>
                    <Input type="text" value={this.state.UserName} onChange={this.username} placeholder="Name" />
                    <Label className="mt-3 mb-3">Email</Label>
                    <Input type="email" value={this.state.Email} onChange={this.email} placeholder="Email"/>
                    <Label className="mt-3 mb-3">Password</Label>
                    <Input type="password" value={this.state.Password} onChange={this.password} placeholder="Password" />
                    <Label className="mt-3 mb-3">Confirmation Password </Label>
                    <Input type="password" value={this.state.Conformationpassword} onChange={this.conformationpassword} placeholder="Re-enter password" />
                    <Label className="mt-3 mb-3">Date of Birth</Label>
                    <Input type="date" value={this.state.DateofBrith} onChange={this.dateofbirth} placeholder="dateofbrith" />
                    <Label className="mt-3 mb-3">Mobile Number</Label>
                    <Input type="text" maxlength='10' value={this.state.Phonenumber} onChange={this.phonenumber} placeholder="Mobilenumber" />
                    <Label className="mt-3 mb-3">OTP</Label>
                    <Input type="text" value={this.state.OTP} onChange={this.otp} placeholder="Enter OTP Number" />
                    <Label className="mt-3 mb-3">Student Status</Label>
                    <CustomInput type="radio" value="currentstudent" checked={this.state.Studentstatus == 'currentstudent'} onChange={this.studentstatus} id="current" name="customRadio" label="Current Student" />
                    <CustomInput type="radio" value="passedoutstudent" checked={this.state.Studentstatus == 'passedoutstudent'} onChange={this.studentstatus} id="passedout" name="customRadio" label="Passed-Out Student" />
                    <Button className="btn-lg  btn-block mt-3 md-3"color="primary" onClick={this.buttonsub}> Submit</Button>
                    <div className="text-center">

                        <NavLink href="/login">Already Account?</NavLink>

                    </div>

                </Form>
            </div>
        )
    }
}
export default Registerdemo;