import React, { Component } from 'react';
import {Label,Input,CustomInput,Form} from 'reactstrap';
class Registerdemo extends Component
{
    constructor(props)
    {
        super(props)
        this.state={user:{UserName:'',Password:'',Conformationpassword:'',DateofBrith:'',Phonenumber:'',OTP:'',Studentstatus:''}}
        this.username=this.username.bind(this);
        this.password=this.password.bind(this);
        this.buttonsub=this.buttonsub.bind(this);
    }
    username(e)
    {
        this.setState({user:{
            UserName:e.target.value}})
    }
    password(e)
    {
        this.setState({user:{Password:e.target.value}})
    }
    buttonsub()
    {
        this.setState({user:{UserName:this.state.user.UserName,Password:this.state.user.Password}})
        console.log(this.state.user)
    }
    render()
    {
        return(
            <div>
                {/* <Form onSubmit={this.buttonsub}> */}
                                   <Label>UserName</Label>
                                    <Input type="text" value={this.state.user.UserName} onChange={this.username} placeholder="name"/>
                                    <Label>Password</Label>
                                    <Input type="password" value={this.state.user.Password} onChange={this.password} placeholder="password" />
                                    <Label>Conformation password </Label>
                                    <Input type="text" placeholder="Re-enter password" />
                                    <Label>DateofBrith</Label>
                                    <Input type="date" placeholder="dateofbrith"/>
                                    <Label>Phonenumber</Label>
                                    <Input type="text" placeholder="Phonenumber" />
                                    <Label>OTP</Label>
                                    <Input type="text" placeholder="Enter OTP Number" />
                                    <Label>Student status</Label>
                                    <CustomInput type="radio" id="current" name="customRadio" label="Current Student" />
                                    <CustomInput type="radio" id="passedout" name="customRadio" label="Passed-Out Student" />
                                    <button onClick={this.buttonsub}>submit</button>
                {/* </Form> */}
                </div>
        )
    }
}
export default Registerdemo;