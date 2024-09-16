/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April_2021
 * Tutor @Wawan_setyawan
 */

import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    const { email, password } = this.state;
    const { dataJson } = this.props;
    console.log(`email : `, email);
    console.log(`password : `, password);
    console.log(`database :`, dataJson);
    for (let i = 0; i < dataJson.length; i++) {
      console.log("user in login", dataJson[i]["email"]);
      if (
        email === dataJson[i]["email"] &&
        password === dataJson[i]["password"]
      ) {
        const editValue = dataJson
          .filter((user) => user.email === email)
          .map((filterData) => {
            return filterData;
          });

        console.log(`cek userlist`, editValue);
        this.props.setLogin(true, editValue);
        return Swal.fire("Yeahh...", "Login is success!", "success");
      }
    }
    return Swal.fire("Oops...", "Email/Password is wrong!", "error");
  };
  render() {
    const { email, password } = this.state;
    // const loggedIn = this.props.loggedIn;

    return (
      <>
        <Container>
          <h1>Login</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={email}
                  placeholder="email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                LOGIN
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </>
    );
  }
}
export default Login;
