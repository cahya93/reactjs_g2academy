import React, { Component } from "react";
class Th extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    return <th>{children}</th>;
  }
}

export default Th;
