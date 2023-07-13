import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import swal from "sweetalert";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
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

    const { username, email, password } = this.state;

    if (username === "" || password === "" || email === "") {
      swal("Opss!", "fields must not be empty");
    } else if (email.indexOf(" ") !== -1 || password.indexOf(" ") !== -1) {
      swal("Opss!", "fields mus not contain spaces");
    } else {
      this.props.handleSubmit(username, email, password);
      this.setState({
        username: "",
        email: "",
        password: "",
      });
      swal("Yeahh!", "User is registered!!");
    }
    console.log("test", this.state.email);
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <>
        <div className="container">
          <h1>Register</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="col-lg-6">
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Group>

              {/* <Form.Group className="mb-3">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group> */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </>
    );
  }
}

export default Signup;
