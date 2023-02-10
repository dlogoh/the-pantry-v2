import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Viewer from "../tiptap/Viewer";
import backArrow from "../../img/back-arrow-icon.svg";
import { resetPost } from "../../features/post/postSlice";

import "./Post.css";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { recipeId, title, category, ingredients, instructions, date } =
    useSelector((state) => state.post);

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(resetPost());
  };

  if (!recipeId) {
    navigate("/recipes");
  }

  return (
    <div>
      <img
        src={`${backArrow}`}
        className='back-arrow'
        alt=''
        onClick={(e) => handleClick(e)}
      />
      <div className='container'>
        <h1 className='text-center my-4 text-primary'>{title}</h1>
        <h5 className='text-center my-2 text-muted'>{category}</h5>
        <hr />
      </div>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <h3 className='my-4'>Ingredients:</h3>
        <Viewer post={ingredients} />
      </div>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <h3 className='my-4'>Cooking Instructions:</h3>
        <Viewer post={instructions} />
      </div>
      <div className='container-fluid'>
        <h5 className='text-muted fs-6'>
          Published:{" "}
          {new Date(date).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h5>
      </div>
    </div>
  );
};

export default Post;
