import React from 'react';
import Picker from './components/calendrier.js';
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>"Time-Sheet"</h1>
        <Picker />
      </div>
    );
  };
};