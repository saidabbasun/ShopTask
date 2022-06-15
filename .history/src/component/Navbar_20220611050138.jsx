import React from "react";
import {NawLink} from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" href="#">
        LA COLLECTION
          </NavLink>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" href="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Contact
                </NavLink>
              </li>
            
            
            </ul>
            <div className="buttons">
                <NavLink href="#" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1">Login</i>
                </NavLink>
                <NavLink href="#" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in me-1">Register</i>
                </NavLink>
                <NavLink href="#" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in me-1">Cart (0 </i>
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}