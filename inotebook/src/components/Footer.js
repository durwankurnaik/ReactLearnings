import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  let location = useLocation();

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2021 DurwankurNaik, Inc</p>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><Link to="/" className={`nav-link px-2 text-${location.pathname === "/" ? "white":"secondary"}`}>Home</Link></li>
          <li className="nav-item"><Link to="/about" className={`nav-link px-2 text-${location.pathname === "/about" ? "white":"secondary"}`}>About</Link></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
