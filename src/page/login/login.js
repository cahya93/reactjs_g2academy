import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import { Register, Home, UsersList } from "../../page";
// import { useSetRecoilState } from "recoil";
// import { useRecoilValue } from "recoil";
// import { filterUsers } from "../../component/user";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [repeatpassword, setRepeatPassword] = useState("");
  // const usersState = useRecoilValue(filterUsers);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  // console.log("test : ", usersState.email());
  const addUser = () => {
    if (email === "") return swal("Opss!", "Email is required");
    if (password === "") return swal("Opss!", "Password is required");
    if (email !== "eko@mail.com") return swal("Opss!", "Email is wrong");
    if (password !== "123456") return swal("Opss!", "Password is wrong");

    swal("Yeahh!", "Login is success!!");
    resetForm();
    // const { goToPage } = this.props;
    // return goToPage("user");
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="container">
        <h1>Login User</h1>
        <Form>
          <Form.Group className="col-lg-6">
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => onChangeEmail(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => onChangePassword(e)}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                type="password"
                value={repeatpassword}
                placeholder="Password"
              />
            </Form.Group> */}
            <Button variant="primary" onClick={() => addUser()}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Login;
