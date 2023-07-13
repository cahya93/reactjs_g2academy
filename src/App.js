import React, { Component } from "react";
import { Nav, Body } from "./template";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      session: true,
    };
  }
  changePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  changeSession = (session) => {
    this.setState({
      session: session,
    });
  };

  render() {
    return (
      <>
        <Nav page={this.state.currentPage} goToPage={this.changePage} />
        <Body
          page={this.state.currentPage}
          session={this.state.session}
          goToPage={this.changePage}
        />
      </>
    );
  }
}

export default App;
