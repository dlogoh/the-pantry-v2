import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("success");
    // const newUser = {
    //   name,
    //   email,
    //   password,
    // };

    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };

    //   const body = JSON.stringify(newUser);

    //   const res = await axios.post("/api/users", body, config);

    //   console.log(res.data);
    // } catch (error) {
    //   console.error(error.response.data);
    // }
  };

  return (
    <>
      <div className='container'>
        <h2 className='text-center my-5'>Sign In</h2>
        <form onSubmit={(e) => onSubmit(e)}>
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
          <button type='submit' className='btn btn-primary my-4'>
            Log In
          </button>
        </form>
        <h5 className='my-5 py-5'>
          Don't have an account?{" "}
          <Link to='/signup' className='text-primary'>
            Sign Up
          </Link>
        </h5>
      </div>
    </>
  );
};

export default SignIn;
