import React, { Component } from 'react';
import {CardImg,Card,CardBody,CardTitle,Button,CardText,CardSubtitle,Col,Row} from 'reactstrap';
class Hari extends Component
{
    constructor()
    {
        super()
        this.state={name:'HelloWorld'}
    }
    render()
    {

        return(
            <div>
            <div>
                {this.state.name}
                </div>
                <div>
                    
                    
                    <Card><Row>
                        <Col>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        </Col></Row><CardBody>
         <Col> <CardTitle>{this.state.name}</CardTitle></Col>
          <Col><CardSubtitle>{this.state.name}</CardSubtitle></Col>
         <Col> <CardText>{this.state.name}</CardText></Col>
          <Button>Button</Button>
        </CardBody>
        
      </Card>
                    </div>

                    </div>
        )
    }
}
export default Hari;