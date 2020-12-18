import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Nav() {
  return (
    <nav id="navigation" className="navbar navbar-expand-lg navbar-light">
      <Link href="/" className="navbar-brand">
        Melanie Torres
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                href="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/React-Portfolio/project"
                className={
                  window.location.pathname === "/React-Portfolio/project"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/React-Portfolio/contact"
                className={
                  window.location.pathname === "/React-Portfolio/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
