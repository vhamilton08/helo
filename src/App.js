import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Routes from './Routes'
import {withRouter} from 'react-router-dom'

function App(props) {
  return (
    <div>
      {props.location.pathname !== '/' ? 
      <Nav /> : null}
      {Routes}
    </div>
  );
}

export default withRouter(App);
