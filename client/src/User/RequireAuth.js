import React, { Component } from 'react';

const RequireAuth = (Component) => {
    return class RequireAuth extends Component {

        constructor(props) {
            super(props);
        }

        componentWillMount() {
            const token = localStorage.getItem('token');
            if (!token) {
                this.props.history.replace({ pathname: '/login' });
            } 
        }
        render() {
            return <Component {...this.props} />
        }
    }
}

export default RequireAuth;

