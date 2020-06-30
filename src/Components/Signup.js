import React, {useState} from "react";
import { withRouter, Link } from "react-router-dom";

const Signup = ({history}) =>{
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
            if(u.userName.toLowerCase !== userName.toLowerCase){  
              let user = {userName: userName,
                          password: password        
                        }  
              debugger;

              setState({
                ...state,
                userName: userName,
                password: password,
                ...users,
                user,
              })
              console.log(users);
              sessionStorage.setItem("isLogged",1);
              history.push("/Home");

            }else{
                setState({
                    ...state,
                    userName:"",
                    password:"",
                    message:"This userName already exists, please try another one or login"                   
                })
            }
            
        });
    }
    return(
        <div className="col-12">
      <div className="col-12 text-center mx-auto">
        <h2 className="text-center text-white">Sign Up</h2>
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
          <input type="submit" value="Sign Up" />
          {message && <h2 className="text-danger">{message}</h2>}
        </form>
        <Link to="/login">Or Sign In</Link>
      </div>
    </div>
    );

}

export default withRouter(Signup);