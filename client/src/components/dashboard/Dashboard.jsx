import React, { useEffect, useState } from "react";
import { getCurrentProfile } from "../../features/profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../features/auth/auth";

import "./Dashboard.css";

const Dashboard = () => {
  const [flip, setFlip] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
    dispatch(loadUser());
  }, [dispatch]);

  const { user } = useSelector((state) => state.auth);
  const { profile, loading } = useSelector((state) => state.profile);

  let displayLikes;
  let displayRecipes;

  if (!loading) {
    displayLikes = profile.likes.map((item) => {
      return (
        <li key={item.toString()} className='list-group-item fs-5'>
          {item}
        </li>
      );
    });

    displayRecipes = profile.myRecipes.map((item) => {
      return (
        <li key={item.toString()} className='list-group-item fs-5'>
          {item}
        </li>
      );
    });
  }

  const handleLike = () => {
    setFlip(true);
  };

  const handleRecipe = () => {
    setFlip(false);
  };

  return (
    <div>
      <div className='container profile-back'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <img src={`${user.avatar}`} alt='' className='rounded-circle mt-3' />
          <h4 className='text-light mt-2'>{user.name}</h4>
        </div>
      </div>
      <div className='container dash-container'>
        <div className='container d-flex justify-content-center align-items-center mt-3'>
          <button
            className='btn btn-secondary mx-3'
            onClick={(e) => handleLike(e)}
          >
            Liked Recipes
          </button>
          <button
            className='btn btn-secondary mx-3 px-4'
            onClick={(e) => handleRecipe(e)}
          >
            My Recipes
          </button>
        </div>
        <div className='container'>
          <ul className='list-group bg-primary mt-4'>
            {flip ? displayLikes : displayRecipes}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
