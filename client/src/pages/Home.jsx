import React from "react";
import { Link } from "react-router-dom";

import cardImg from "../img/card-img.jpg";
import cardImg2 from "../img/card-img2.jpg";
import cardImg3 from "../img/card-img3.jpg";

import "./Home.css";

export default function Home() {
  return (
    <div id='home'>
      <div className='container-fluid'>
        <h1 className='text-center mt-4'>
          Welcome to{" "}
          <span className='text-custom text-primary'>The Pantry</span>
        </h1>
        <h3 className='my-5 text-center'>
          Where you will never forget another recipe
        </h3>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center flex-md-row'>
        <div className='card mb-3 mb-md-0' style={{ width: "18rem" }}>
          <img className='card-img-top' src={`${cardImg}`} alt='Card' />
          <div className='card-body'>
            <h5 className='card-title'>
              Tired of scrolling through ads to find the recipe you want?
            </h5>
            <p className='card-text'>
              With The Pantry, recipes are displayed in a simple layout. Spend
              less time looking at ads and more time cooking.
            </p>
          </div>
        </div>
        <div className='card mx-3 mb-3 mb-md-0' style={{ width: "18rem" }}>
          <img className='card-img-top' src={`${cardImg2}`} alt='Card' />
          <div className='card-body'>
            <h5 className='card-title'>
              Having trouble finding your favorite recipe?
            </h5>
            <p className='card-text mb-5'>
              Not anymore. This will be your one stop for discovering new
              recipes and saving your favorites.
            </p>
          </div>
        </div>
        <div className='card' style={{ width: "18rem" }}>
          <img className='card-img-top' src={`${cardImg3}`} alt='Card' />
          <div className='card-body'>
            <h5 className='card-title'>
              Got a great recipe you'd like to share?
            </h5>
            <p className='card-text mb-5'>
              Here you can share your recipes with others so they too can enjoy
              some great food!
            </p>
          </div>
        </div>
      </div>
      <hr className='text-primary my-5' />
      <h1 className='text-center my-5'>Are you ready to get started?</h1>
      <div className='container d-flex justify-content-center mb-5'>
        <button className='btn btn-primary mx-3'>
          <Link to='/signup' className='text-white text-decoration-none'>
            Sign Up
          </Link>
        </button>
        <button className='btn btn-primary mx-3'>
          <Link to='/login' className='text-white text-decoration-none'>
            Log In
          </Link>
        </button>
      </div>
    </div>
  );
}
