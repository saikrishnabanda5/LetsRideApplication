import React from "react";
import { Link,Redirect } from "react-router-dom";
import logo from "../../logo.svg";
import {getCookie,ACCESS_TOKEN} from '../../Authentication/utils/StorageUtils'
class HomePage extends React.Component {
  getSignInPage=()=>{
      return(<Redirect to={{ pathname:"/signin" }}/>)
  }
  getProductsPage=()=>{
    return(<Redirect to={{ pathname:"/products" }}/>)
  }

  render(){
    console.log(getCookie(ACCESS_TOKEN))
    if(getCookie(ACCESS_TOKEN)===1){
      this.getSignInPage();
    }
    else{
      this.getProductsPage();
    }
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
