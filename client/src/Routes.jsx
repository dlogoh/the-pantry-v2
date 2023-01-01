import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { getToken } from "./helpers";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Profile from "./components/Profile";

// Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <ApolloProvider client={client}>
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
              path='/register'
              element={
                <>
                  <Navbar />
                  <Register />
                  <Footer />
                </>
              }
            />
            <Route
              path='/signin'
              element={
                <>
                  <Navbar />
                  <SignIn />
                  <Footer />
                </>
              }
            />
            {/* ======== might need to move all routes into a seperate file in order to get ternary render working properly ======== */}
            <Route
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
            />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}
