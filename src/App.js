import React,{ Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './components/login.js';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
}from "react-router-dom"

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="">
          <Login/>
        </Route>
      </Switch>
    
    </Router>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
