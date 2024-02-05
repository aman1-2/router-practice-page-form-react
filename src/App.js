import React, { useState } from "react";
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";

const App = () =>{
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return(
    <div className="w-screen h-screen bg-slate-900 flex flex-col">

        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
          <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard></Dashboard></PrivateRoute>}></Route>
        </Routes>

    </div>
  )
}

export default App;