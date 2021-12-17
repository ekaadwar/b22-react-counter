import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Switch to <Link to="/counter">Conter Page</Link>
        </h1>
      </div>
    );
  }
}

export default HomePage;
