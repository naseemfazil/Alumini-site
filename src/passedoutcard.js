import React, { Component } from 'react';
import { FiLogOut} from 'react-icons/fi';
import {
     Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,Row,Col
} from 'reactstrap';
// import {CardActions ,Card,Button,CardTitle,CardText} from 'react-mdl';
import {Card} from '@material-ui/core';
import axios from 'axios';
// import './hari2.css';
class Passedoutcard extends Component {
    constructor(props) {
        super(props)
        this.state = { header: 'I am Header', contaier: 'I am Container', footer: 'I am Footer', item: [] }
    }
    componentDidMount() {

        axios.get('http://localhost:3001/getPasseout')
            .then(response => {
                console.log("our api response")
                console.log(response);
                this.setState({ item: response.data })
                //console.log(this.state.item)
            })
            .catch(error => { console.log(error) })

    }
    butclick(props) {
        // console.log("button clicked...." + _id)
        this.props.history.push('/view_pass')

    }
    listitems() {
        let item = this.state.item;
        console.log(item)
        return (
            item.map((val, index) => {
                console.log(val.name)
                return (
                  
                         <div style={{padding:'10px'}}>
                    <Card  className="card">
                        <CardHeader><span style={{fontWeight: 'bold'}}> Alumini Name:</span>{val.Firstname} {val.Lastname}</CardHeader>
                        <CardBody>
                            <CardTitle><span style={{fontWeight: 'bold'}}> Passedout Year:</span> {val.Yearofpassout} </CardTitle>
                            <CardText><span style={{fontWeight: 'bold'}}> Field of Work:</span>{val.WorkingField}</CardText>
                            

                            {/* <Button>Go somewhere <i class="fa fa-address-card-o" aria-hidden="true"></i></Button> */}
                        </CardBody>
                        <CardFooter><span style={{ fontWeight: 'bold' }}> Exprience:</span>{val. WorkingExprience}</CardFooter>
                        <Button color="primary" onClick={this.butclick}>More details</Button>
                    </Card>
                   
                 </div>   )
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
        return <div>{this.listitems()}</div>
    }
}
export default Passedoutcard;