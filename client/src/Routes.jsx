import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import Recipes from "./pages/Recipes";
import Post from "./components/post/Post";

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
          <Route
            path='/dashboard'
            element={
              <>
                <PrivateRoute>
                  <Navbar />
                  <Dashboard />
                  <Footer />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path='/recipes'
            element={
              <>
                <PrivateRoute>
                  <Navbar />
                  <Recipes />
                  <Footer />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path='/post'
            element={
              <>
                <PrivateRoute>
                  <Navbar />
                  <Post />
                  <Footer />
                </PrivateRoute>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
