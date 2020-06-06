import React from "react";
import logo from "../../logo.svg";
import { Link, } from "react-router-dom";
class HomePage extends React.Component {
  render(){
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/ride-app/">RideApp </Link>
        <Link to="/signup/v1">SignUp Page</Link>
        <Link to="/login/v1">LogIn Page</Link>
        <Link to="/page-1">Page 1</Link>
      </header>
    </div>
  );
}
}

export default HomePage;