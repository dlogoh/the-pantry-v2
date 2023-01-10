import React from "react";

import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className='background'>
        {/* <img
        src={profileBack}
        alt=''
        className='img-fluid'
        style={{ height: "250px", width: "100%" }}
      /> */}
        <h5 className='pt-5 text-center text-light'>hi</h5>
        <div className='container d-flex flex-column text-light justify-content-center align-items-center'>
          <h5>hi</h5>
          <div className='btncontainer container d-flex justify-content-center flex-end'>
            <button className='btn btn-outline-light text-light px-2 mx-2'>
              My Recipes
            </button>
            <button className='btn btn-outline-light text-light px-2 mx-2'>
              Liked Recipes
            </button>
          </div>
        </div>
      </div>
      <div className='container'>
        {/* Put recipes in a list here. My Recipes should be default */}
      </div>
    </div>
  );
};

export default Profile;
