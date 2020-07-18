import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import './Home.css';
import Placement from './placement';
import Login from './login'
import Admin from './admin'
import Resgisterdemo from './register';
import Cpcurrent from './cpcurrent';
import Cppassout from './cppassout';
import Placementcard from './placementcard'
import Passedoutcard from './passedoutcard'; 
import Currentcard from './currentcard';
import Viewcurrentinfo from './viewcurrentinfo';
import ViewPassInfo from './viewplacementinfo'
import Dashcard from './dashboardcard';

const loc = window.localStorage.getItem("userId");
export const From = (props) => {

  const plecementBut = () => {
    props.history.push('/placement')
  }




  // const registerBut = () => {
  //   props.history.push('/register')
  // }
  const cpcurrentBut = () => {
    props.history.push('/cpcurrent')
  }
  const cppassoutBut = () => {
    props.history.push('/cppassout')
  }
  const logoutbut = () => {
    localStorage.removeItem('@Access_token');
    props.history.push('/login')
    // const a = localStorage.removeItem('nazim');
    // console.log(a);

  }
   const Adminbut = () => {
    props.history.push('/admin')
  }



  return (<div className="root">
    <AppBar position="static">
      <Toolbar>


        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">

        </IconButton>
        <Typography variant="h5" className="title">
          {/* Alumini */}
          <span className="font-weight-bold content-center">Alumini</span>.site
      </Typography>
  {
    localStorage.getItem('@Access_token') && 
        <Button onClick={plecementBut} color="inherit">Placement Information</Button>
  }
        {/* <Button onClick={registerBut} color="inherit">Register</Button>  */}
        <Button onClick={cpcurrentBut} color='inherit'>Current student Profile</Button>
        <Button onClick={cppassoutBut} color="inherit">PassedOut Profile</Button>
        <Button onClick={Adminbut} color="inherit">Admin</Button>

        {/* <Button className="glyphicon glyphicon-log-out" onClick={logoutbut} color="inherit">Logout</Button> */}
  <AccountCircleIcon color="inherit"/>
  <ExitToAppIcon style={{margin:"7px"}} onClick={logoutbut}></ExitToAppIcon>
      </Toolbar>
    </AppBar>
    <div>
    <div>
    
</div>
</div>


  </div>
  )
}
class Dash extends Component{
  constructor(props){
    super(props);
    
  }
  render()
  {
    return(
      <>
      <From props={this.props}/>
      <Dashcard />
      </>
    )
  }
}




const plecementBut = (props) => { return <div><Placement /></div> }
const logoutbut = (props) => { return <div><Login /></div> }
const registerBut = (props) => { return <div> <Resgisterdemo /> </div> }
const cpcurrentBut = (props) => { return <div><Cpcurrent /></div> }
const cppassoutBut = (props) => { return <div><Cppassout /></div> }
const Adminbut =(props) =>{return<div><Admin/></div>}

class Home extends Component {
  constructor(props) {

    super(props)
    this.state = { item: [] }


    axios.post('http://localhost:3001/getDashboard')
      .then(response => {
        console.log("our chack dashboard response");
        console.log(response)

      })
  }




  render() {


    return (
      <div>
        <BrowserRouter>
          {/* <div className="root"> */}
            <Switch>
            <Route exact path="/" component={Dash}></Route>
              <Route path="/placement" component={Placement}></Route>
              <Route path='/login' component={Login}></Route>
              <Route path='/register' component={registerBut}></Route>
              <Route path='/cpcurrent' component={cpcurrentBut}></Route>
              <Route path='/cppassout' component={cppassoutBut}></Route>
              <Route path='/placementcard' component={Placementcard}></Route>
              <Route path='/view_pass' component={ViewPassInfo}></Route>
              <Route path='/passcard' component={Passedoutcard}/> 
              <Route path = '/viewcurrentinfo'component = {Viewcurrentinfo}/>
              <Route path = '/currentcard'  component={Currentcard}/>
              <Route path = '/admin'component={Admin}/>
            </Switch>

          {/* </div> */}
        </BrowserRouter>
        
      </div>




    )
  }
}


export default Home