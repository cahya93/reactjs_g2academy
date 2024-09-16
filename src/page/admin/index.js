/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_setyawan
 */
import React, { Component } from "react";
import { Thead, Tr, Th, Tbody, Td } from "../../component/tabel";
import {
  Container,
  Table,
  Button,
  Card,
  Form,
  Col,
  Row,
} from "react-bootstrap";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLogin: [],
      viewDetail: [],
      viewEdit: [],
      detail: false,
      editUser: false,
    };
  }

  convertRp = (e) => {
    const format = e.toString().split("").reverse().join(""); //diformat ke dalam string
    const convert = format.match(/\d{1,3}/g); //ambil 3 angka
    const rupiah =
      "Rp " + convert.join(".").split("").reverse().join("") + ",00"; //join hasil format dan ambil 3 angka
    return rupiah;
  };
  cekRole = (e) => {
    if (e === 1) {
      return "HRD";
    } else if (e === 2) {
      return "Manager";
    } else {
      return "Karyawan";
    }
  };

  renderUsers = () => {
    const { dataUser, datas } = this.props;
    console.log(`cek render`, dataUser);
    // if (!loading)
    //   return (
    //     <Td align="center" colSpan="8">
    //       <img src="../../image/loading.gif"></img>
    //     </Td>
    //   );
    return dataUser.map((data, index) => {
      return (
        <Tr key={data.id}>
          <Td>{index + 1}</Td>
          <Td>{data.id}</Td>
          <Td>{data.name}</Td>
          <Td>{data.email}</Td>
          <Td>{data.address}</Td>
          <Td>{data.absensi} Hari</Td>
          <Td>{this.convertRp(data.tunjangan)}</Td>
          <Td>{this.convertRp(data.gajiPokok)}</Td>
          <Td>{this.cekRole(data.role)}</Td>
          <Td>
            {this.convertRp(data.absensi * data.tunjangan + data.gajiPokok)}
          </Td>
          <Td colSpan="2">
            {datas[0]["role"] === 1 ? (
              <>
                {/* <Button
                  variant="secondary"
                  onClick={() => this.showEdit(data.id)}
                >
                  Edit
                </Button>
                {"|"} */}
                <Button
                  variant="warning"
                  onClick={() => this.showDetail(data.id)}
                >
                  Detail
                </Button>
              </>
            ) : (
              <Button
                variant="warning"
                onClick={() => this.showDetail(data.id)}
              >
                Detail
              </Button>
            )}
          </Td>
        </Tr>
      );
    });
  };
  showDetail = (id) => {
    const detail = this.props.dataUser
      .filter((user) => user.id === id)
      .map((filterData) => {
        return filterData;
      });
    this.setState({
      detail: true,
      viewDetail: detail,
    });
  };
  showEdit = (id) => {
    const detail = this.props.dataUser
      .filter((user) => user.id === id)
      .map((filterData) => {
        return filterData;
      });
    this.setState({
      editUser: true,
      viewEdit: detail,
    });
  };
  buttonBack = () => {
    this.setState({
      detail: false,
      editUser: false,
    });
  };
  render() {
    let h1 = {
      textAlign: "center",
      fontWeight: "bolder",
    };
    const { datas } = this.props;
    const { detail, editUser } = this.state;
    if (datas[0]["role"] === 1 || datas[0]["role"] === 2)
      if (!detail) {
        return (
          <Container>
            <h1 style={h1}> Your Login as {this.cekRole(datas[0]["role"])}</h1>
            <h1 style={h1}> Welcome, {datas[0]["name"]}</h1>

            <Table striped bordered hover size="sm" variant="dark">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>ID User</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Address</Th>
                  <Th>Jml Absensi</Th>
                  <Th>Tunjangan</Th>
                  <Th>Gaji Pokok</Th>
                  <Th>Role</Th>
                  <Th>Total Gaji</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>{this.renderUsers()}</Tbody>
            </Table>
          </Container>
        );
      } else {
        // const { editUser } = this.state;
        const data = this.state.viewDetail;
        console.log("cek editUser:", editUser);
        if (!editUser) {
          return (
            <Container className="mt-3">
              <Card>
                <Card.Header as="h5">
                  Detail Karyawan {data[0]["name"]}
                </Card.Header>
                <Card.Body>
                  {datas[0]["role"] === 1 ? (
                    <>
                      <Button
                        variant="secondary mb-3"
                        onClick={() => this.showEdit(data[0]["id"])}
                      >
                        Edit
                      </Button>
                    </>
                  ) : (
                    ""
                  )}
                  <Table>
                    <Tbody>
                      <tr>
                        <td>ID User</td>
                        <td width="10px">:</td>
                        <td>{data[0]["id"]}</td>
                      </tr>
                      <tr>
                        <td>Name</td>
                        <td width="10px">:</td>
                        <td>{data[0]["name"]}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td width="10px">:</td>
                        <td>{data[0]["email"]}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td width="10px">:</td>
                        <td>{data[0]["address"]}</td>
                      </tr>
                      <tr>
                        <td>Jabatan</td>
                        <td width="10px">:</td>
                        <td>{this.cekRole(data[0]["role"])}</td>
                      </tr>
                      <tr>
                        <td>Absensi</td>
                        <td width="10px">:</td>
                        <td>{data[0]["absensi"]} Hari</td>
                      </tr>
                      <tr>
                        <td>Tunjangan</td>
                        <td width="10px">:</td>
                        <td>{this.convertRp(data[0]["tunjangan"])}</td>
                      </tr>
                      <tr>
                        <td>Gaji Pokok</td>
                        <td width="10px">:</td>
                        <td>{this.convertRp(data[0]["gajiPokok"])}</td>
                      </tr>
                      <tr>
                        <td>Total Gaji</td>
                        <td width="10px">:</td>
                        <td>
                          {this.convertRp(
                            data[0]["absensi"] * data[0]["tunjangan"] +
                              data[0]["gajiPokok"]
                          )}
                        </td>
                      </tr>
                    </Tbody>
                  </Table>
                  <Card.Text>Catatan:</Card.Text>
                  <Button variant="primary" onClick={this.buttonBack}>
                    Back
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          );
        } else {
          const data = this.state.viewEdit;
          console.log("cek edit data:", data);
          return (
            <Container className="mt-3">
              <Card>
                <Card.Header as="h5">
                  Edit Karyawan {data[0]["name"]}
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="2">
                        Id User
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={data[0]["id"]}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="2">
                        Name
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          plaintext
                          readOnly
                          type="text"
                          placeholder="name"
                          defaultValue={data[0]["name"]}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="2">
                        Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          plaintext
                          readOnly
                          type="email"
                          placeholder="name"
                          defaultValue={data[0]["email"]}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="2">
                        Address
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          plaintext
                          readOnly
                          type="text"
                          placeholder="name"
                          defaultValue={data[0]["address"]}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="2">
                        Jabatan
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          plaintext
                          readOnly
                          type="text"
                          placeholder="name"
                          defaultValue={this.cekRole(data[0]["role"])}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="2">
                        Absensi
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="number"
                          placeholder="name"
                          defaultValue={data[0]["absensi"]}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="2">
                        Tunjangan
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="number"
                          placeholder="name"
                          defaultValue={data[0]["tunjangan"]}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm="2">
                        Gaji Pokok
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="number"
                          placeholder="name"
                          defaultValue={data[0]["gajiPokok"]}
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                  <Card.Text>Catatan:</Card.Text>
                  <Button variant="primary mr-3" onClick={this.buttonBack}>
                    Back
                  </Button>
                  <Button variant="primary" onClick={this.buttonBack}>
                    SAVE
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          );
        }
      }

    if (datas[0]["role"] === 3)
      return (
        <>
          <h1 style={h1}> Your Login as {this.cekRole(datas[0]["role"])}</h1>
          <Container className="mt-3">
            <Card>
              <Card.Header as="h5">
                Detail Karyawan {datas[0]["name"]}
              </Card.Header>
              <Card.Body>
                <Table>
                  <Tbody>
                    <tr>
                      <td>ID User</td>
                      <td width="10px">:</td>
                      <td>{datas[0]["id"]}</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td width="10px">:</td>
                      <td>{datas[0]["name"]}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td width="10px">:</td>
                      <td>{datas[0]["email"]}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td width="10px">:</td>
                      <td>{datas[0]["address"]}</td>
                    </tr>
                    <tr>
                      <td>Jabatan</td>
                      <td width="10px">:</td>
                      <td>{this.cekRole(datas[0]["role"])}</td>
                    </tr>
                    <tr>
                      <td>Absensi</td>
                      <td width="10px">:</td>
                      <td>{datas[0]["absensi"]} Hari</td>
                    </tr>
                    <tr>
                      <td>Tunjangan</td>
                      <td width="10px">:</td>
                      <td>{this.convertRp(datas[0]["tunjangan"])}</td>
                    </tr>
                    <tr>
                      <td>Gaji Pokok</td>
                      <td width="10px">:</td>
                      <td>{this.convertRp(datas[0]["gajiPokok"])}</td>
                    </tr>
                    <tr>
                      <td>Total Gaji</td>
                      <td width="10px">:</td>
                      <td>
                        {this.convertRp(
                          datas[0]["absensi"] * datas[0]["tunjangan"] +
                            datas[0]["gajiPokok"]
                        )}
                      </td>
                    </tr>
                  </Tbody>
                </Table>
                <Card.Text>Catatan:</Card.Text>
                <Button variant="primary" onClick={this.buttonBack}>
                  Back
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </>
      );
  }
}

export default Admin;
