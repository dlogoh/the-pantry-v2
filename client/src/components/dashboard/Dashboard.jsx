import React, { useEffect } from "react";
import { getCurrentProfile } from "../../features/profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../features/auth/auth";

import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getCurrentProfile());
  }, [dispatch]);

  const { user } = useSelector((state) => state.auth);
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
          <button className='btn btn-secondary mx-3'>Liked Recipes</button>
          <button className='btn btn-secondary mx-3 px-4'>My Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
