import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import AuthComponent from './User/AuthComponent';
import RequireAuth from './User/RequireAuth';

import Protocols from './Protocols/Protocols';
import Protocol from './Protocols/Protocol';


const AppBase = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: midnightblue;
  height: 50px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;


class App extends Component {

  render() {
    return (
      <Router>
        <AppBase>
          <AppHeader>
            <AppTitle>PROTOKOLLEN</AppTitle>
          </AppHeader>
          <Switch>
            <Route exact path='/login' component={AuthComponent} />
            <Route exact path='/protocols' component={Protocols}/>
            <Route exact path='/protocols/:id' component={Protocol}/>
          </Switch>
        </AppBase>
      </Router>
    );
  }
}

export default App;
