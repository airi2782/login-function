import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './temprates/Login';
import {useSelector} from 'react-redux';

function App() {
  const selector = useSelector((state) => state)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <LogIn/>
        </div>
      </header>
    </div>
  );
}

export default App;
