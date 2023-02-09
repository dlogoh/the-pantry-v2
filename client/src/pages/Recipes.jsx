import React from "react";
import RecipeCard from "../components/recipe-card/RecipeCard";

const Recipes = () => {
  return (
    <div>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-primary fs-1 py-3'>Recipes</h1>
        <select className='form-select mb-5'>
          <option defaultValue={"choose"}>Choose a category</option>
          <option value='breakfast'>Breakfast</option>
          <option value='lunch'>Lunch</option>
          <option value='dinner'>Dinner</option>
          <option value='dessert'>Dessert</option>
          <option value='all'>All</option>
        </select>
      </div>
      <div className='container-fluid'>
        <RecipeCard />
      </div>
    </div>
  );
};

export default Recipes;
