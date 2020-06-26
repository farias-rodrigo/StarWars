import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login'
import Logo from './img/Logo.png';
import Background from './img/background.png'


class App extends Component{
render() {
  return (
    <div  style={{backgroundImage: `url(${Background})`}}className="container-fluid ">
    <div className="row">
      <div className="col-12"> 
        <img className="img-fluid mx-auto d-block" src={Logo} alt="logo"/>          
      </div>
      <div className="col-12">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="#">Active</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
      </ul>
      </div>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={Login} exact />
        <Route path="/home" component={Home} exact />        
      </Switch>
    </div>
  </div>
  );
}}

export default App;
