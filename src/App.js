import React from "react";
// ----- Form Login -------
// import Form from "./components/FormLogin";

// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>My First React</h1>
//         <Form formTitle="This Title" />
//       </React.Fragment>
//     );
//   }
// }
// ----- Akhir Form Login -------

import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {
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

export default App;
