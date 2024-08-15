import React, { Component } from "react";
import TopNav from "../../../containers/navs/Topnav";
import Sidebar from "./student1";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      sessionStorage.getItem("role")==="student"?
      <>
        <TopNav />
        <Sidebar />
      </>
      :(
        <Switch>
        <Redirect
          to={'/user/colleges/studentLogin'}
        />
        </Switch>
      )
    );
  }
}

export default Home;