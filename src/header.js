import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./login";
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ height: "664px", position: "relative" }}>
        {/* <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>  */}
        {/* <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header> */}
        <Layout>
          <Drawer title="Title">
            <Navigation>
              <a href="./login.js">Login</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </Navigation>
          </Drawer>
          <Content />
        </Layout>
      </div>
    );
  }
}
export default Page;
