import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Reg from './Resgistration';
import Container from "reactstrap/lib/Container";
import {Row,Col} from 'reactstrap';
import './Layout.css';


function Layout() {
  return (
    <div>
    <div>
      
        < Row className="Header">
          <h1>Alumini</h1></Row>
          {/* </Row> */}
        {/* </Container> */}
    </div>
    <Router>
      <div>
        <table align='center'>
          
            <tr><Link to="/"><button>Home</button></Link>
        
            <Link to="/Register"><button>Register</button></Link>
          
          
            <Link to="/dashboard"><button>Dashboard</button></Link></tr>
    
        </table>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Register" component={Reg}></Route>
        
          

        </Switch>
      </div>
    </Router>
    </div>
  );
}


export default Layout;