import React, { Component } from 'react'
import {Input,Label,Button} from 'reactstrap';
import Checkbox from '@material-ui/core/Checkbox';
import './admin.css'
class Admin extends Component
{
    constructor(){
        super()
        alert('hiii')
        this.state={Admintext:'',Status:''}
         this.adminchange = this.adminchange.bind(this);
          this.statuschange = this.statuschange.bind(this);
          this.submit=this.submit.bind(this);
    }
adminchange(e){
    this.setState({Admintext:e.target.value})
}
statuschange(e){
    this.setState({Status:e.target.value})
}


    submit()
    {
         this.setState({
             Admintext: this.state.Admintext,
             Status: this.state.Status
         })
         const a=this.state.Admintext;
         const b=this.state.Status;
          let user = {}
           user.Admintext = a;
           console.log(a);
           
            user.Status = b;
            console.log(b)
    }
    render()
    {
        return(
            <div className="form">
             < h3 align = "center"   className = "font-weight-bold content-center" > Admin </h3 >
                <Label>Admin text</Label>
 <Input type="textarea" value={this.state.Admintext} onChange={this.adminchange}/>
 <Label>Status</Label>
 
  < Checkbox
 
  name = "checkedB"
  color = "primary" 
  checked = {
      this.state.Status == "Alumini"
  }
  onChange={this.statuschange}
  value="Alumini"
      />
  
  <Label>  Alumini </Label>

   < Checkbox

   name = "checkedB"
   color = "primary" 
   checked = {
       this.state.Status == "Student"
   }
   onChange={this.statuschange}
   value="Student"
       />

       
       <Label > Student </Label>
       <div>
  <Button className="button" onClick={this.submit}>Submit</Button>
      </div>

            </div>
        )
    }
}
export default Admin;