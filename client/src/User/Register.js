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

const RegisterButton = styled.button`
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

class Register extends Component {

    state = {
        username : '',
        password : '',
        password2: ''
    }

    onChange = e => {
        const {name, value} = e.target;
        this.setState({[name] : value});
    }

    render() {
        return(
            <div>
                <Input name="username" type="text" autoFocus placeholder="Username" onChange={this.onChange}/>
                <Input name="password" type="password" placeholder="Password" onChange={this.onChange}/>
                <Input name="password2" type="password" placeholder="Retype password" onChange={this.onChange}/>
                <RegisterButton>Register</RegisterButton>
            </div>
        );
    }
}

export default Register;