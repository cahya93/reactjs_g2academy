import React, { Component } from "react";
class Td extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    return <td>{children}</td>;
  }
}

export default Td;
