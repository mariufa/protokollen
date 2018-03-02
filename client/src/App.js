import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'; 
import './App.css';

import RequireAuth from './User/RequireAuth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Protokollen</h1>
        </header>

      </div>
    );
  }
}

export default App;
