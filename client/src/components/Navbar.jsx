import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { removeToken } from "../helpers";

export default function Navbar() {
  const { user } = useAuthContext();

  const handleLogout = () => {
    removeToken();
    // navigate("/login", { replace: true });
    window.location.replace("http://localhost:3000/");
  };
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark opacity-75 sticky-top py-3'>
      <div className='container-fluid'>
        <a className='navbar-brand text-primary' href='#!'>
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
          className='collapse navbar-collapse justify-content-end'
          id='navbarColor01'
        >
          <ul className='navbar-nav'>
            {user ? (
              <>
                <li className='nav-item'>
                  <Link to='/recipes' className='nav-link'>
                    Recipes
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/profile' className='nav-link'>
                    Profile
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/' className='nav-link' onClick={handleLogout}>
                    Log Out
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/contact' className='nav-link'>
                    Contact
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link to='/' className='nav-link active'>
                    Home
                    <span className='visually-hidden'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/register' className='nav-link'>
                    Sign Up
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/signin' className='nav-link'>
                    Log In
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/contact' className='nav-link'>
                    Contact
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
