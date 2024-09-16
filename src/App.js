import React, { Component } from "react";
import { Nav, Body } from "./template";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      loginStatus: false,
      userLogin: [],
    };
  }
  changePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  changeStatusLogin = (status, dataLogin) => {
    this.setState({
      loginStatus: status,
      userLogin: dataLogin,
      currentPage: "admin",
    });
  };

  render() {
    return (
      <>
        <Nav
          doLogin={this.changeStatusLogin}
          login={this.state.loginStatus}
          page={this.state.currentPage}
          goToPage={this.changePage}
        />
        <Body
          page={this.state.currentPage}
          login={this.state.session}
          goToPage={this.changePage}
          doLogin={this.changeStatusLogin}
          datas={this.state.userLogin}
          loggedIn={this.state.loginStatus}
        />
      </>
    );
  }
}

export default App;
