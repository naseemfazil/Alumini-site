import React, { Component } from 'react';
import { Label, Input, Button, Form } from 'reactstrap';
import './placement.css';
import axios from 'axios';
//import { Router, Route, IndexRoute, Link } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Login from './login';
import { useHistory, withRouter } from "react-router-dom";

class Placemant extends Component {



    constructor() {

        // const history  = useHistory();

        // console.log("in construc..")

        // token illai
        // if(true){
        //     <Router>
        //     {/* <Route path="/" component={Home}/> */}
        //     <Route path="/login" component={Login}/>
        //     {/* <Route path="/about" component={About}/> */}
        // </Router>
        // }

        super()
        this.state = {
            Companyname: '',
            Role: '',
            NoOfvancancy: '',
            Venue: '',
            Requiredskills: '',
            Salary: '',
            person: []
        }

        this.companyname = this.companyname.bind(this);
        this.role = this.role.bind(this);
        this.noofvancancy = this.noofvancancy.bind(this);
        this.venue = this.venue.bind(this);
        this.requiredskills = this.requiredskills.bind(this);
        this.salary = this.salary.bind(this);

        this.button = this.button.bind(this);
    }
    componentDidMount() {

        console.log("before placement api call")
        axios.get('http://localhost:3000/getPlacement')
            .then(response => {
                console.log("our api response1")
                console.log(response)
                // this.setState({person:response.data})
            })
    }



    companyname(e) {
        this.setState({ Companyname: e.target.value })
    }
    role(e) {
        this.setState({ Role: e.target.value })
    }
    noofvancancy(e) {
        this.setState({ NoOfvancancy: e.target.value })
    }
    venue(e) {
        this.setState({ Venue: e.target.value })
    }
    requiredskills(e) {
        this.setState({ Requiredskills: e.target.value })
    }
    salary(e) {
        this.setState({ Salary: e.target.value })
    }
    button() {
        this.setState({ Companyname: this.state.Companyname, Role: this.state.Role })
        this.setState({ NoOfvancancy: this.state.NoOfvancancy, Venue: this.state.Venue })
        this.setState({ Requiredskills: this.state.Requiredskills, Salary: this.state.Salary })
        const a = this.state.Companyname;
        const b = this.state.Role;
        const c = this.state.NoOfvancancy;
        const d = this.state.Venue;
        const e = this.state.Requiredskills;
        const f = this.state.Salary;
        let user = {}
        if (a == '') {

            Swal.fire({
                icon: 'warning',
                title: 'Enter companyname'
            })
            return;
        }
        user.Companyname = a;
        if (b == '') {

            Swal.fire({
                icon: 'warning',
                title: 'Enter Role'
            })
            return;
        }
        user.Role = b;
        if (c == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter NoOfVancancy'
            })
            return;
        }
        user.NoOfvancancy = c;
        if (d == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Venue'
            })
            return;
        }
        user.Venue = d;
        if (e == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Requiredskills'
            })
            return;
        }
        user.Requiredskills = e;
        if (f == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Enter Salary'
            })
            return;
        }
        user.Salary = f;
        console.log(user)
        //new method to api call
        // const mymethod = async =()=>{
        //     const apicall = await axios.get('');
        //     console.log(apicall)
        // }

        localStorage.setItem('http://localhost:3001/getLogin', JSON.stringify(this.state));

        console.log("calling api")
        axios.post('http://localhost:3001/savePlacement', user)
            .then(response => {
                console.log("our api response")
                console.log(response)
                if (response.data.code == "succ") {
                    alert("Saved successfully")
                    console.log("placement save succ...")
                } else if (response.data.code == "fail") {
                    console.log("placement save failedddddddddd..")
                }
                // this.setState({person:response.data})
            })
            .catch(error => { console.log(error) })




    }
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('http://localhost:3001/getLogin'));

        if (localStorage.getItem('http://localhost:3001/getLogin')) {
            this.setState({ Companyname: this.documentData.Companyname })
            // this.setState({Password:this.documentData.Password})
        }
        else {
            this.setState({
                Companyname: '',
                Role: '',
                NoOfvancancy: '',
                Venue: '',
                Requiredskills: '',
                Salary: '',
            })
        }
    }

    render() {
        const { person } = this.state;
        return (

            <div>


                {person.length ? person.map(person => <div>{person}</div>) : null}
                <h3>
                    <span className="m-3 d-flex justify-content-center">Placement Information</span></h3>
                <Form className="placement">
                    <Label>Company Name</Label>
                    <Input type="text" value={this.state.Companyname} onChange={this.companyname} placeholder="Company Name" />
                    <Label className="mt-3 md-3">Role</Label>
                    <Input type="text" value={this.state.Role} onChange={this.role} placeholder="Role" />
                    <Label className="mt-3 md-3">No of Vancancy</Label>
                    <Input type="text" value={this.state.NoOfvancancy} onChange={this.noofvancancy} placeholder="No of Vancancy" />
                    <Label className="mt-3 md-3">Venue</Label>
                    <Input type="text" value={this.state.Venue} onChange={this.venue} placeholder="Venue" />
                    <Label className="mt-3 md-3">Required Skills</Label>
                    <Input type="text" value={this.state.Requiredskills} onChange={this.requiredskills} placeholder="Required Skills" />
                    <Label className="mt-3 md-3"

                    >Salary</Label>
                    <Input type="text" value={this.state.Salary} onChange={this.salary} placeholder="Salary" />

                    <Button onClick={this.button} className="btn-lg btn-primary btn-block mt-3 md-3" color="primary" >Submit </Button>
                </Form>
            </div>
        )
    }
}
export default Placemant;