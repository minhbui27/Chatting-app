
import './App.css';
import LoginPage from './components/LoginPage';
import React, { Component } from 'react';
import { 
  Route, 
  BrowserRouter as Router, 
  Switch,
  Redirect,
} from "react-router-dom"
import HomePage from './components/HomePage';
import {auth} from './components/Firebase';

function App() {
  return (
    <div className="App">
        <LoginPage />
        {/* <HomePage /> */}
    </div>
  );
}

export default App;
