/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_setyawan
 */

import React, { Component } from "react";

import { Container, Table, Button, Card } from "react-bootstrap";
import { Thead, Tr, Th, Tbody, Td } from "../../component/tabel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      viewDetail: [],
      detail: false,
      id: 0,
    };
  }
  convertRp = (e) => {
    const format = e.toString().split("").reverse().join(""); //diformat ke dalam string
    const convert = format.match(/\d{1,3}/g); //ambil 3 angka
    const rupiah = "Rp " + convert.join(".").split("").reverse().join(""); //join hasil format dan ambil 3 angka
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
    const { dataUser, loading } = this.props;
    console.log(`cek render`, loading);
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
          <Td>{data.tunjangan}</Td>
          <Td>{data.gajiPokok}</Td>
          <Td>{this.cekRole(data.role)}</Td>
          <Td>{data.absensi * data.tunjangan + data.gajiPokok}</Td>
          <Td colSpan="2">
            <Button
              variant="secondary"
              onClick={() => this.props.editUser(data.id)}
            >
              Edit
            </Button>
            {" | "}
            <Button variant="warning" onClick={() => this.showDetail(data.id)}>
              Detail
            </Button>
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
  render() {
    let h1 = {
      textAlign: "center",
      fontWeight: "bolder",
    };
    // const { dataUser } = this.props;
    const { detail } = this.state;
    console.log("cek detail:", detail);
    if (!detail) {
      return (
        <Container>
          <h1 style={h1}>Halaman Utama</h1>
          <h1 style={h1}>Untuk Tester Data</h1>

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
      const data = this.state.viewDetail;
      console.log("cek id:", data);
      return (
        <>
          <Container>
            <Card>
              <Card.Header as="h5">Detail Karyawan</Card.Header>
              <Card.Body>
                <Card.Title>{data[0]["name"]}</Card.Title>
                <Card.Title>
                  <Table>
                    <Tbody>
                      <Tr>
                        <Td>ID User</Td>
                        <Td width="10px">:</Td>
                        <Td>{data[0]["id"]}</Td>
                      </Tr>
                      <Tr>
                        <Td>Name</Td>
                        <Td width="10px">:</Td>
                        <Td>{data[0]["name"]}</Td>
                      </Tr>
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
                        <td>Absensi</td>
                        <td width="10px">:</td>
                        <td>{data[0]["absensi"]} Hari</td>
                      </tr>
                      <tr>
                        <td>Tunjangan</td>
                        <td width="10px">:</td>
                        <td>{data[0]["tunjangan"]}</td>
                      </tr>
                      <tr>
                        <td>Gaji Pokok</td>
                        <td width="10px">:</td>
                        <td>{data[0]["gajiPokok"]}</td>
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
                </Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Container>
        </>
      );
    }
  }
}

export default Home;
