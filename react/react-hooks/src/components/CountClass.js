import React, { Component } from "react";

class CountClass extends Component {
  state = {
    count: 0
  };

  handleClick() {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  render() {
    return (
      <>
        <span>{this.state.count}</span>
        <button type="button" onClick={() => this.handleClick()}>
          Component type classe
        </button>
      </>
    );
  }
}

export default CountClass;
