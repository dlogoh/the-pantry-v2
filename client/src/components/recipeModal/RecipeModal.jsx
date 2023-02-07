import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  nextPage,
  prevPage,
  resetPage,
} from "../../features/recipeModal/recipeModalSlice";
import Tiptap from "../tiptap/Tiptap";
import Instructions from "../tiptap/Instructions";

import axios from "axios";

import "./RecipeModal.css";
import { useState } from "react";

function RecipeModal() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.recipeModal);

  const [formData, setFormData] = useState({
    title: "",
    category: "breakfast",
    isPublic: "",
    ingredients: "",
    instructions: "",
  });

  console.log(formData);

  const { title, category, isPublic, ingredients, instructions } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onClose = (e) => {
    e.preventDefault();

    dispatch(closeModal());
    dispatch(resetPage());
  };

  const onNextPage = (e) => {
    e.preventDefault();

    dispatch(nextPage());
  };

  const onPrevPage = (e) => {
    e.preventDefault();

    dispatch(prevPage());
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        recipe: {
          title,
          category,
          isPublic,
          ingredients,
          instructions,
        },
      };

      const res = await axios.post("/api/profile/myRecipes", body, config);

      console.log(res.data);
      dispatch(closeModal());
    } catch (error) {
      console.error(error.message);
    }
  };

  const page1 = (
    <div className='modal-custom'>
      <div className='modal-content-custom'>
        <div className='modal-head'>
          <h1 className='modal-title-custom'>Add A Recipe</h1>
          <button
            type='button'
            className='btn-close'
            aria-label='Close'
            onClick={(e) => onClose(e)}
          ></button>
        </div>
        <div className='modal-body-custom'>
          <form>
            <div className='mb-3'>
              <p className='ms-3 mb-4'>First, a little information:</p>
              <label htmlFor='title' className='form-label ms-3'>
                Title
              </label>
              <input
                type='text'
                className='form-control w-75 ms-3'
                id='title'
                name='title'
                value={title}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='mb-3 d-flex flex-column'>
              <label htmlFor='category' className='form-label ms-3'>
                Category
              </label>
              <select
                name='category'
                className='drop-down form-select ms-3 w-75'
                id='category'
                value={category}
                onChange={(e) => onChange(e)}
              >
                <option value='breakfast'>Breakfast</option>
                <option value='lunch'>Lunch</option>
                <option value='dinner'>Dinner</option>
                <option value='dessert'>Dessert</option>
              </select>
            </div>
            <div className='mb-3 form-check d-flex'>
              <input
                type='radio'
                className='form-check-input mx-1'
                id='public'
                name='isPublic'
                value={true}
                onChange={(e) => onChange(e)}
              />
              <label className='form-check-label me-5' htmlFor='public'>
                Public
              </label>
              <input
                type='radio'
                className='form-check-input mx-1'
                id='private'
                name='isPublic'
                value={false}
                onChange={(e) => onChange(e)}
              />
              <label className='form-check-label' htmlFor='private'>
                Private
              </label>
            </div>
          </form>
        </div>
        <div className='modal-footer-custom'>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={(e) => onClose(e)}
          >
            Close
          </button>
          <button
            type='button'
            className='btn btn-primary ms-4 px-4'
            onClick={(e) => onNextPage(e)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  const page2 = (
    <div className='modal-custom'>
      <div className='modal-content-custom'>
        <div className='modal-head'>
          <h1 className='modal-title-custom'>Add A Recipe</h1>
          <button
            type='button'
            className='btn-close'
            aria-label='Close'
            onClick={(e) => onClose(e)}
          ></button>
        </div>
        <div className='modal-body-custom'>
          <p className='ms-3'>What are the ingredients?</p>
          <form>
            <Tiptap state={formData} setState={setFormData} />
          </form>
        </div>
        <div className='modal-footer-custom'>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={(e) => onPrevPage(e)}
          >
            Back
          </button>
          <button
            type='button'
            className='btn btn-primary ms-4 px-4'
            onClick={(e) => onNextPage(e)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );

  const page3 = (
    <div className='modal-custom'>
      <div className='modal-content-custom'>
        <div className='modal-head'>
          <h1 className='modal-title-custom'>Add A Recipe</h1>
          <button
            type='button'
            className='btn-close'
            aria-label='Close'
            onClick={(e) => onClose(e)}
          ></button>
        </div>
        <div className='modal-body-custom'>
          <p className='ms-3'>What are the cooking instructions?</p>
          <form>
            <Instructions state={formData} setState={setFormData} />
          </form>
        </div>
        <div className='modal-footer-custom'>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={(e) => onPrevPage(e)}
          >
            Back
          </button>
          <button
            type='button'
            className='btn btn-primary ms-4 px-4'
            onClick={(e) => onSubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {page === 1 && page1}
      {page === 2 && page2}
      {page === 3 && page3}
    </>
  );
}

export default RecipeModal;
