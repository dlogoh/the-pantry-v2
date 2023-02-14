import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loadPost, resetPost } from "../../features/post/postSlice";

import "./RecipeCard.css";

const RecipeCard = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function postFetch() {
      const post = await axios.get("/api/posts");
      setPosts(post);
    }
    postFetch();
    dispatch(resetPost());
  }, [dispatch]);

  const handleClick = async (e) => {
    e.preventDefault();
    const value = e.currentTarget.id;
    const post = await axios.get(`/api/posts/${value}`);

    dispatch(
      loadPost({
        recipeId: post.data._id,
        title: post.data.recipe.title,
        category: post.data.recipe.category,
        ingredients: post.data.recipe.ingredients,
        instructions: post.data.recipe.instructions,
        date: post.data.date,
      })
    );
    navigate("/post");
  };

  if (posts.data) {
    var recipes = posts.data.map((item) => {
      if (item.recipe.isPublic === "true") {
        return (
          <div className='recipe-container' key={item._id}>
            <div className='card mb-3 recipe-card' value={item._id}>
              <div
                className='card-body'
                value={item._id}
                id={item._id}
                onClick={(e) => handleClick(e)}
              >
                <h5 className='card-title'>{item.recipe.title}</h5>
                <h6 className='card-subtitle mb-2 text-primary'>
                  - {item.recipe.category}
                </h6>
              </div>
            </div>
          </div>
        );
      }
      return null;
    });
  }

  return <>{recipes}</>;
};

export default RecipeCard;
