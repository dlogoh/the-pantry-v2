import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAlert, setAlert } from "../features/alert/alertSlice";
import { registerSuccess, registerFail } from "../features/auth/authSlice";
import Alert from "../components/Alert";
// import { Tester } from "../features/auth/auth";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const { name, email, password, password2 } = formData;

  // Redux
  const dispatch = useDispatch();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(
        setAlert({
          type: "danger",
          msg: "Passwords do not match",
          id: "1",
        })
      );
      setTimeout(() => {
        dispatch(removeAlert());
      }, 3000);
    } else {
      console.log("success");

      const newUser = {
        name,
        email,
        password,
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post("/api/users", body, config);

        console.log(res.data);

        dispatch(registerSuccess(res.data));
        setAuthToken(res.data);
      } catch (error) {
        console.error(error.response.data);
        dispatch(registerFail());
      }
    }
  };

  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }

  return (
    <>
      <div className='container'>
        <Alert />
        <h2 className='text-center mt-2 mb-5 pb-5'>Get started today!</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='my-4'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='my-4'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              aria-describedby='emailHelp'
              placeholder='example@email.com'
              required
            />
            <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='my-4'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              placeholder='Must be at least 6 characters'
              required
            />
          </div>
          <div className='my-4'>
            <label htmlFor='password2' className='form-label'>
              Verify Password
            </label>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Register
          </button>
        </form>
        <h5 className='my-5 py-5'>
          Already have an account?{" "}
          <Link to='/login' className='text-primary'>
            Sign In
          </Link>
        </h5>
      </div>
    </>
  );
}

export default Register;
