import React, { Component } from "react";
class Tbody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    return (
      <>
        <tbody>{children}</tbody>
      </>
    );
  }
}

export default Tbody;
