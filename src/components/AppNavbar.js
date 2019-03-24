import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AppNavbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className="navbar-brand" to="/">MVP RECIPE APP</Link>

        <div className="collapse navbar-collapse">
          {/* on the left side of the navbar */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userpage">My Page</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto">
          {/* on the right side of the navbar */}
            <li className="nav-item">
              <Link className="nav-link" to="/signup">SIGN UP</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">SIGN IN</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signout">SIGN OUT</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}



export default AppNavbar;