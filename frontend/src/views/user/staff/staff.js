import React, { Component } from "react";
import TopNav from "../../../containers/navs/Topnav";
import Sidebar from "./staff1";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      sessionStorage.getItem("role")==="staff"?
      <>
        <TopNav />
        <Sidebar />
      </>
      :(
        <Switch>
        <Redirect
          to={'/user/colleges/staffLogin'}
        />
        </Switch>
      )
    );
  }
}

export default Home;