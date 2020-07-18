import React, { Component } from 'react';
import { Label, Button, FormGroup, Input, Form, NavLink, NavItem } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Card, Link, Checkbox } from '@material-ui/core'
import { router} from 'react-router';

import './login.css'


import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// import {FacebookLoginButton,InstagramLoginButton} from 'react-social-login-buttons';

class Login extends Component {
    constructor(props) {
        super(props)
    
        console.log(props)
        console.log(localStorage.getItem('@Access_token'))
        console.log(this.props)
        if (localStorage.getItem('@Access_token')) {
            this.props.history.push('/placementcard')
        }

        this.state = { Email: '', Password: '',Status:'' }

        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.statuschange = this.statuschange.bind(this);

        this.button = this.button.bind(this);
        const loc = window.localStorage.getItem("userId");
        localStorage.removeItem('userId');

        // if(loc ==undefined || loc=="" || loc== null){
        //     console.log('hiii')
        //  //    this. props.history.push('/login')
        // // return <Route path="/placement" component={plecementBut}></Route>
        //  }
        //  else{
        //      // this. props.history.push('/placement')
        //      console.log("how are you")  
        //  }

    }


    email(e) {
        this.setState({ Email: e.target.value })
    }
    password(e) {
        this.setState({ Password: e.target.value })
    }
    statuschange(e) {
        this.setState({
            Status: e.target.value
        })
    }
    button() {
        this.setState({ Email: this.state.Email, Password: this.state.Password })
        const a = this.state.Email;
        const b = this.state.Password;
        const c = this.state.Status;
        let user = {}

        if (a == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Email'
            })
            return;
        }
        user.Email = a;
        if (b == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Password'
            })
            return;
        }
        user.Password = b;
        if(c==''){
            Swal.fire({
                icon:'warning',
                title:'Enter Status'
            })
            return;
        }
        user.Status =c;
        console.log(user)

        window.localStorage.setItem('userId', "sucess");
        const loc = window.localStorage.getItem('userId');
        console.log("check localstorage")
        console.log(loc);

        console.log("check login")




        axios.post('http://localhost:3001/checkLogin', user)
            .then(response => {
                console.log("our chack login response");
                console.log(response)
                localStorage.setItem('@Access_token', response._id)
                localStorage.setItem("Email", user.Email)


            })




    }
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('http://localhost:3001/getLogin'));

        if (localStorage.getItem('http://localhost:3001/getLogin')) {
            this.setState({ Email: this.documentData.Email })
            // this.setState({Password:this.documentData.Password})
        }
        else {
            this.setState({
                Email: '',
                Password: ''
            })
        }
    }
    componentWillMount() {
        localStorage.removeItem('http://localhost:3001/getLogin');
    }


    render() {

        return (
            <div>
                {/* <h3 align="center"> .</h3> */}
                <Form className="login">
                    <h3 align="center"><span className="font-weight-bold content-center">Alumini</span>.site</h3>
                    <Card style={{ padding: '23px' }}>
                        <FormGroup>
                            <Label className="mt-3 mb-3">Email</Label>
                            <Input type="email" value={this.state.Email} onChange={this.email} placeholder="Email" />
                            <Label className="mt-3 mb-3">Password</Label>
                            <Input type="password" value={this.state.Password} onChange={this.password} placeholder="Password" />

                            <Checkbox name="checkedB" color="primary" checked={this.state.Status == "Alumini"} onChange={this.statuschange} value="Alumini" />
                            <Label > Alumini </Label>

                            <Checkbox name="checkedB" color="primary" checked={this.state.Status == "Student"} onChange={this.statuschange} value="Student" />

                            <Label > Student </Label>


                            <Button onClick={this.button} className="btn-lg btn-primary btn-block mt-3 mb-3" color="primary" >Login</Button>


                            <div className='text-center' style={{ color: '' }}>

                                <NavLink href="/register">Register</NavLink>

                            </div>


                        </FormGroup>
                    </Card>
                </Form>

            </div>
        )
    }
}

export default Login;