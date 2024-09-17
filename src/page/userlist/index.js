import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Thead, Tr, Th, Tbody, Td } from "../../component/tabel";

class UserList extends Component {
  render() {
    let h1 = {
      textAlign: "center",
      fontWeight: "bolder",
    };
    const { dataUser } = this.props;
    return (
      <>
        <div className="container">
          {/* <FilterUsers /> */}
          <h1 style={h1}>Daftar User</h1>
          <Table striped bordered hover variant="dark">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Password</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {!dataUser.length ? (
                <Tr>
                  <Td colSpan="6" style={{ textAlign: "center" }}>
                    user not found...
                  </Td>
                </Tr>
              ) : (
                dataUser.map((data, index) => (
                  <Tr key={data.id}>
                    <Td>{index + 1}</Td>
                    <Td>{data.username}</Td>
                    <Td>{data.email}</Td>
                    <Td>{data.password}</Td>
                    <Td colSpan="2">
                      <Button variant="secondary">Edit</Button> {" | "}
                      <Button variant="danger">Delete</Button>
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default UserList;
