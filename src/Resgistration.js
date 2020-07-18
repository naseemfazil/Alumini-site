import React, { Component } from 'react';
import { Form, Label, Input, FormGroup, Container, Row, Col,CustomInput } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
 import './Resgistration.css';
class Reg extends Component {
    render() {
        return (
            <div>
                <Form className="Resgistration">
                    <Container>
                        <Row>
                            <Col>
                                {/* <Col sm={{ size: 6, order: 2, offset: 1 }}> */}
                                <h2>ResgistrationForm</h2></Col>
                            {/* </Col> */}
                        </Row>
                        <Row className="Row">
                            <Col sm={{ size: 'auto', offset: 1 }}>
                                <FormGroup>
                                    <Label>UserName</Label>
                                    <Input type="text" placeholder="name" />
                                    <Label>Password</Label>
                                    <Input type="password" placeholder="password" />
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

                                    {/* <Label>Gender</Label> */}
                                    {/* <CustomInput type="radio" id="male" name="customRadio" label="Male" /> */}
                                    {/* <CustomInput type="radio" id="female" name="customRadio" label="Female" /> */}
 
                                    {/* <CustomInput type="radio" id="male"  label="Male" />
                                    <CustomInput type="radio" id="female"  label="Female" /> */}
                                    <Button className="btn-lg  btn-block mt-3 mb-3 "color="primary">Register</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>

        );

    }
}
export default Reg;