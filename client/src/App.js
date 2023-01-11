import React from "react";
import AppRouter from "./Routes";
import setAuthToken from "./utils/setAuthToken";
import { useDispatch } from "react-redux";
import { loadUser } from "./features/auth/auth";

import "./index.css";
import { useEffect } from "react";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}
