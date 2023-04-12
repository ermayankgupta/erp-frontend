import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Pages/Login";
import DashboardLayout from "./Layouts/DashboardLayout";
import useAxiosPrivate from "./Hooks/Auth/useAxiosPrivate";

function App() {
  useAxiosPrivate()
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<DashboardLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
