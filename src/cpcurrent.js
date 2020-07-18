import React, { Component } from 'react';
import{Button,Input,Label,Form} from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import './cpcurrent.css';
class Cpcurrent extends Component
{
    constructor()
    {
        super()
        this.state={Name:'',
                    Department:'',
                    Year:'',
                    Emailid:'',
                    Regno:'',
                    Areaofintrest:'',
                    CurrentCGP:'' }
    this.name=this.name.bind(this);
    this.department=this.department.bind(this);
    this.year=this.year.bind(this);
    this.emailid=this.emailid.bind(this);
    this.regno=this.regno.bind(this);
    this.areaofintrest=this.areaofintrest.bind(this);
    this.currentCGP=this.currentCGP.bind(this);
    this.button=this.button.bind(this)
    }
    name(e)
    {
       this.setState({Name:e.target.value}) 
    }
    department(e)
    {
        this.setState({Department:e.target.value})
    }
    year(e)
    {
        this.setState({Year:e.target.value})
    }
    emailid(e)
    {
        this.setState({Emailid:e.target.value})
    }
    regno(e)
    {
        this.setState({Regno:e.target.value})
    }
    areaofintrest(e)
    {
        this.setState({Areaofintrest:e.target.value})
    }
    currentCGP(e)
    {
        this.setState({CurrentCGP:e.target.value})
    }

    button()
    {
        this.setState({Name:this.state.Name})
        const a=this.state.Name;
        const b=this.state.Department;
        const c=this.state.Year;
        const d=this.state.Regno;
        const e=this.state.Areaofintrest;
        const f=this.state.CurrentCGP;
        const h=this.state.Emailid;
        let user={}
        if(a==''){
            Swal.fire({
                icon:'warning',
                title:'Enter Name'
            })
            return;
        }
        user.Name=a;
        if(b==''){
            Swal.fire({
                icon:'warning',
                title:'Enter Department'
            })
            return;
        }
        user.Department=b;

        if(c==''){
            Swal.fire({
                icon:'warning',
                title:'Enter Year'
            })
            return;
        }
        user.Year=c;
        if(h==""){
            Swal.fire({
                icon:'warning',
                title:'Enter Email'
            })
            return;
        }
        user.Emailid=h;
        if(d==''){
            Swal.fire({
                icon:'warning',
                title:'Enter Regno'
            })
            return;
        }
        user.Regno=d;
        
        if(e==''){
            Swal.fire({
                icon:'warning',
                title:'Enter Area of intrest '
            })
            return;
        }
        user.Areaofintrest=e;
        if(f==''){
            Swal.fire({
                icon:'warning',
                title:'Enter Current CGP'
            })
            return;
        }
        user.CurrentCGP=f;
        
        console.log(user)

        console.log("calling Api")
        axios.post('http://localhost:3001/saveCurrent',user)
        .then(response =>{
            console.log("our api response")
            console.log(response)
            if(response.data.code == "succ")
            {
            console.log("cpcurrent save success")
            }
            else if(response.data.code =="fail")
            {
                console.log("cpcurrent save faill")
            }
        }
        )
        .catch(error=>{console.log(error)})

    }

    render()
    {
        return(
            <div>
                <h3 className="m-3 d-flex justify-content-center">Current Student Profile</h3>
                <Form className="Cpcurrent">
                <Label>Name</Label>
                <Input type="text" value={this.state.Name} onChange={this.name} placeholder="Name"/>
                <Label className="mt-3 mb-3">Department</Label>
                <Input type="text" value={this.state.Department} onChange={this.department} placeholder="Department"/>
                <Label className="mt-3 mb-3">Year</Label>
                <Input type="text" value={this.state.Year}onChange={this.year} placeholder="Year"/>
                <Label className="mt-3 mb-3">Email Id</Label>
                <Input type="text" value={this.state.Emailid}onChange={this.emailid} placeholder="Email"/>
                <Label className="mt-3 mb-3">Registration Number</Label>
                <Input type="text" value={this.state.Regno} onChange={this.regno} placeholder="Reg.No"/>
                <Label className="mt-3 mb-3">Area of Intrest</Label>
                <Input type="text" value={this.state.Areaofintrest} onChange={this.areaofintrest} placeholder="Area Of Intrest"/>
                <Label className="mt-3 mb-3">Semester C.G.P.A</Label>
                <Input type="text" value={this.state.CurrentCGP} onChange={this.currentCGP}placeholder="Enter C.G.P.A"/>
                
                
                <Button onClick={this.button} className= "btn-lg btn-primary btn-block mt-3 md-3" color="primary" >Submit </Button>
                </Form>
                </div>
        )
    }
}
export default Cpcurrent;