import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-sm">
    <div className="container-fluid">
       <NavLink className="navbar-brand fs-3 fw-5 mx-md-4" to="/">SALES APP</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink className="nav-link active" aria-current="page" to="/addsalesentry">APP SALES</NavLink>
            </li>
            <li className="nav-item">
           <NavLink className="nav-link" to="/topsales">TOP 5 SALES</NavLink>
            </li>
            <li className="nav-item">
           <NavLink className="nav-link" to="/totalrevenue">TODAY'S TOTAL REVENUE</NavLink>
            </li>
            <li className="nav-item">
           <NavLink className="nav-link" to="/login">LOGIN</NavLink>
            </li>
            <li className="nav-item">
           <NavLink className="nav-link" to="/register">REGISTER</NavLink>
            </li>
            <li className="nav-item">
           <NavLink className="nav-link" to="#">LOGOUT</NavLink>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default NavBar