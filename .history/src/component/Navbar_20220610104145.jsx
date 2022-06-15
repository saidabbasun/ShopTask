import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 sha">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="#">
        LA COLLECTION
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            
            
            </ul>
            <div className="buttons">
                <a href="#" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1">Login</i>
                </a>
                <a href="#" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in me-1">Register</i>
                </a>
                <a href="#" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in me-1">Cart (0 </i>
                </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
