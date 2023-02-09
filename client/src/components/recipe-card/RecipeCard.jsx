import React, { useEffect, useState } from "react";
import axios from "axios";

const RecipeCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function postFetch() {
      const post = await axios.get("/api/posts");
      setPosts(post);
    }
    postFetch();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget.id);
    const value = e.currentTarget.id;

    const post = await axios.get(`/api/posts/${value}`);

    console.log(post);
  };

  if (posts.data) {
    var recipes = posts.data.map((item) => {
      if (item.recipe.isPublic === "true") {
        return (
          <div className='card mb-3' key={item._id} value={item._id}>
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
        );
      }
      return null;
    });
  }

  return <>{recipes}</>;
};

export default RecipeCard;
