import React, { Component } from 'react';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';

const AuthBox = styled.div`
    padding: 10px;
    margin: 20px auto;
    width: 60%
    border: 1px solid #eee;
    border-radius: 5px;
`;

const TabBox = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 50% auto; 
`;

const Tab = styled.button`
    padding: 10px;
    cursor: pointer;
    border: none;
    background-color: inherit;
    color: midnightblue;
    outline: none;
    font-size: 1.0em;
    border-bottom: ${props => props.selected ? '2px solid midnightblue' : '' };
`;

class AuthComponent extends Component {
    state = {
        loginSelected: true
    }

    onClickTab = e => {
        const { name } = e.target;
        if (name === 'login') {
            this.setState({loginSelected: true});
        } else {
            this.setState({loginSelected: false});
        }
    }

    render(){
        const { loginSelected } = this.state;
        return(
            <AuthBox>
                <TabBox>
                    <Tab name="login" selected={loginSelected} onClick={this.onClickTab}>Login</Tab>
                    <Tab name="register" selected={!loginSelected} onClick={this.onClickTab}>Register</Tab>
                </TabBox>
                {loginSelected && <Login/>}
                {!loginSelected && <Register/>}
            </AuthBox>
        );
    }
}

export default AuthComponent;   