import React, { Component } from "react";
import TopNav from "../../../containers/navs/Topnav";
import Sidebar from "./college1";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      sessionStorage.getItem("role")==="college"?
      <>
        <TopNav />
        <Sidebar />
      </>
      :(
        <Switch>
        <Redirect
          to={'/user/colleges/login'}
        />
        </Switch>
      )
    );
  }
}

export default Home;