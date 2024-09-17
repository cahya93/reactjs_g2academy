import React, { Component } from "react";
class Thead extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    return (
      <>
        <thead>{children}</thead>
      </>
    );
  }
}

export default Thead;
