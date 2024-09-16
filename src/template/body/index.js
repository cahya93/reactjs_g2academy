/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_setyawan
 */

import React, { Component } from "react";
import swal from "sweetalert2";
import { Register, Home, Login, Jsonplaceholder, Admin } from "../../page";
// import swal from "sweetalert";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      usersEdit: [],
      statusEdit: false,
      index: 0,
      id: 0,
      loading: false,
    };
  }

  addNewUserHandler = (name, username, email, password, address) => {
    let userCopy = JSON.parse(JSON.stringify(this.state.usersList));
    let userInputNew = {
      id: userCopy[userCopy.length - 1].id + 1,
      name: name,
      username: username,
      email: email,
      address: address,
      password: password,
    };
    userCopy.push(userInputNew);

    this.setState({ usersList: userCopy });

    console.log("call add new in MAIN LIST:", userInputNew);
  };

  addEditUser = (name, username, email, password, address) => {
    let userCopy = JSON.parse(JSON.stringify(this.state.usersList));
    let userInputNew = {
      id: this.state.id,
      name: name,
      username: username,
      email: email,
      address: address,
      password: password,
    };
    userCopy.splice(this.state.id - 1, 1, userInputNew);
    console.log("ini id edit:", userCopy.id);

    this.setState({ usersList: userCopy });

    console.log("call edit new in MAIN LIST:", userInputNew);
  };
  componentDidMount() {
    const urlFetch = fetch(
      "https://raw.githubusercontent.com/cahya93/JsonAPI/9f5fd1931a2242ff15310c4fe5931c62ecae9b61/users.json"
    );
    urlFetch
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resJson) => {
        const dataArr = resJson.map((user, index) => {
          return {
            id: index + 1,
            name: user.name,
            email: user.email,
            password: "12345",
            address: user.address,
            role: user.role,
            absensi: user.absensi,
            tunjangan: user.tunjangan,
            gajiPokok: user.gajiPokok,
            status: user.status,
          };
        });
        console.log("JSONDATA:", dataArr);
        this.setState({
          usersList: dataArr,
        });
      })
      // .then((resJson) => {
      //   this.setState({
      //     usersList: resJson,
      //   });
      // })
      .finally(() => this.setState({ loading: true }));
    console.log("cek loading :", this.state.loading);
  }

  renderPage = () => {
    const { page, doLogin, goToPage } = this.props;
    // console.log("jsondata :", dataJson);

    if (page === "registrasi")
      return (
        <Register
          onEdit={this.state.usersEdit}
          handleSubmit={this.addNewUserHandler}
          handleEdit={this.addEditUser}
        />
      );

    if (page === "login")
      return (
        <Login
          dataJson={this.state.usersList}
          setLogin={doLogin}
          setPage={goToPage}
        />
      );
    if (page === "json")
      return (
        <Jsonplaceholder
          datas={this.props.datas}
          dataJson={this.state.usersList}
          editUser={this.editData}
          deleteUser={this.deleteUser}
        />
      );
    if (page === "admin")
      return (
        <Admin
          datas={this.props.datas}
          dataUser={this.state.usersList}
          editUser={this.editData}
          deleteUser={this.deleteUser}
        />
      );
    if (page === "logout")
      return swal.fire("Yahhhh!!!...", "Anda baru saja logut...", "success");
    return (
      <Home
        loading={this.state.loading}
        dataUser={this.state.usersList}
        editUser={this.editData}
        deleteUser={this.deleteUser}
      />
    );
  };

  editData = (id) => {
    const editValue = this.state.usersList
      .filter((user) => user.id === id)
      .map((filterData) => {
        return filterData;
      });

    console.log(`cek userlist`, editValue);
    this.setState({
      usersEdit: editValue,
      name: editValue[0].name,
      username: editValue[0].username,
      email: editValue[0].email,
      id: id,
    });
    console.log(`cek editan : `, editValue[0].name);
    this.props.goToPage("registrasi");
    console.log("cek data id: ", id);
  };

  deleteUser = (id) => {
    console.log("cek body:", id);
    const newUser = this.state.usersList
      .filter((user) => user.id !== id)
      .map((filterUser) => {
        return filterUser;
      });

    this.setState({
      usersList: newUser,
    });
  };

  statusEdit = (id) => {
    this.setState({
      statusEdit: true,
      index: id,
    });
  };

  render() {
    return <div className="body">{this.renderPage()}</div>;
  }
}

export default Body;
