import React, { Component } from 'react';
import {Paper,Card,CardActionArea,Typography} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import {Label,FormGroup,Form} from 'reactstrap';
import './login.css';
import axios from 'axios';
import {From} from './Home'

class Viewcurrentinfo extends Component{
//   componentDidMount(){
//       console.log(this.props.location.state.val);
      
//   }
componentDidMount(){
    let requestObj={Email:"example@gmail.com"}
      axios.post('http://localhost:3001/getCurrentStudentinfo', requestObj)
          .then(response => {
              console.log("our chack login response");
              console.log(response)
        


          })
}
    render()
    {
    
     
        return(
            <>
            <From/>
            <div className="login">
<Card style={{padding:'23px',mergin:'100px'}}>
    <CardActionArea>
            <Typography gutterBottom variant="h5" align="center" style={{fontWeight:'bold'}}>Current Student</Typography>
      <h5>
        <Form>
        <FormGroup>
<Label >  Name:</Label>
</FormGroup>
<FormGroup>
< Label > Department:  </Label>
</FormGroup>
<FormGroup>
< Label > Year: </Label>
</FormGroup>
<FormGroup>
< Label > Email Id: </Label>
</FormGroup>
<FormGroup>
< Label > Registration Number: </Label>
</FormGroup>
<FormGroup>
< Label > Area of Intrest: </Label>
</FormGroup>
<FormGroup>
< Label > Semester C.G.P.A: </Label>
</FormGroup>
</Form>
</h5>
</CardActionArea>
    </Card>
            </div>
            </>
        )
    }
}
export default Viewcurrentinfo;