import React, { useEffect, useState } from "react";
import { getCurrentProfile } from "../../features/profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { loadUser } from "../../features/auth/auth";
import { openModal } from "../../features/recipeModal/recipeModalSlice";
import RecipeModal from "../recipeModal/RecipeModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(getCurrentProfile());
  }, [dispatch]);

  const [flip, setFlip] = useState(true);

  const { user } = useSelector((state) => state.auth);
  const { profile, loading } = useSelector((state) => state.profile);
  const { isOpen } = useSelector((state) => state.recipeModal);

  const handleClick = async (e) => {
    e.preventDefault();
  };

  let displayLikes;
  let displayRecipes;

  if (!loading) {
    if (!profile.likes) {
      displayLikes = (
        <li className='list-group-item fs-5 d-flex align-items-center justify-content-between'>
          Liked recipes show here
        </li>
      );
    } else {
      displayLikes = profile.likes.map((item) => {
        return (
          <li
            key={item.toString()}
            className='list-group-item fs-5 d-flex align-items-center justify-content-between'
          >
            {item}
          </li>
        );
      });
    }

    displayRecipes = profile.myRecipes.map((item) => {
      return (
        <li
          key={item._id}
          className='list-group-item fs-5 d-flex align-items-center justify-content-between'
        >
          {item.title}
          <button onClick={(e) => handleClick(e)} className='btn'>
            <FontAwesomeIcon
              icon={faTrashCan}
              className='text-primary'
              // onClick={(e) => handleClick(e)}
            />
          </button>
        </li>
      );
    });
  }

  const addRecipe = (e) => {
    e.preventDefault();

    if (!isOpen) {
      dispatch(openModal());
    }
  };

  const handleLike = () => {
    setFlip(true);
  };

  const handleRecipe = () => {
    setFlip(false);
  };

  return (
    <div>
      <CSSTransition in={isOpen} timeout={1000} classNames='t'>
        {isOpen ? <RecipeModal /> : <div></div>}
      </CSSTransition>
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
        <div className='container-fluid h-75'>
          <ul className='list-group mt-4 overflow-scroll h-100'>
            {flip ? displayLikes : displayRecipes}
          </ul>
        </div>
      </div>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-5'>
        <button
          className='btn btn-primary rounded-circle'
          onClick={(e) => addRecipe(e)}
        >
          +
        </button>
        <p className='text-secondary text-center'>Add Recipe</p>
      </div>
    </div>
  );
};

export default Dashboard;
