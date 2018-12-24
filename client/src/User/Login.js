import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    margin: 20px;
    width: 50%;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 2px;
    outline: none; 
`;

const LoginButton = styled.button`
    color: midnightblue;
    background-color: inherit;
    border: 1px solid midnightblue;
    border-radius: 2px;
    outline: none;
    margin: 10px auto;
    padding: 5px 15px;
    display: block;

    &:hover{
        cursor:pointer;
        transform: translateY(-1px);
    }
    
`;

class Login extends Component {

    state = {
        username : '',
        password : ''
    }

    onChange = e => {
        const {name, value} = e.target;
        this.setState({[name] : value});
    }

    onLogin = () => {
        fetch('/api/auth/signIn', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: {
                'username': this.state.username,
                'password': this.state.password
            }
        }).then(results => {
            console.log(results)
        });
    }

    render() {
        return(
            <div>
                <Input name="username" type="text" autoFocus placeholder="Username" onChange={this.onChange}/>
                <Input name="password" type="password" placeholder="Password" onChange={this.onChange}/>
                <LoginButton onClick={this.onLogin}>Login</LoginButton>
            </div>
        );
    }
}

export default Login;