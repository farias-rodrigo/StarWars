import React, {useState} from "react";
import { withRouter, Link } from "react-router-dom";

const Login = ({history}) =>{
    const [state, setState] = useState({
        userName:'',
        password: '',
        message: '',
        users:[]
    })
    const {userName, password, message, users} = state;

    const handleInputChange = ({target: {name, value}}) =>{
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = event =>{
        event.preventDefaul();
        users.forEach(u => { 
            if(u.userName === userName.toLowerCase && u.password === password.toLowerCase){    

                sessionStorage.setItem("isLogged",1);
                history.push("/Home");               
            }else{
                setState({
                    ...state,
                    message:"LogIn Failed! Please, check your UserName and / or your Password"
                })
            }
            
        });
    }
    return(
        <div className="row">
      <div className="col-6 text-center mx-auto">
        <h2 className="text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="col-6 mx-auto my-2">
            <input
              className="mx-auto text-center"
              type="userName"
              name="userName"
              placeholder="User Name"
              value={userName}
              onChange={handleInputChange} 
              required
            />
          </div>
          <div className="col-6 mx-auto my-1">
            <input
              className="mx-auto text-center"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange} 
              required
            />
          </div>
          <input type="submit" value="Sign In" />
          {message && <h2 className="text-danger">{message}</h2>}
        </form>
        <Link to="/">Or Sign Up</Link>
      </div>
    </div>
    );

}

export default withRouter(Login);