import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode=== "dark"? "dark":"light"} bg-${props.mode=== "dark"? "dark":"light"}`}>
  <div className="container-fluid dark">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to ="/">TextUtility</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className=" mx-3"  onClick={() => props.toggleBG("#089797","flexRadioDefault1")} >
        <input className="-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="-label mx-1" htmlFor="flexRadioDefault">
         Cyan
        </label>
      </div>
      <div className=" mx-3 "   onClick={() => props.toggleBG("#243260","flexRadioDefault2")} >
        <input className="-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
        <label className="-label mx-1" htmlFor="flexRadioDefault">
         Blue
        </label>
      </div>
      <div className=" mx-3 "   onClick={() => props.toggleBG("#304630")} >
        <input className="-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"  />
        <label className="-label mx-1" htmlFor="flexRadioDefault">
        Green
        </label>
      </div>
      <div className=" mx-3 " onClick={() => props.toggleBG("#848484","flexRadioDefault4")} >
        <input className="-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"  />
        <label className="-label mx-1" htmlFor="flexRadioDefault">
         Grey
        </label>
      </div>
      <div>
      <div className=" form-check form-switch mx-3"  onClick={props.toggleMode} >
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  />
        <label className={`form-check-label `}  htmlFor="flexSwitchCheckDefault" style ={{color:props.mode ==="dark"?"white":"black"}} >Enable Dark Shade</label>
      </div>
      </div>
    </div>
  </div>
</nav>

  )
}

Navbar.propTypes = {
  name:PropTypes.string.isRequired
}

Navbar.defaultProps = {
  name:"Hello Default"
}

export default Navbar;

