import React from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`${localStorage.token?"/notes":"/"}`}><img src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png" alt="Not found" height="40px" width="50px" style={{borderRadius: "15px"}} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" || location.pathname === "/notes" ? "active" : ""}`} aria-current="page" to={`${localStorage.token?"/notes":"/"}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>

          </ul>
          {!localStorage.getItem('token') ? <form className="d-flex">
            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
          </form> : <button onClick={handleLogout} className="btn btn-primary mx-1">Logout</button>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
