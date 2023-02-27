import React, { Component } from "react";
import "./Value.css";

class Value extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
    };
  }

  increment = () => {
    const { val } = this.state;
    if (val === 10) {
      this.setState({ val: 10 });
    } else {
      this.setState({ val: val + 1 });
    }
  };

  decrement = () => {
    const { val } = this.state;
    if (val === -10) {
      this.setState({ val: -10 });
    } else {
      this.setState({ val: val - 1 });
    }
  };

  setColor = () => {
    const { val } = this.state;
    if (val > 0) {
      return "green";
    } else if (val === 0) {
      return "black";
    } else {
      return "red";
    }
  };

  render() {
    const { val } = this.state;
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h2 className={this.setColor()}>{val}</h2>
      </div>
    );
  }
}

export default Value;
