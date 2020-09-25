import React, { Component } from "react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uName: "",
      uPassword: "",
    };
  }
  render() {
    return (
      <div>
        <form>
          <span>Login</span>
          <br></br>
          Username : <input type="text"></input>
          <br></br>
        </form>
      </div>
    );
  }
}

export default LoginPage;
