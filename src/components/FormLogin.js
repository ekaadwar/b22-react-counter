import React from "react";

class FormLogin extends React.Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  inputChangePassword = (event) => {
    this.setState({ password: event.target.value });
    if (this.state.password.length < 6) {
      this.setState({ error: "Password length must be greatter than 6" });
    } else {
      this.setState({ error: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {this.props.formTitle}
        <div>Username</div>
        <div>
          <input
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
            type="text"
          />
        </div>
        <div>Password</div>
        <div>
          <input onChange={this.inputChangePassword} type="text" />
        </div>
        <div>{this.state.error !== "" && this.state.error}</div>
        <div>
          <button>Login</button>
        </div>
      </form>
    );
  }
}

export default FormLogin;
