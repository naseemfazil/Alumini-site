import React, { Component } from 'react';
import {Paper,Card,CardActionArea,Typography} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import {Label,FormGroup,Form} from 'reactstrap';
import './login.css';

class Viewplacementinfo extends Component{
//   componentDidMount(){
//       console.log(this.props.location.state.val);
//       {` Company Name:    ${this.props.location.state.val.Companyname}`}
//   }
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
<Label ></Label>
</FormGroup>
<FormGroup>
<Label> Number of vancancy:</Label>
</FormGroup>
<FormGroup>
<Label>Required skills:</Label>
</FormGroup>
<FormGroup>
<Label>Role:</Label>
</FormGroup>
<FormGroup>
<Label>Salary:</Label>
</FormGroup>
<FormGroup>
<Label>Vencue:</Label>
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
export default Viewplacementinfo;