import React, { Component } from "react";
import { Menu } from "../../component";
import Swal from "sweetalert2";
import "./nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkActivePage = (activePage) => {
    const page = this.props.page;
    if (activePage === page) return "active";
    return "";
  };

  checkLogin = () => {
    const { goToPage, login } = this.props;
    return (
      <Menu
        isActivePage={this.checkActivePage("json")}
        redirect={() =>
          login
            ? goToPage("json")
            : Swal.fire("Opss!", "Please, login first!!!", "error")
        }
      >
        JSON
      </Menu>
    );
  };

  checkLogout = () => {
    const { doLogin, login, goToPage } = this.props;
    if (login) return <Menu redirect={() => doLogin(false)}>Logout</Menu>;
    return (
      <>
        <Menu
          isActivePage={this.checkActivePage("registrasi")}
          redirect={() => goToPage("registrasi")}
          doLogin={this.state.loginStatus}
        >
          Register
        </Menu>
        <Menu
          isActivePage={this.checkActivePage("login")}
          redirect={() => goToPage("login")}
        >
          Login
        </Menu>
      </>
    );
  };

  render() {
    const { goToPage } = this.props;
    return (
      <div className="nav">
        <Menu
          isActivePage={this.checkActivePage("home")}
          redirect={() => goToPage("home")}
        >
          Home
        </Menu>
        {this.checkLogin()}
        {this.checkLogout()}
      </div>
    );
  }
}

export default Nav;
