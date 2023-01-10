import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
// import Profile from "./components/Profile";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path='/contact'
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path='/signup'
            element={
              <>
                <Navbar />
                <Register />
                <Footer />
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <Navbar />
                <SignIn />
                <Footer />
              </>
            }
          />
          {/* <Route
              path='/profile'
              element={
                getToken() ? (
                  <>
                    <Navbar />
                    <Profile />
                    <Footer />
                  </>
                ) : (
                  <>
                    <Navbar />
                    <SignIn />
                    <Footer />
                  </>
                )
              }
            /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
