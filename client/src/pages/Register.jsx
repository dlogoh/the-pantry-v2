import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { API } from "../constant";
import { setToken } from "../helpers";

import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Row,
  Spin,
  Typography,
} from "antd";

function Register() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  // });

  // const { name, email, password, password2 } = formData;

  // const onChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (password !== password2) {
  //     console.log("Passwords must match");
  //   } else {
  //     console.log("Registered!");
  //   }
  // };

  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        message.success("Welcome to The Pantry");

        navigate("/profile", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "Something went wrong...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='container w-75 my-5'>
        <Row align='middle'>
          <Col span={24} offset={0}>
            <Card title='SignUp'>
              {error ? (
                <Alert
                  className='alert_error'
                  message={error}
                  type='error'
                  closable
                  afterClose={() => setError("")}
                />
              ) : null}
              <Form
                name='basic'
                layout='vertical'
                onFinish={onFinish}
                autoComplete='off'
              >
                <Form.Item
                  label='Username'
                  name='username'
                  rules={[
                    {
                      required: true,
                      type: "string",
                    },
                  ]}
                >
                  <Input placeholder='Username' />
                </Form.Item>
                <Form.Item
                  label='Email'
                  name='email'
                  rules={[
                    {
                      required: true,
                      type: "email",
                    },
                  ]}
                >
                  <Input placeholder='Email address' />
                </Form.Item>

                <Form.Item
                  label='Password'
                  name='password'
                  rules={[{ required: true }]}
                >
                  <Input.Password placeholder='Password' />
                </Form.Item>

                <Form.Item>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='login_submit_btn'
                  >
                    Submit {isLoading && <Spin size='small' />}
                  </Button>
                </Form.Item>
              </Form>
              <Typography.Paragraph className='form_help_text'>
                Already have an account? <Link to='/signin'>Sign In</Link>
              </Typography.Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );

  // return (
  //   <div className='container'>
  //     <h2 className='text-center my-5'>Get started today!</h2>
  //     {error ? (
  //       <Alert
  //         className='alert_error'
  //         message={error}
  //         type='error'
  //         closable
  //         afterClose={() => setError("")}
  //       />
  //     ) : null}
  //     <form onSubmit={(e) => onSubmit(e)}>
  //       <div className='my-4'>
  //         <label htmlFor='name' className='form-label'>
  //           Name
  //         </label>
  //         <input
  //           type='text'
  //           className='form-control'
  //           id='name'
  //           name='name'
  //           value={name}
  //           onChange={(e) => onChange(e)}
  //           required
  //         />
  //       </div>
  //       <div className='my-4'>
  //         <label htmlFor='email' className='form-label'>
  //           Email address
  //         </label>
  //         <input
  //           type='email'
  //           className='form-control'
  //           id='email'
  //           name='email'
  //           aria-describedby='emailHelp'
  //           placeholder='example@email.com'
  //           value={email}
  //           onChange={(e) => onChange(e)}
  //           required
  //         />
  //         <div id='emailHelp' className='form-text'>
  //           We'll never share your email with anyone else.
  //         </div>
  //       </div>
  //       <div className='my-4'>
  //         <label htmlFor='password' className='form-label'>
  //           Password
  //         </label>
  //         <input
  //           type='password'
  //           className='form-control'
  //           id='password'
  //           name='password'
  //           placeholder='Must be at least 6 characters'
  //           value={password}
  //           onChange={(e) => onChange(e)}
  //           required
  //         />
  //       </div>
  //       <div className='my-4'>
  //         <label htmlFor='password2' className='form-label'>
  //           Verify Password
  //         </label>
  //         <input
  //           type='password'
  //           className='form-control'
  //           id='password2'
  //           name='password2'
  //           value={password2}
  //           onChange={(e) => onChange(e)}
  //           required
  //         />
  //       </div>
  //       <button type='submit' className='btn btn-primary'>
  //         Register
  //       </button>
  //     </form>
  //     <h5 className='my-5 py-5'>
  //       Already have an account?{" "}
  //       <Link to='/login' className='text-primary'>
  //         Sign In
  //       </Link>
  //     </h5>
  //   </div>
  // );
}

export default Register;
