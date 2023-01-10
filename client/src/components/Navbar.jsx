import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark opacity-75 sticky-top py-3'>
      <div className='container-fluid'>
        <a className='navbar-brand text-primary ps-5' href='#!'>
          The Pantry
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end pe-5'
          id='navbarColor01'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/signup' className='nav-link'>
                Sign Up
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                Log In
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
