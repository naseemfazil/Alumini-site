import React, { Component } from 'react';
import { FiLogOut } from 'react-icons/fi';
import {
     Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, NavLink,Row,Col
} from 'reactstrap';
import {Card} from '@material-ui/core';
// import {CardActions ,Card,Button,CardTitle,CardText} from 'react-mdl';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './hari2.css';
import Placement from './placement';
import Viewpassinfo from './viewpasseinfo';

class Placementcard extends Component {
    constructor() {
        super()
        this.state = { header: 'I am Header', contaier: 'I am Container', footer: 'I am Footer', item: [] }
        //   this.butclick=this.butclick.bind(this); 
    }
    componentDidMount() {
        axios.get('http://localhost:3001/getPlacement')
            .then(response => {
                console.log("our api response")
                console.log(response);
                this.setState({ item: response.data })
                //console.log(this.state.item)
            })
            .catch(error => { console.log(error) })

    }
    butclick(val) {
        //const id= emy[
        // return (<div><Viewpassinfo id="vanakam"/></div>)
        console.log("button clicked....")
        console.log(val._id)

    }

    listitems() {
        let item = this.state.item;
        console.log(item)

        return (
            item.map((val, index) => {
                console.log(val.name)


                return (
                     
                         <Col xs="4">
                   <div style={{padding:'10px'}}>
                    <Card className="card">
                        <CardHeader><spen style={{fontWeight:'bold'}}>Companyname:</spen> {val.Companyname}</CardHeader>
                        <CardBody>
                         <img src ="https://img.favpng.com/10/17/18/logo-hcl-technologies-organization-design-brand-png-favpng-ynHGtjETVdpCau658RhCJkVXE.jpg" width="180" height="200"  />
                            {/* <CardTitle>{val.Companyname}  </CardTitle> */}
                            <CardText>
                                Role:{val.Role}

                            </CardText>
                            <CardText>Required Skills:{val.Requiredskills}</CardText>


                            {/* <Button onClick={this.but()}>Go somewhere <i class="fa fa-address-card-o" aria-hidden="true"></i></Button>   */}
                        </CardBody>
                        {/* <CardFooter><Button>Button</Button>{this.state.footer}</CardFooter> */}
                        <Button color="primary" onClick={() => {
                            this.butclick.bind(this, val);
                            this.props.history.push('/view_pass',{val:val});
                        }}>More details</Button>
                    </Card>
              </div>
              </Col>
            //    
                )
            }))

        //         <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
        //     <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>{val.name}</CardTitle>
        //     <CardText>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //         Aenan convallis.
        //     </CardText>
        //     <CardActions border>
        //         <Button colored>View Updates</Button>
        //     </CardActions>
        // </Card>)}))

    }
    render() {
        return (
            <div>
                <div>
                    {/* <Viewpassinfo id="hello"/> */}
                    <BrowserRouter>
                        <Route path="/placement" component={Placement}></Route>
                    </BrowserRouter>
                </div>
                <div>
                    <Row>
                {this.listitems()}
                </Row>
                </div>
            </div>)
    }
}
export default Placementcard;