import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
// import Reg from './Resgistration';

import Placement from './placement';
import Cpcurrent from './cpcurrent';
import Cppassout from './cppassout';
import Registerdemo from './register';
import Login from './login';
import Home from './Home';

import Placementcard from './placementcard';
import Passedoutcard from './passedoutcard';
import Currentcard from './currentcard';
import Viewpassinfo from './viewpasseinfo';
import Admin from './admin';
import Viewcurrentinfo from './viewcurrentinfo';


//  import Layout from './Layout';
//  import Demo1 from './demo1'
//  import Logindemo from './logindemo';
// import Page from './header';
//  import Viewplement from './viewplacement';
// import Postlist from './Postlist';
// import Hari from './hari';
// import Newapi from './newapi';



ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
