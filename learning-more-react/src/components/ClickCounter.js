import React, { Component } from "react";

export class ClickCounter extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <button
        className="block mx-auto mt-5 bg-gray-300 px-3 py-1 rounded-md"
        onClick={incrementCount}
      >
        Clicked {count} times
      </button>
    );
  }
}

export default ClickCounter;
