import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Routes from './routes'
import {withRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav />
      <Routes/>
    </div>
  );
}

export default App;
