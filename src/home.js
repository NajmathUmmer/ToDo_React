import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import App from "./App";
import Login from "./login";
class Home extends Component {
    constructor(props){
        super(props);
        this.state={username:"", password:"",repeatPassword:"",users:[],authenticated:false,login:false}
        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handlePwdChange=this.handlePwdChange.bind(this);
        this.handleRptPwdChange=this.handleRptPwdChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.loggedInView=this.loggedInView.bind(this);
        this.loggedOutView=this.loggedOutView.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    handleClick(e) {
        const user={
            username:this.state.username,
            password:this.state.password
        };
        if(this.state.password===this.state.repeatPassword){
        this.setState({
          users: [...this.state.users,user]
        });}
        e.preventDefault();
      }
      handleLogin(e){
          this.setState(
              {
                  login:true
              }
          );
          e.preventDefault()
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
      handleRptPwdChange(e) {
        this.setState({
          repeatPassword: e.target.value
        });
      }
      loggedInView(){
        return(<App/>);
      }
      loggedOutView(){
          if(this.state.login){
              return(<Login/>);
          }
          else{
        return(
            <div>
                <Nav/>
                <div className="container">
                <form onSubmit={this.handleClick}>
                <input
                  type="text"
                  value={this.state.text}
                  placeholder="username"
                  className="form-control textField"
                  onChange={this.handleUsernameChange}
                />
                <input
                  type="password"
                  value={this.state.text}
                  placeholder="password"
                  className="form-control textField"
                  onChange={this.handlePwdChange}
                />
                <input
                  type="password"
                  value={this.state.text}
                  placeholder="repeat password"
                  className="form-control textField"
                  onChange={this.handleRptPwdChange}
                />
                <button className="btn btn-primary textField">Signup</button>
                already a member?<a href="" onClick={this.handleLogin}>Login</a>
              </form>
              </div>
            </div>
        );}
      }
    render(){
        return(this.state.authenticated?this.loggedInView():this.loggedOutView())
    }
}
export default Home;