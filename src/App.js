import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path= "profile" element = {<Profile />} />
        <Route  path = "login" element = {<Login />} />
        <Route path = "register" element = {<Register />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App