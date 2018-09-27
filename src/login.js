import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={username:"",password:""};
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }
    handleUsernameChange(e) {
        this.setState({
          username: e.target.value
        });
      }
      handlePwdChange(e) {
        this.setState({
          password: e.target.value
        });
      }
      handleClick(e){
          
          const users=this.props.users.map(
              (user)=>{
                  if(user.username===this.state.username&& user.password===this.state.password)
              {
                  this.props.onClick();
                  console.log("hello")
              }
            }
          );
          e.preventDefault();

      }
    render(){
        return(
            <div>
                {/* <Nav/> */}
            <div className="container">
            <form onSubmit={this.handleClick}>
              <input
                type="text"
                value={this.state.username}
                placeholder="username"
                className="form-control textField"
                onChange={this.handleUsernameChange}
              />
              <input
                type="password"
                value={this.state.password}
                placeholder="password"
                className="form-control textField"
                onChange={this.handlePwdChange}
              />
              <button className="btn btn-primary textField">Login</button>
                
            </form></div>
            </div>
        );
    }
}

export default Login;