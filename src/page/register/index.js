import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import swal from "sweetalert2";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      address: "",
      userEdit: this.props.onEdit,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, username, email, address, password } = this.state;
    console.log("email", email);
    if (
      name === "" ||
      username === "" ||
      password === "" ||
      email === "" ||
      address === ""
    ) {
      swal.fire("Opss!", "fields must not be empty", "error");
      // } else if (name.indexOf(" ") !== -1 || password.indexOf(" ") !== -1) {
      //   swal("Opss!", "fields mus not contain spaces", "error");
    } else {
      this.props.handleSubmit(name, username, email, password, address);
      this.props.handleEdit(name, username, email, password, address);
      console.log(`cek edit`, name);
      this.setState({
        name: "",
        username: "",
        email: "",
        address: "",
        password: "",
      });
      swal.fire("Yeahh!", "User is registered!!", "success");
    }
    console.log("test", this.state.email);
  };

  render() {
    // console.log("cekkkkk:", this.state.userEdit);
    // console.log("cek name:", this.state.userEdit[0]["name"]);
    const { name, username, email, password, address } = this.state;
    // const { nameEdit } = this.state.userEdit;
    const onEdit = this.props;

    console.log("cek login :", onEdit);
    if (!this.state.userEdit.length) {
      return (
        <div className="container">
          <h1>Register</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  type="address"
                  placeholder="Address"
                  value={address}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>Edit User</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Name"
                  // value=
                  defaultValue={this.state.userEdit[0]["name"]}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Username"
                  defaultValue={this.state.userEdit[0]["username"]}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  defaultValue={this.state.userEdit[0]["email"]}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  type="address"
                  placeholder="Address"
                  defaultValue={this.state.userEdit[0]["address"]}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  defaultValue={this.state.userEdit[0]["password"]}
                  onChange={this.handleChange}
                />
              </Form.Group>
              {/* <Form.Control
                name="id"
                type="text"
                placeholder="id"
                defaultValue={this.state.userEdit[0]["id"]}
                onChange={this.handleChange}
              /> */}

              <Button variant="primary" type="submit">
                Edit
              </Button>
            </Form.Group>
          </Form>
        </div>
      );
    }
  }
}

export default Signup;
