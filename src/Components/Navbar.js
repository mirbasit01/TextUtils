import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <link className="nav-link active" aria-current="page" to="/">
                  Home
                </link> */}
              {/* Changed <link> to <Link> and fixed casing */}
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* <link className="nav-link" to="/about">
                  {props.aboutText}
                </link> */}
              {/* Changed <link> to <Link> and fixed casing */}
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* <div className="d-flex">
            <div
              className="bg-primary roundede mx-2"
              onClick={() => {
                props.toggleMode("primary");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-danger roundede mx-2"
              onClick={() => {
                props.toggleMode("danger");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-success roundede mx-2"
              onClick={() => {
                props.toggleMode("success");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-warning roundede mx-2"
              onClick={() => {
                props.toggleMode("warning");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
             <div
              className="bg-dark roundede mx-2"
              onClick={() => {
                props.toggleMode("dark");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
             <div
              className="bg-light roundede mx-2"
              onClick={() => {
                props.toggleMode("light");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div> */}

             
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
