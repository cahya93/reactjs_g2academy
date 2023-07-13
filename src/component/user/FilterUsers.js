import React from "react";
import { useRecoilState } from "recoil";

import { filterUsersValue } from ".";
import { Form, Button } from "react-bootstrap";

const FilterUsers = () => {
  const [filterUsersState, filterUsers] = useRecoilState(filterUsersValue);

  const filter = (event) => {
    const { value } = event.target;
    filterUsers(value);
  };

  const clearFilter = () => filterUsers("");

  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Filter:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Filter by Firstname"
          value={filterUsersState}
          onChange={(e) => filter(e)}
        />
      </Form.Group>

      <Button variant="info" onClick={() => clearFilter()}>
        Clear Filter
      </Button>
    </Form>
  );
};

export default FilterUsers;
