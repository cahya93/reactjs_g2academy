import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { v4 as uuid4 } from "uuid";
import { users } from "../../component/user";
import swal from "sweetalert";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [repeatpassword, setRepeatPassword] = useState("");
  const setUser = useSetRecoilState(users);

  const onChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const onChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const addUser = () => {
    if (firstname === "") return swal("Opss!", "Firstname is required");
    if (lastname === "") return swal("Opss!", "Lastname is required");
    if (username === "") return swal("Opss!", "Usernmae is required");
    if (email === "") return swal("Opss!", "Email is required");
    if (password === "") return swal("Opss!", "Password is required");
    setUser((oldList) => [
      ...oldList,
      {
        id: uuid4(),
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
      },
    ]);
    swal("Yeahh!", "Registration is success!!");
    resetForm();
  };

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="container">
        <h1>Register</h1>
        <Form>
          <Form.Group className="col-lg-6">
            <Form.Group className="mb-3">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                value={firstname}
                placeholder="Fisrtname"
                onChange={(e) => onChangeFirstname(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                value={lastname}
                placeholder="Lastname"
                onChange={(e) => onChangeLastname(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => onChangeUsername(e)}
              />
            </Form.Group>

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

export default Register;
