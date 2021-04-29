import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profileImage.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand mr-5" href="#">
        Trell
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse d-flex justify-content-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link
              className="link"
              style={{ color: "black" }}
              to={{
                pathname: "/Hme",
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="link"
              style={{ color: "black" }}
              to={{
                pathname: "/Search",
                state: {
                  searchComponent: "trending",
                },
              }}
            >
              Trending
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <img
              src={profileImage}
            />
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
