import React, { Component } from "react";
import { FiLogOut } from "react-icons/fi";
import {
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { Card } from "@material-ui/core";
// import {CardActions ,Card,Button,CardTitle,CardText} from 'react-mdl';
import axios from "axios";
import "./hari2.css";
// import Text from 'reactstrap';
class Currentcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "I am Header",
      contaier: "I am Container",
      footer: "I am Footer",
      item: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/getCurrent")
      .then((response) => {
        console.log("our api response");
        console.log(response);
        this.setState({ item: response.data });
        //console.log(this.state.item)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  butclick(_id) {
    console.log("button clicked...." + _id);
  }
  listitems() {
    let item = this.state.item;
    console.log(item);
    return item.map((val, index) => {
      console.log(val.name);
      return (
        <div style={{ padding: "10px" }}>
          <Card className="card">
            <CardHeader>
              <span style={{ fontWeight: "bold" }}>{val.Name}</span>
            </CardHeader>
            <CardBody>
              <CardTitle> Department:{val.Department} </CardTitle>
              <CardText>
                Area of Intrest:
                <span style={{ fontWeight: "bold" }}>{val.Areaofintrest}</span>
              </CardText>

              {/* <Button>Go somewhere <i class="fa fa-address-card-o" aria-hidden="true"></i></Button> */}
            </CardBody>
            {/* <CardFooter><Button>Button</Button>{this.state.footer}</CardFooter> */}
            <Button color="primary" onClick={this.butclick(val._id)}>
              More details
            </Button>
          </Card>
        </div>
      );
    });

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
    return <div>{this.listitems()}</div>;
  }
}
export default Currentcard;
