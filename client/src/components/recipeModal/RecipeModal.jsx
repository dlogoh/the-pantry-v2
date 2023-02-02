import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  nextPage,
  prevPage,
  resetPage,
} from "../../features/recipeModal/recipeModalSlice";
import Tiptap from "../tiptap/Tiptap";

import "./RecipeModal.css";

function RecipeModal() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.recipeModal);

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
              />
            </div>
            <div className='mb-3 d-flex flex-column'>
              <label htmlFor='category' className='form-label ms-3'>
                Category
              </label>
              <select
                name='category'
                className='drop-down form-select ms-3 w-75'
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
                name='selector'
                value='public'
              />
              <label className='form-check-label me-5' htmlFor='public'>
                Public
              </label>
              <input
                type='radio'
                className='form-check-input mx-1'
                id='private'
                name='selector'
                value='private'
              />
              <label className='form-check-label' htmlFor='private'>
                Private
              </label>
            </div>
            {/* <Tiptap /> */}
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
          <p className='ms-3'>What are the ingredients? (use bullet points)</p>
          <form>
            <Tiptap />
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

  return <>{page === 1 ? page1 : page2}</>;
}

export default RecipeModal;
