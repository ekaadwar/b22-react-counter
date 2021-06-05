import React from "react";

class Counter extends React.Component {
  state = {
    result: 0,
    limit: "",
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>{this.props.counterTittle}</h1>
          <div className="counterBody">
            <button>-</button>
            <span>{this.state.result}</span>
            <button>+</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
