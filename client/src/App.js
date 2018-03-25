import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import AuthComponent from './User/AuthComponent';

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

  RequireAuth = (Component, changeState) => {

    return class RequireAuth extends Component {
      constructor(props) {
        super(props);
        this.changeState = changeState;
      }

      componentDidMount() {
        console.log("Checking auth");
        const getToken = localStorage.getItem('token');
        if (!getToken) {
          this.changeState(false);
          this.props.history.replace({ pathname: '/login' });
        } else {
          this.changeState(true);
        }
      }
      render() {
        return <Component {...this.props} />
      }
    }

  }

  render() {
    return (
      <Router>
        <AppBase>
          <AppHeader>
            <AppTitle>PROTOKOLLEN</AppTitle>
          </AppHeader>
          <Switch>
            <Route exact path='/login' component={AuthComponent} />
          </Switch>
        </AppBase>
      </Router>
    );
  }
}

export default App;
