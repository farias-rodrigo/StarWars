import React, {Component} from 'react';
import Home from './Components/Home';
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
      <Home/>
    </div>
  </div>
  );
}}

export default App;
