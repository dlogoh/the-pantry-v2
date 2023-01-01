import React from "react";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import AppRouter from "./Routes";

import "./index.css";

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
