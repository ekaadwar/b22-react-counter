import React from "react";
import "../App.css";

import Counter from "../components/Counter";

class CounterPage extends React.Component {
  state = {
    result: 0,
    limit: "",
  };

  changeResult = (data) => {
    this.setState({ result: data.result, limit: data.limit });
  };

  render() {
    return (
      <React.Fragment>
        <Counter
          change={this.changeResult}
          num={this.state.result}
          messageLimit={this.state.limit}
          counterTittle="Count"
        />
        {console.log(this.state)}
      </React.Fragment>
    );
  }
}

export default CounterPage;
