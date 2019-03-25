import React, { Component } from 'react';
import '../App.css';
class SignIn extends Component {
  render() {
    return (
      <div className="signin">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input type='text' name='email' onChange={this.handleEmail}></input>
          </div>
          <div>
            <label>Password:</label>
            <input type='text' name='password' onChange={this.handlePassword}></input>
          </div>
          <div>
            <input type='submit' value='Login'></input>
          </div>
        </form>

      </div>
    )
  }
}

export default SignIn