import React, { Component } from "react";
import { Register, Home, Login, UsersList } from "../../page";
import swal from "sweetalert";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [
        {
          id: 1,
          username: "eko",
          email: "eko@mail.com",
          password: "1234",
        },
      ],
      cekSession: true,
    };
  }

  addNewUserHandler = (username, email, password) => {
    let userCopy = JSON.parse(JSON.stringify(this.state.usersList));
    let userInputNew = {
      id: userCopy[userCopy.length - 1].id + 1,
      username: username,
      email: email,
      password: password,
    };
    userCopy.push(userInputNew);

    this.setState({ usersList: userCopy });

    console.log("call add new in MAIN LIST:", userInputNew);
  };

  onAddHandler = () => {};
  renderList = () => {};

  renderPage = () => {
    const page = this.props.page;
    const session = this.props.session;
    const cekSession = this.state.cekSession;
    console.log("page : ", page);
    console.log("session : ", session);
    console.log("cek session : ", cekSession);

    if (page === "registrasi")
      return <Register handleSubmit={this.addNewUserHandler} />;

    if (page === "login") return <Login dataUser={this.state.usersList} />;

    if (page === "user" && session !== cekSession) {
      swal("Opss!", "Please, login first!!!");
      return <Login dataUser={this.state.usersList} />;
    } else if (page === "user" && session === cekSession) {
      return <UsersList dataUser={this.state.usersList} />;
    }
    // if (page === "user" && session === data)

    return <Home dataUser={this.state.usersList} />;
  };

  render() {
    return <div className="body">{this.renderPage()}</div>;
  }
}

export default Body;
