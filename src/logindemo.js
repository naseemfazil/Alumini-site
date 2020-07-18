import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MuiPhoneInput from 'material-ui-phone-number';
import {Form,Card} from 'reactstrap';
// import './logindemo.css'
class Logindemo extends Component
{
    render()
    {
        return(
            <div className="login" >
                <h3 align="center">Alumini Site</h3>
                {/* <Card> */}
                <Form className="login">
                {/* <TextField style={{height:'4px',paddingLeft:'88px'}} className="email" className="mt-3 mb-3" label="Email" variant="outlined" /> */}
                 <TextField style={{width:'318px',height:'4px'}} type="password" label="Password" variant="outlined"/>
                {/* <MuiPhoneInput/>
                <MuiPhoneInput
  defaultCountry='ca'
  regions={['north-america', 'carribean']}
/> */} 

            </Form>
            {/* </Card> */}
                </div>

        )
    }
}
export default Logindemo;