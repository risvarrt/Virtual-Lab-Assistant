import React, { Component } from "react";
import TopNav from "../../containers/navs/Topnav";
import Sidebar from "./home1";
class Home extends Component {

  render() {
    return (
      <>
        <TopNav />
        <Sidebar />
      </>
    );
  }
}

export default Home;
