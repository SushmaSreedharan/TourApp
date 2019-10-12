import React from "react";
import "./hogwarts.css";

class Login extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
        
            email:"admin@gmail.com", password:"Not a good password",showing:"login"

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
    }

 
   handleInputChange(event){
    this.setState({email: event.target.value});
     console.log(event.target.value);
   }
   handleSubmit(event){
    event.preventDefault();
    if(this.state.email == "admin@email.org"){
      
      console.log("admin clicked");
      this.props.loginAuthentication(this.state.email);
       }
       else if(this.state.email == "cust@email.org"){
      
        console.log("customer clicked");
        this.props.loginAuthentication(this.state.email);
         } 

   }


    render() {
        
        return (
        <div><form className="login-form"> 
        <label id="login-label">
        Email
          <input id="login-input" type="text" name="email" value={this.email} placeholder={this.state.email} onChange={this.handleInputChange} />
        </label>
        <label id="login-label">
  Password
          <input id="login-input" type="password" name="password" placeholder={this.state.password} />
        </label>
        <button onClick = {this.handleSubmit} id="login-button">Login</button>
      </form></div>
    );
    }
}
export default Login;