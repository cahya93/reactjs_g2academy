import React, { Component } from "react";

import { Table, Button } from "react-bootstrap";
import { Thead, Tr, Th, Tbody, Td } from "../../component/tabel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  renderUsers = () => {
    const { dataUser, loading } = this.props;
    console.log(`cek render`, loading);
    if (!loading)
      return (
        <td align="center" colSpan="8">
          <img
            width="150px"
            src="https://www.combantrin.co.id/sites/combantrin_id/files/loading_2.gif"
          ></img>
        </td>
      );
    return dataUser.map((data, index) => {
      return (
        <Tr key={data.id}>
          <Td>{index + 1}</Td>
          <Td>{data.id}</Td>
          <Td>{data.name}</Td>
          <Td>{data.username}</Td>
          <Td>{data.email}</Td>
          <Td>***********</Td>
          <Td>{data.address}</Td>
          <Td colSpan="2">
            <Button
              variant="secondary"
              onClick={() => this.props.editUser(data.id)}
            >
              Edit
            </Button>
            {" | "}
            <Button
              variant="danger"
              onClick={() => this.props.deleteUser(data.id)}
            >
              Delete
            </Button>
          </Td>
        </Tr>
      );
    });
  };
  render() {
    let h1 = {
      textAlign: "center",
      fontWeight: "bolder",
    };
    // const { dataUser } = this.props;
    return (
      <>
        <div className="container">
          <h1 style={h1}>Halaman Utama</h1>
          <h1 style={h1}>Untuk Tester Data</h1>

          <Table striped bordered hover size="sm" variant="dark">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>ID User</Th>
                <Th>Name</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Password</Th>
                <Th>Address</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>{this.renderUsers()}</Tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default Home;
