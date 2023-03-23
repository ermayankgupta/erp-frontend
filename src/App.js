import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Employee from "./Pages/Employee";
import Attendence from "./Pages/Attendence";
import Home from "./Pages/Dashboard/Home";
import Leave from "./Pages/Leave";
import Payslips from "./Pages/Payslips";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/employees" element={<Employee />} />
            <Route path="/attendence" element={<Attendence />} />
            <Route path="/leaves" element={<Leave />} />
            <Route path="/payslips" element={<Payslips />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
