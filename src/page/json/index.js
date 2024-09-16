/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April_2021
 * Tutor @Wawan_setyawan
 */
import React, { Component } from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import { Thead, Tr, Th, Tbody, Td } from "../../component/tabel";

class JsonPlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      dataEdit: [
        {
          name: "",
          username: "",
        },
      ],
    };
  }
  cekRole = (e) => {
    if (e === 1) {
      return "HRD";
    } else if (e === 2) {
      return "Manager";
    } else {
      return "Karyawan";
    }
  };
  render() {
    let h1 = {
      textAlign: "center",
      fontWeight: "bolder",
    };
    const { dataJson, datas } = this.props;
    console.log(`cek user login`, datas);
    return (
      <>
        <Container>
          <Row>
            <Col>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  Your Login as {this.cekRole(datas[0]["role"])}
                </Card.Body>
              </Card>
              <h1 style={h1}>Data JSON</h1>
              <Table striped bordered hover variant="dark">
                <Thead>
                  <Tr>
                    <Th>No</Th>
                    <Th>ID</Th>
                    <Th>Name</Th>
                    <Th>Username</Th>
                    <Th>Email</Th>
                    <Th>Password</Th>
                    <Th>Address</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataJson.map((data, index) => (
                    <Tr key={data.id}>
                      <Td>{index + 1}</Td>
                      <Td>{data.id}</Td>
                      <Td>{data.name}</Td>
                      <Td>{data.username}</Td>
                      <Td>{data.email}</Td>
                      <Td>********</Td>
                      <Td>{data.address}</Td>
                      <Td colSpan="2">
                        {datas === data.email ? (
                          <Button
                            variant="secondary"
                            onClick={() => this.props.editUser(data.id)}
                          >
                            Edit
                          </Button>
                        ) : (
                          <Button
                            variant="danger"
                            onClick={() => this.props.deleteUser(data.id)}
                          >
                            Delete
                          </Button>
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default JsonPlaceholder;
