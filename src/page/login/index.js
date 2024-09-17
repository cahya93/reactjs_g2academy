import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
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
        this.props.setLogin(true, email);
        return Swal.fire("Yeahh...", "Login is success!", "success");
      }
    }
    return Swal.fire("Oops...", "Email/Password is wrong!", "error");
  };
  render() {
    const { email, password } = this.state;
    const loggedIn = this.props.loggedIn;

    if (!loggedIn) {
      return (
        <>
          <div className="container">
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
          </div>
        </>
      );
    } else {
      const { password, email } = this.props.currentUser;

      const containerStyling = {
        margin: "30px 20%",
        border: "#FF7700 solid 1px",
        borderRadius: "6px",
        textAlign: "center",
      };

      return (
        <div style={containerStyling}>
          <h2>Welcome Back</h2>
          <div>
            <p>Your email is: {email}</p>
            <p>Your password is: {password}</p>
          </div>
          <button onClick={this.props.handleLog}>Logout</button>
        </div>
      );
    }
  }
}
export default Login;
