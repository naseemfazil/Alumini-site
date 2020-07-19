import React, { Component } from "react";
import { Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import axios from "axios";
class Dashcard extends Component {
  constructor(props) {
    super(props);
    this.state = { item: {}, skill: "Web dev" };
  }
  componentDidMount() {
    axios.get("http://localhost:3001/getDashboard").then((response) => {
      console.log("our api response");
      console.log(response);
      this.setState({ item: response.data.docs });
    });
  }

  card() {
    let item = this.state.item;
    // let response=this.response;
    // console.log(response)
    console.log("hiii");
    console.log(item);
    // return(
    //     item.((val,index)=>{
    return (
      <div style={{ margin: "30px" }}>
        <Row>
          <Col>
            <Card className="card">
              <h5>
                <CardActionArea className="font-weight-bold content-center">
                  Total Student:{item.totalStud}
                  <CardMedia
                    component="img"
                    alt="  "
                    height="100"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {/* Lizard */}Passed out Student : {item.passedOutCount}
                    </Typography>
                    <Typography variant="h6" component="p">
                      Current Student : {item.currentStudCount}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </h5>
              <CardActions>
                {/* <Button size="small" color="primary">
            Share
    </Button>
          <Button size="small" color="primary">
            Learn More
    </Button> */}
              </CardActions>
            </Card>
          </Col>

          <Col>
            <Card className="card">
              <CardActionArea>
                <h5>
                  {" "}
                  <CardMedia
                    className="font-weight-bold "
                    component="img"
                    alt="Passed out Student"
                    height="40"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                </h5>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Required Skills
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <ListGroup>
                      <ListGroupItem>
                        {this.state.item &&
                          this.state.item.reqSkills &&
                          this.state.item.reqSkills.length &&
                          this.state.item.reqSkills[0].Requiredskills}
                      </ListGroupItem>
                      <ListGroupItem>
                        {this.state.item &&
                          this.state.item.reqSkills &&
                          this.state.item.reqSkills.length &&
                          this.state.item.reqSkills[1].Requiredskills}
                      </ListGroupItem>
                      <ListGroupItem>
                        {this.state.item &&
                          this.state.item.reqSkills &&
                          this.state.item.reqSkills.length &&
                          this.state.item.reqSkills[2].Requiredskills}
                      </ListGroupItem>
                    </ListGroup>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
          Share
    </Button>
        <Button size="small" color="primary">
          Learn More
    </Button> */}
              </CardActions>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <CardActionArea>
                <h5>
                  {" "}
                  <CardMedia
                    className="font-weight-bold "
                    component="img"
                    alt="Current Student Known Technology"
                    height="40"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                </h5>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Technology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <ListGroup>
                      <ListGroupItem>
                        {this.state.item &&
                          this.state.item.currentStudInterest &&
                          this.state.item.currentStudInterest.length &&
                          this.state.item.currentStudInterest[0].Areaofintrest}
                      </ListGroupItem>
                      <ListGroupItem>
                        {this.state.item &&
                          this.state.item.currentStudInterest &&
                          this.state.item.currentStudInterest.length &&
                          this.state.item.currentStudInterest[1].Areaofintrest}
                      </ListGroupItem>
                      <ListGroupItem>
                        {this.state.item &&
                          this.state.item.currentStudInterest &&
                          this.state.item.currentStudInterest.length &&
                          this.state.item.currentStudInterest[2].Areaofintrest}
                      </ListGroupItem>
                    </ListGroup>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
            Share
    </Button>
          <Button size="small" color="primary">
            Learn More
    </Button> */}
              </CardActions>
            </Card>
          </Col>
        </Row>
      </div>
    );
    // }))
  }
  render() {
    return <div>{this.card()}</div>;
  }
}
export default Dashcard;
