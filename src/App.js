import React, { useState } from 'react';
import Mois from './components/section-mois.js'
import './App.css'
import ReactCalendar from './components/calendrier.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>"Time-Sheet"</h1>
        <div className="div-princ">
          <Mois />
          <ReactCalendar />
        </div> 
      </div>
       
    );
  };
};