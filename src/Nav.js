import React, { Component } from "react";
import "./App.css";

class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="">To-Do</a>
    <a className="logout" href="">Logout</a>
  </nav>
        );

    }
}
 export default Nav