import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Navbar from "./Components/Navbar";
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
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/login" component={Login} exact />
        <Route path="/home" component={Home} exact />        
      </Switch>
    </div>
  </div>
  );
}}

export default App;
