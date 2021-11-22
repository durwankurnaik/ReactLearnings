import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    // static propTypes = {

    // }

    render(props) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Florange</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/donate">Donate us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/offers">Special Offers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About us</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="toggleMode" />
                                <label className="form-check-label" htmlFor="toggleMode">Enable Dark mode</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
