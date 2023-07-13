// import React from "react";
import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Thead, Tr, Th } from "../tabel";
import { useRecoilValue } from "recoil";
import { filterUsers } from ".";
// import { useRecoilValue, useResetRecoilState } from "recoil";
// import { filterUsers, filterUsersValue, users } from ".";
// import EditModal from "./modals/EditModal";
// import DeleteModal from "./modals/DeleteModal";

const ListUsers = () => {
  const usersState = useRecoilValue(filterUsers);
  // const resetList = useResetRecoilState(users);
  // const resetfilterUsersValue = useResetRecoilState(filterUsersValue);

  // Modals
  // const [showEdit, setShowEdit] = useState(false);
  // const [showDelete, setShowDelete] = useState(false);
  // const [userId4Actions, setUserId4Actions] = useState(0);
  const [setShowEdit] = useState(false);
  const [setShowDelete] = useState(false);
  const [setUserId4Actions] = useState(0);

  // const handleEditClose = () => setShowEdit(false);

  const handleEditShow = () => setShowEdit(true);

  // const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  // const resetAtoms = () => {
  //   resetList();
  //   resetfilterUsersValue();
  // };
  const editProduct = (id) => {
    handleEditShow();
    setUserId4Actions(id);
  };

  const deleteProduct = (id) => {
    handleDeleteShow();
    setUserId4Actions(id);
  };

  let email1 = 1;
  let email2 = 2;
  const onLoad = () => {
    if (email1 !== email2) {
      return `hidden = "hidden"`;
    }
  };

  return (
    <>
      <Table striped bordered hover variant="dark">
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Firstname</Th>
            <Th>Lastname</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <tbody>
          {!usersState.length ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                user not found...
              </td>
            </tr>
          ) : (
            usersState.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td colSpan="2">
                  <Button
                    onLoad={onLoad()}
                    variant="secondary"
                    onClick={() => editProduct(data.id)}
                  >
                    Edit
                  </Button>{" "}
                  {" | "}
                  <Button
                    variant="danger"
                    onClick={() => deleteProduct(data.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* <Button variant="secondary" size="lg" onClick={() => resetAtoms()}>
        Clear Data
      </Button> */}

      {/* <EditModal
        show={showEdit}
        id={userId4Actions}
        handleClose={handleEditClose}
      />

      <DeleteModal
        show={showDelete}
        id={userId4Actions}
        handleClose={handleDeleteClose}
      /> */}
    </>
  );
};

export default ListUsers;
