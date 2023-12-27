import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
    Link
  } from "react-router-dom";
export class Navbar extends Component {
//   static propTypes = {}

  render() {
    return (
      <div>
<nav  style={{height:"70px", fontWeight:"500",backgroundColor:"#032a63"}} className="navbar navbar-expand-lg fixed-top navbar-dark " >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{fontWeight:"800"}}>Newsfresh</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
 <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link></li>
 <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
 <li className="nav-item"> <Link className="nav-link" to="/general">General</Link></li>
 <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
 <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
 <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
 <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li> */}
      </ul>

    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
