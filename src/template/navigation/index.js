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
      <>
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
        {/* <Menu
          isActivePage={this.checkActivePage("admin")}
          redirect={() =>
            login
              ? goToPage("admin")
              : Swal.fire("Opss!", "Please, login first!!!", "error")
          }
        >
          Admin
        </Menu> */}
      </>
    );
  };

  checkLogout = () => {
    const { login, goToPage } = this.props;
    if (login)
      return (
        <>
          <Menu
            isActivePage={this.checkActivePage("admin")}
            redirect={() => goToPage("admin")}
          >
            Admin
          </Menu>
          <Menu
            isActivePage={this.checkActivePage("logout")}
            redirect={() => goToPage("logout")}
          >
            Logout
          </Menu>
        </>
      );
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
      <>
        <div className="topnav">
          <div className="logo">Yanto.web</div>
          <div className="topnav-right">
            <Menu
              isActivePage={this.checkActivePage("home")}
              redirect={() => goToPage("home")}
            >
              Home
            </Menu>
            {this.checkLogin()}
            {this.checkLogout()}
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
