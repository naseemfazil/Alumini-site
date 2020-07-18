import React, { Component } from 'react';
import {Paper,Card,CardActionArea,Typography} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import {Label,FormGroup,Form} from 'reactstrap';
import './login.css';
import axios from 'axios';

class Viewpassinfo extends Component{
//   componentDidMount(){
//       console.log(this.props.location.state.val);
      
//   }
componentDidMount(){
      let requestObj = {
          Email: "example@gmail.com"
      }
      axios.post('http://localhost:3001/getPassStudentinfo', requestObj)
          .then(response => {
              console.log("our chack getPass");
              console.log(response)
          })

}
    render()
    {
    
     
        return(
            <div className="login">
<Card style={{padding:'23px'}}>
    <CardActionArea>
            <Typography gutterBottom variant="h5" align="center" style={{fontWeight:'bold'}}>Current Student</Typography>
<h5>
        <Form>
        <FormGroup>
<Label > First Name:</Label>
</FormGroup>
<FormGroup>
<Label> Last Name:</Label>
</FormGroup>
<FormGroup>
<Label>Date of Birth:</Label>
</FormGroup>
<FormGroup>
<Label>Passedout Year:</Label>
</FormGroup>
<FormGroup>
<Label>Working Exprience:</Label>
</FormGroup>
<FormGroup>
<Label>Working Field:</Label>
</FormGroup>
<FormGroup>
<Label>On going Project:</Label>
</FormGroup>
</Form>
</h5>
</CardActionArea>
    </Card>
            </div>
        )
    }
}
export default Viewpassinfo;