import React from "react";
import "./hogwarts.css";

class Login extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            email:"admin@gmail.com", password:"Not a good password"
    };

    }


   
    render() {
        return (
        <div><form className="login-form"> 
        <label id="login-label">
        Email
          <input id="login-input" type="text" name="name" placeholder={this.state.email} />
        </label>
        <label id="login-label">
  Password
          <input id="login-input" type="password" name="name" placeholder={this.state.password} />
        </label>
        <button id="login-button">Login</button>
      </form></div>
    );
    }
}
export default Login;