import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Travelix<span>Travel Agency</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
  
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="/home" className="nav-link">
                  Home
                </a>
              </li>
              <NavLink to="/about" className={({isActive}) =>  isActive ? "nav-item active" : "nav-item"}>
              <li className="nav-link">
                About
              </li>
            </NavLink>
              
              <li className="nav-item">
                <a href="/destination" className="nav-link">
                  Destination
                </a>
              </li>
              <li className="nav-item">
                <a href="/hotel" className="nav-link">
                  Hotel
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default HeaderComponent;
            
    