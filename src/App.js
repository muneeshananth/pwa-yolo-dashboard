import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./Login.js";
import Main from "./Main.js";
import Profile from "./Profile";
import Parents from "./Parents.js";
import Wallet from "./Wallet";
import Living from "./Living.js";
import Country from "./Country.js";
import Changepassword from "./Changepassword.js";
import Guest from "./Guest";
import Test from "./Test";
import FileUpload from './FileUpload'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route path="/dashboard" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/country" element={<Country />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/living" element={<Living />} />
          <Route path="/test" element={<Test />} />
          <Route path="/fileupload" element={<FileUpload />} />          
        </Routes>
      </AuthProvider>
  );
}

export default App;
