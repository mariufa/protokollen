import React, { Component } from 'react';

RequireAuth = (Component, setLoginState) => {
    return class RequireAuth extends Component {
        constructor(props) {
            super(props);
            this.setLoginState = setLoginState;
        }

        componentDidMount() {
            const token = localStorage.getItem('token');
            if (token) {
                this.setLoginState(true);
            } else {
                this.setLoginState(false);
                this.props.history.replace({ pathname: '/login' });
            }
        }
        render() {
            return <Component {...this.props} />
        }
    }
}

export default RequireAuth;

