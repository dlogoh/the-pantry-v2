import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../constant";
import { setToken, storeUser } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setError } from "../features/auth/authSlice";

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

const SignIn = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((store) => store.auth);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    dispatch(setIsLoading(true));
    try {
      const value = {
        identifier: values.email,
        password: values.password,
      };
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        storeUser(data.user);

        message.success(`Welcome back ${data.user.username}`);

        // navigate("/profile", { replace: true });
        window.location.replace("http://localhost:3000/profile");
      }
    } catch (error) {
      console.error(error);
      dispatch(setError(error?.message ?? "Something went wrong..."));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <>
      <div className='container w-75 my-5'>
        <Row align='middle'>
          <Col span={24} offset={0}>
            <Card title='Sign In'>
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
                    className='btn btn-primary py-1'
                  >
                    Login {isLoading && <Spin size='small' />}
                  </Button>
                </Form.Item>
              </Form>
              <Typography.Paragraph className='form_help_text'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
              </Typography.Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SignIn;
