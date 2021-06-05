import React from "react";

class Counter extends React.Component {
  state = {
    result: 0,
    limit: "",
  };

  subData = () => {
    const count = this.state.result - 1;
    if (count >= 0) {
      this.setState({ limit: "" });
      this.setState({ result: count });
    } else {
      this.setState({ limit: "This is minimum Number" });
    }
  };

  sumData = () => {
    const count = this.state.result + 1;
    if (count <= 10) {
      this.setState({ limit: "" });
      this.setState({ result: count });
    } else {
      this.setState({ limit: "This is maximum Number" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>{this.props.counterTittle}</h1>
          <div className="counterBody">
            <button onClick={this.subData}>-</button>
            <span>{this.state.result}</span>
            <button onClick={this.sumData}>+</button>
          </div>
          {this.state.limit}
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
